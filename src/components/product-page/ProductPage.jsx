import React,{ Component } from "react";
import { getInfo } from "../../api/api";
import { getProduct } from "../../queries/queries";
import {
    Container, MiniPicturesWrapper, MainPictureWrapper, MiniImageThumb, Image, List, Item,
    ProductContainer, AttributesList, ItemsList, AttItem, ListItemTitle, AttributeItem,
    AttributeItemContainer, ProductTitle, AttItemColor,
    ProductSubTitle, ProductText, ProductPrice, DescriptionText, AddToCartButton, ColorText, AddToCartButtonDisabled
} from "./ProductPage.styled";

export default class ProuctPage extends Component{
    constructor() {
        super();
        this.state = {
            product: null,
            currency: '',
            modifiedProduct:{}
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
        this.setState({currency: this.props.currency})
    }

    componentDidUpdate(prevProps) {
        if (this.state.product === null) {
            const product = JSON.parse(localStorage.getItem('product'));
            getInfo(getProduct(product)).then(res => this.setState({ product: res.product }))
        }
        if (this.props.currency !== prevProps.currency) {
            this.setState({currency: this.props.currency})
        }
    }

    productSpecsChoise = (e) => {
    console.log(e);
        this.setState({
            modifiedProduct:{
            [e.currentTarget.dataset.name.toLowerCase()]: e.target.textContent
        }
        }
    );
  };

    render() {
        const { product, modifiedProduct } = this.state;
        
      
        return (
            //Main container
            <Container>
                {/* Container for small images column */}
                <MiniPicturesWrapper>
                    {/* Container for small picture  */}
                    <div>
                        <List>
                            {product && product.gallery.map(item => <Item key={item}>
                                <MiniImageThumb>{<Image src={item} alt={product.description} /> }</MiniImageThumb>
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

                        {product.attributes && <AttributesList>
                            {product.attributes.map((item) => {
                                return (<AttributeItem key={item.id}>
                                    <AttributeItemContainer>
                                        <ListItemTitle>{item.id}:</ListItemTitle>
                                        <ItemsList>
                                            {item.items.map((it) => {
                                                return item.id.includes("Color")
                                                    ?
                                                    <AttItemColor onClick={(e) => this.productSpecsChoise(e)} key={it.id} data-name={item.id} style={{ backgroundColor: `${it.value}`, width: "36px", height: "36px" }}
                                                    >{ it.value}</AttItemColor>
                                                    :
                                                    <AttItem onClick={(e) => this.productSpecsChoise(e)} key={it.id} data-name={item.id}>{it.value}</AttItem>
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
                        <DescriptionText dangerouslySetInnerHTML={{__html:product.description}}></DescriptionText>
                        </>
                    }
                </ProductContainer>
            </Container>
        );
    }
}
