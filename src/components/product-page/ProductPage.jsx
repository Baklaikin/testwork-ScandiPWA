import { Component } from "react";
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
`;

export const MainPictureWrapper = styled.div`
width:610px;
height:511px;
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

export default class ProuctPage extends Component{
    constructor() {
        super();
        this.state = {
            product:null
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
    }

    componentDidUpdate() {
        if (this.state.product === null) {
            const product = JSON.parse(localStorage.getItem('product'));
            console.log("product:", product);
            getInfo(getProduct(product)).then(res => this.setState({ product: res.product }))
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
                <div>
                    {product &&
                        <>
                        <h2>{product.brand}</h2>
                        <p>{product.attributes[0].name}</p>
                        <ul>
                            {product.attributes[0].items.map((item) => {
                                return (<li>
                                    <div>
                                    {item.value}
                                    </div>
                                    </li>)
                            })}
                        </ul>
                         <p>{product.attributes[0].name}</p>
                        </>
                    }
                </div>
            </Container>
        );
    }
}