import { Component } from "react";
import {CartTotalContainer,CartTotalText,CartTotalSpan,CartButton } from "./CartTotal.styled";


export default class CartTotal extends Component{
    render() {
        const {currency, countTax, items, tax} = this.props;
        return <CartTotalContainer>
                <CartTotalText>
                    <CartTotalSpan>Tax 21%:</CartTotalSpan>
                    {currency}{countTax(items, currency, tax)}
                </CartTotalText>
                <CartTotalText>
                    <CartTotalSpan>Quantity:</CartTotalSpan> {items.length}
                </CartTotalText>
                <CartTotalText>
                    <CartTotalSpan
                    >Total:
                    </CartTotalSpan>
                        {currency}{countTax(items, currency)}
                </CartTotalText>
                <CartButton type="button"
                >Order
                </CartButton>
            </CartTotalContainer>
    }
}