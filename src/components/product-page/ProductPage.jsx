import React,{ Component } from "react";
import { getInfo } from "../../api/api";
import { getProduct } from "../../queries/queries";
import {
    Container, MiniPicturesWrapper, MainPictureWrapper, MiniImageThumb, Image, List, Item,
    ProductContainer, AttributesList, ItemsList, AttItem, ListItemTitle, AttributeItem,
    AttributeItemContainer, ProductTitle, AttItemColor,
    ProductSubTitle, ProductText, ProductPrice, DescriptionText, AddToCartButton, ColorText, AddToCartButtonDisabled
} from "./ProductPage.styled";

export default class ProuctPage extends Component {
    constructor() {
        super();
        this.state = {
            product: null,
            currency: '',
            activeIndex: null,
            color: {
                id: "color",
                value: null
            },
            size: {
                id: "size",
                value: null
            },
            capacity: {
                id: "capacity",
                value: null
            }
        };
    }

    componentDidMount() {
        if (!this.props.product) {
            const product = JSON.parse(localStorage.getItem('product'));
            if (product !== null) {
                getInfo(getProduct(product)).then(res => this.setState({ product: res.product }))
            }
        }

        if (this.props.product) {
            getInfo(getProduct(this.props.product)).then(res => this.setState({ product: res.product }))
        }
        this.setState({ currency: this.props.currency })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.product === null) {
            const product = JSON.parse(localStorage.getItem('product'));
            getInfo(getProduct(product)).then(res => this.setState({ product: res.product }))
        }
        if (this.props.currency !== prevProps.currency) {
            this.setState({ currency: this.props.currency })
        }
        // if (this.state !== prevState.state) {
        //     console.log("should copy state");
            
        //          this.setState({
        //              custom: [
        //                  ...this.state.custom,
        //                  {id:this.state.attribute, value: this.state.activeIndex}
        //              ]
        //          })
        // }
    }

    productSpecsChoise = (e, idx, item) => {
        console.log(item);
        this.setState({
            [e.currentTarget.dataset.name.toLowerCase()]: {
                id: e.currentTarget.dataset.name.toLowerCase(),
                value: idx
            }
    
        })
        // console.log(e.currentTarget);
        // console.log(idx);
        // if (this.state.product.custom) {
        //     this.setState({
        //         product: {
        //             ...this.state.product,
        //             custom: [
        //                 ...this.state.product.custom,
        //                 { id: e.currentTarget.dataset.name.toLowerCase(), value: idx }
        //             ]
        //         }
        //     })} else {
        //     this.setState({
        //         product: {
        //             ...this.state.product,
        //             custom: [
        //                 { id: e.currentTarget.dataset.name.toLowerCase(), value: idx }
        //             ]
        //         }})}}
        // e.target.textContent
    }
    render() {
        const { product } = this.state;
        
        return (
            //Main container
            <Container>
                {/* Container for small images column */}
                <MiniPicturesWrapper>
                    <div>
                        <List>
                            {product && product.gallery.map(item => <Item key={item}>
                                <MiniImageThumb>{<Image src={item} alt={product.description} />}</MiniImageThumb>
                            </Item>)}
                        </List>
                    </div>
                </MiniPicturesWrapper>
                {/* Container for main picture  */}
                <MainPictureWrapper>
                    {product && <Image src={product.gallery[0]} alt={product.description} />}
                </MainPictureWrapper>
                {/* Container for main info */}
                <ProductContainer>
                    {product &&
                        <>
                            <ProductTitle>{product.brand}</ProductTitle>
                            <ProductSubTitle>{product.name}</ProductSubTitle>
                            <ProductText>{product.attributes.name}</ProductText>

                            {product.attributes &&
                                <AttributesList>
                                {product.attributes.map((item) => {
                                    // console.log("itm:", this.state[`${item.id.toLowerCase()}`].value);
                                    if (item.id.toLowerCase() ==='color') {
                                        console.log("color");
                                    }
                                    if (item.id.toLowerCase() ==='capacity') {
                                        console.log('capacity');
                                    }
                                    if (item.id.toLowerCase() ==='size') {
                                        console.log('size');
                                    }

                                    return (
                                            <AttributeItem key={item.id}>
                                                <AttributeItemContainer>
                                                    <ListItemTitle>{item.id}:</ListItemTitle>
                                                    <ItemsList>
                                                        {item.items.map((it, idx) => {
                                                            // console.log(this.state[`${item.id.toLowerCase()}`]);
                                                            if (idx === this.state[`${item.id.toLowerCase()}`].value && item.id.toLowerCase() === this.state[`${item.id.toLowerCase()}`].id && item.id !== "Color") {
                                                                return <AttItem onClick={(e) => this.productSpecsChoise(e, idx, item)} chosen key={it.id} data-name={item.id}>{it.value}</AttItem>
                                                            }
                                                            if (item.id === "Color") {
                                                                return idx === this.state.color.value ? <AttItemColor onClick={(e) => this.productSpecsChoise(e, idx, item)} key={it.id} data-name={item.id} color={`${it.value}`}
                                                                border>{it.value}</AttItemColor> : <AttItemColor onClick={(e) => this.productSpecsChoise(e, idx, item)} key={it.id} data-name={item.id} color={`${it.value}`}
                                                                >{it.value}</AttItemColor>
                                                            } else {
                                                                return <AttItem onClick={(e) => this.productSpecsChoise(e, idx, item)} key={it.id} data-name={item.id}>{it.value}</AttItem>
                                                            }
                                                        })}
                                                    </ItemsList>
                                                </AttributeItemContainer>
                                            </AttributeItem>)
                                    })}
                                </AttributesList>
                            }
                            <ProductText>Price:</ProductText>
                            <ProductPrice>{(product.prices.map((price) => {
                                if (price.currency.symbol === this.props.currency.trim()) return `${this.state.currency} ${price.amount}`
                                return null;
                            }))}</ProductPrice>
                            {product.inStock === true ? <AddToCartButton type="button" onClick={() => this.props.handleClick(product)}>Add to cart</AddToCartButton> :
                                <AddToCartButtonDisabled type="button" disabled >Add to cart</AddToCartButtonDisabled>}
                            <DescriptionText dangerouslySetInnerHTML={{ __html: product.description }}></DescriptionText>
                        </>
                    }
                </ProductContainer>
            </Container>
        );
    }
}

// {item.items.map((it, idx) => {
//                                                             if (idx === this.state.activeIndex && item.id === this.state.attribute && item.id !== "Color") {
//                                                                 return <AttItem onClick={(e) => this.productSpecsChoise(e, idx, item)} chosen key={it.id} data-name={item.id}>{it.value}</AttItem>
//                                                             }
//                                                             if (item.id === "Color") {
//                                                                 return idx === this.state.activeIndex ? <AttItemColor type="radio" onClick={(e) => this.productSpecsChoise(e, idx, item)} key={it.id} data-name={item.id} color={`${it.value}`}
//                                                                 border>{it.value}</AttItemColor> : <AttItemColor onClick={(e) => this.productSpecsChoise(e, idx, item)} key={it.id} data-name={item.id} color={`${it.value}`}
//                                                                 >{it.value}</AttItemColor>
//                                                             } else {
//                                                                 return <AttItem onClick={(e) => this.productSpecsChoise(e, idx, item)} key={it.id} data-name={item.id}>{it.value}</AttItem>
//                                                             }
//                                                         })}