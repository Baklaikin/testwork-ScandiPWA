import React,{ Component } from "react";
import styled from "styled-components";
import { getInfo } from "../../api/api";
import { getProduct } from "../../queries/queries";

export const Container = styled.div`
display: flex;
/* align-items:center; */
justify-content:space-between;
padding: 72px 96px;
border:1px solid tomato;
`;

export const MiniPicturesWrapper = styled.div`
display:flex;
flex-direction:column;
/* border:1px solid green; */
margin-right:20px;
`;

export const MainPictureWrapper = styled.div`
width:610px;
height:511px;
margin-right:100px;
overflow:hidden;
/* border:1px solid black; */
`;
export const MiniImageThumb = styled.div`
width:80px;
height:80px;
overflow:hidden;
`;
export const Image = styled.img`
display:block;
width:100%;
height:auto;
object-fit:cover;
`;

export const List = styled.ul`
list-style:none;
padding:0;
margin:0;
`;

export const Item = styled.li`
&:not(:last-of-type){
    margin-bottom:32px;
}
`;

export const ProductContainer = styled.div`
text-align:left;
`;

export const AttributesList = styled.ul`
// display:flex;
// flex-wrap:wrap;
// align-items:center;
padding:0;
margin-bottom:24px;
list-style:none;
`;

export const ItemsList = styled.ul`
display:flex;
flex-wrap:wrap;
align-items:center;
`;

export const AttributeItem = styled.li`
display:flex;
align-items:center;
justify-content:center;
// width:63px;
height:45px;
border:1px solid black;
&:not(:last-of-type){
    margin-right:12px;
}
`;

export const AttributeItemContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

export const ProductTitle = styled.h2`
// text-align: left;
margin-bottom:43px;
margin-top:0;
`;

export const ProductText = styled.p`
// text-align: left;
color: #1D1F22;
font-weight:700;
font-family: 'Roboto', sans-serif;
`;

export const DescriptionText = styled.p`
color: #1D1F22;
font-weight:400;
font-family: 'Roboto', sans-serif;
`;

export const AddToCartButton = styled.button`
width:100%;
height:52px;
background-color:green;
margin-bottom:40px;
`;

export default class ProuctPage extends Component{
    constructor() {
        super();
        this.state = {
            product: null,
            currency:''
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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.product === null) {
            const product = JSON.parse(localStorage.getItem('product'));
            // console.log("product:", product);
            getInfo(getProduct(product)).then(res => this.setState({ product: res.product }))
        }
        if (this.props.currency !== prevProps.currency) {
            console.log("updating currency");
            this.setState({currency: this.props.currency})
        }
    }

    render() {
        const { product } = this.state;
      
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
                        <ProductText>{product.attributes.name}</ProductText>
                        {product.attributes && <AttributesList>
                            {product.attributes.map((item) => {
                                return (<AttributeItem key={item.id}>
                                    <AttributeItemContainer>
                                        <p>{item.id}</p>
                                        <ItemsList>
                                            {item.items.map((it) => {
                                                return <AttributeItem key={it.id}>{it.value}
                                                </AttributeItem> 
                                            })}
                                        </ItemsList>
                                    </AttributeItemContainer>
                                </AttributeItem>)
                            })}
                        </AttributesList>
                        }
                        <ProductText>Price</ProductText>
                        <p>{(product.prices.map((price) => {
                            if(price.currency.symbol === this.props.currency.trim()) return price.amount
                        }))}</p>
                        <AddToCartButton type="button">Add to cart</AddToCartButton>
                        <DescriptionText dangerouslySetInnerHTML={{__html:product.description}}></DescriptionText>
                        </>
                    }
                </ProductContainer>
            </Container>
        );
    }
}