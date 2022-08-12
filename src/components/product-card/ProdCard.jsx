import { Component } from "react";
import { ReactComponent as CartIcon } from "../../images/cart-plp.svg";
import {
    Container, Thumb, Image, Title, OutOfStockText,
    OutOfStockContainer, InCart
} from "./ProdCard.styled";
 
export default class ProdCard extends Component {
    state = {}
  
    componentDidUpdate(prevProps, _) {
        if (prevProps.currency !== this.props.currency) {
            this.setState({ currency: this.props.currency })
        }
    }
 
    render() {
        const { gallery, description, name, inStock, id, brand } = this.props.value;
        const {currency, price, handleClick} = this.props;
        return <Container inCart onClick={(e) => handleClick(e, id)}>
                    {!inStock &&
                        <OutOfStockContainer>
                            <OutOfStockText>
                                Out of Stock
                            </OutOfStockText>
                        </OutOfStockContainer>
                    }
                    <Thumb>
                        <Image src={gallery[0]} alt={description} />
                    </Thumb>
            {inStock &&
                <InCart
                    id="addToCart"
                    onClick={(e) => handleClick(e, id)}
                >
                    <CartIcon />
                </InCart>
            }
                        <Title>{brand} {name}</Title>
                        <Title>{currency}{price}</Title>
                </Container >
    }

}
