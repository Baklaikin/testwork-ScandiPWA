import { Component } from "react";
import { Container, Thumb, Image, Title, OutOfStockText, OutOfStockContainer } from "./ProdCard.styled";
import getPrice from "utils/getPrice";
 
export default class ProdCard extends Component {
    state = {price:null}
  
    componentDidUpdate(prevProps,_) {
        if (prevProps.currency !== this.props.currency) {
        const price = getPrice(this.props.value.prices, this.props.currency);
        if(price) this.setState({price})
            console.log("change price");
        }
    }
 
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
                <Title>{(prices.find((price) => {
                    if (price.currency.symbol === this.props.currency) console.log(`${this.props.currency} ${price.amount}`)
                    }))}
                </Title>
            </Container>
        )
    }

}
 //    prices &&  getPrice(prices, this.props.currency)