import { Component } from "react";
import {CartTotalContainer,CartTotalText,CartTotalSpan,CartButton } from "./CartTotal.styled";


export default class CartTotal extends Component{
    render() {
        const { currency, countTax, items, tax } = this.props;
        const alertMessage = `You have product in cart that doesn't have chosen parameters, please choose parameters`;
        const successMessage = 'Order is successful';
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
            <CartButton
                type="button"
                onClick={() => {
                    const productWithoutChosenAttribute = items.filter(item => Object.keys(item).length === 9).length;
                    if (productWithoutChosenAttribute > 0) {
                        return (
                            setTimeout(() => {
                                    alert(alertMessage)
                            }, 500)
                        )
                    }
                    setTimeout(() => {
                        alert(successMessage)
                    }, 500)
                }}
                >Order
                </CartButton>
            </CartTotalContainer>
    }
}