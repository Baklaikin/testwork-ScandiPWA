import { Component } from "react";
import styled from "styled-components";
import { getInfo } from "../../api/api";
import { getProduct } from "../../queries/queries";

export const Container = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
border:1px solid tomato;
`;

export const MiniPicturesWrapper = styled.div`
display:flex;
flex-direction:column;
border:1px solid green;
`;

export const MainPictureWrapper = styled.div`
width:400px;
height:auto;
border:1px solid black;
`;
export const MiniImageThumb = styled.div`
width:200px;
height:auto;
`;
export const Image = styled.img`
display:block;
width:100%;
height:auto;
`;

export const List = styled.ul`
list-style:none;
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
            const product = localStorage.getItem('product');
            this.setState({product})
            if (product !== null) {
                this.setState({
                product: product });
            }
        }

        if (this.props.product) {
            getInfo(getProduct(this.props.product)).then(res => this.setState({ product: res.product }))
        } else {
             getInfo(getProduct(this.state.product)).then(res => this.setState({ product: res.product }))
        }
    }

    componentDidUpdate(prevProps, _) {

        if (prevProps.product !== this.props.product) {
            const product = localStorage.getItem('product');
            getInfo(getProduct(product)).then(res => this.setState({product: res.product}))
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
                            {product && product.gallery.map(item => <li key={item}>
                                <MiniImageThumb>{<Image src={item} alt={product.description} /> }</MiniImageThumb>
                            </li>)}
                            </List>
                    </div>
                </MiniPicturesWrapper>
                {/* Container for main picture  */}
                <MainPictureWrapper>
                    {product && <Image src={product.gallery[0]} alt={product.description} />}
                </MainPictureWrapper>
                {/* Container for main info */}
                <div>
                    <h2>Product info here</h2>
                </div>
            </Container>
        );
    }
}