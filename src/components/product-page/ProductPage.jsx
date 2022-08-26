import React,{ Component } from "react";
import { getInfo } from "../../api/api";
import { getProduct } from "../../queries/queries";
import Attributtes from "components/attributes/Attributes";
import {
    Container, MiniPicturesWrapper, MainPictureWrapper, MiniImageThumb, Image, List, Item,
    ProductContainer, AttributesList, ProductTitle, OutOfStockText, OutOfStockContainer,MainPictureBlock,
    ProductSubTitle, ProductText, ProductPrice, DescriptionText, AddToCartButton, AddToCartButtonDisabled
} from "./ProductPage.styled";
import ProductDescription from "./ProductDescription";

export default class ProuctPage extends Component {
    state = {
        product: null,
        currency: '',
    };
    
    componentDidMount() {
        if (!this.props.product) {
            const product = JSON.parse(localStorage.getItem('product'));
            if (product !== null) getInfo(getProduct(product)).then(res => this.setState({ product: res.product }))
        }
        if (this.props.product) getInfo(getProduct(this.props.product)).then(res => this.setState({ product: res.product }));
        this.setState({ currency: this.props.currency })
    }

    componentDidUpdate(prevProps) {
        if (this.state.product === null) {
            const product = JSON.parse(localStorage.getItem('product'));
            getInfo(getProduct(product)).then(res => this.setState({ product: res.product }))
        }
        if (this.props.currency !== prevProps.currency) this.setState({ currency: this.props.currency });     
    }

    productSpecsChoise = (e, idx) => {
        this.setState({
            product: {
                ...this.state.product,
                [e.currentTarget.dataset.name.toLowerCase()]: {
                id: e.currentTarget.dataset.name.toLowerCase(),
                value: idx
                }
            }
        })
    }

    mainImageHandler = (index) => document.getElementById("main-image").src=`${this.state.product.gallery[index]}`;
    
    productPriceHandler = (prices) => {
        return prices.map((price) => {
            if (price.currency.symbol === this.props.currency.trim()) {
                return `${this.state.currency} ${price.amount}`
            }
          return null
        })
    }

    render() {
        const { product } = this.state;
        return (
            <Container>
                <MiniPicturesWrapper>
                    <div>
                        <List> 
                            {product && product.gallery.map((item, index) => {
                                return (
                                    <Item key={item}>
                                    <MiniImageThumb>
                                        <Image src={item} alt={product.description} onClick={()=>this.mainImageHandler(index)} />
                                    </MiniImageThumb>
                                    </Item>
                                )
                            })}
                        </List>
                    </div>
                </MiniPicturesWrapper>
                <MainPictureWrapper>
                    {product && !product.inStock &&
                        <MainPictureBlock><Image
                            id="main-image"
                            src={product.gallery[0]}
                            alt={product.description}
                        />   <OutOfStockContainer>
                                <OutOfStockText>
                                    Out of Stock
                                </OutOfStockText>
                            </OutOfStockContainer>
                        </MainPictureBlock>}
                    {product && product.inStock && <Image
                            id="main-image"
                            src={product.gallery[0]}
                            alt={product.description}
                        />
                    }
                </MainPictureWrapper>
                <ProductContainer>
                    {product &&
                        <>
                            <ProductTitle>{product.brand}</ProductTitle>
                            <ProductSubTitle>{product.name}</ProductSubTitle>
                            <ProductText>{product.attributes.name}</ProductText>
                            {product.attributes &&
                                <AttributesList>
                                    <Attributtes
                                        attributes={product.attributes}
                                        state={this.state}
                                        productSpecsChoise={this.productSpecsChoise}
                                    />
                                </AttributesList>
                            }
                            <ProductText>Price:</ProductText>
                            <ProductPrice>{(this.productPriceHandler(product.prices))}</ProductPrice>
                            {product.inStock === true ?
                            <AddToCartButton
                                type="button"
                                onClick={() => this.props.handleClick(product)}
                            >Add to cart
                            </AddToCartButton>
                            :
                            <AddToCartButtonDisabled
                                type="button"
                                disabled
                            >Add to cart
                            </AddToCartButtonDisabled>
                            }
                        <DescriptionText id="description">
                            <ProductDescription text={product.description} />
                        </DescriptionText>
                        </>
                    }
                </ProductContainer>
            </Container>
        );
    }
}