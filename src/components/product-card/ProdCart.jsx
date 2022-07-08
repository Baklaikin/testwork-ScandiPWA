import { Component } from "react";
import { Container, Thumb, Image, Title, OutOfStockText, OutOfStockContainer } from "./ProdCard.styled";

export default class ProdCard extends Component {
 
    render() {
        const { gallery, description, name, prices, inStock, id } = this.props.value;
        return (
            <Container onClick={() => this.props.handleClick(id)}>
                <Thumb>
                    <Image src={gallery[0]} alt={description} />
                        {!inStock &&
                            <OutOfStockContainer>
                                <OutOfStockText>
                                    Out of Stock
                                </OutOfStockText>
                            </OutOfStockContainer>}
                </Thumb>
                <Title>{name }</Title>
                <Title>{prices[0].amount}</Title>
                </Container>
        )
    }

}