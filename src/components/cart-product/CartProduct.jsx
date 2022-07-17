import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, CartList, CartListItem, CartTitle } from "./CartProduct.styled";

export default class CartProduct extends Component{
    render() {
        console.log(uuidv4());
        return (
            <Container>
                <CartList>
                    {this.props && this.props.cart.map((item) => {
                        return <CartListItem key={uuidv4()}>
                            <div>
                                <div>
                                    <CartTitle>{item.brand}</CartTitle>
                                    <p>{item.name}</p>
                                    <p>{item.prices.map((price) => {
                                        if (price.currency.symbol === this.props.currency.trim()) return `${this.props.currency} ${price.amount}`
                                    })}</p>
                                    <p>{item.size}</p>
                                    <ul className="size">
                                        {item.attributes.map((i) => {
                                            return <li key={uuidv4()}>
                                                <p>{i.name}</p>
                                                <ul>
                                                    {i.items.map(item => <li key={uuidv4()}>{ item.value}</li>)}
                                                </ul>
                                            </li>
                                        })}
                                    </ul>
                                    
                                    <ul className="color"></ul>
                                    </div>
                                    <div className="plus-minus">
                                    <div>+</div>
                                    <div>0</div>
                                    <div>-</div>
                                </div>
                                <div className="photo"></div>
                            </div>
                        </CartListItem>
                    })}
                </CartList>
            </Container>
        );
}
}