import CartProduct from 'components/cart-product/CartProduct';
import { Component } from 'react';
import ReactDOM from "react-dom";
import {
    ModalBackground, ModalWindow, ModalTitle, Span, Button, CheckButton,
    ButtonsList, ModalList, TotalContainer, TotalTitle, TotalParagraph, ViewBagButton
} from "./Modal.styled";

export default class Modal extends Component {

    componentDidMount() {
        document.body.style.overflow = "hidden";
    }
    componentWillUnmount() {
        document.body.style.overflow = "overlay";
    }
    render() {
        const { inCart, currency, onClose, cartAmountHandler } = this.props;
        const amount = inCart.length !== 0 ? inCart.length : 0;
        const plural = inCart.length === 1 ? "item" : "items";
        return ReactDOM.createPortal(
            (<ModalBackground id="modalBackground" onClick={onClose}>
                <ModalWindow id="modalWindow">
                    <ModalList>
                        <ModalTitle>My bag, <Span>{amount} {plural}</Span></ModalTitle>
                        <CartProduct
                            cart={inCart}
                            currency={currency}
                            cartAmountHandler={cartAmountHandler} />
                        <TotalContainer>
                            <TotalTitle>Total</TotalTitle>
                            <TotalParagraph>{currency}{this.props &&
                                inCart.map((item) => item.prices
                                    .find(it => it.currency.symbol === currency.trim()))
                                    .reduce((acc, item) => acc + item.amount, 0)
                                    .toFixed(2)}
                            </TotalParagraph>
                        </TotalContainer>
                        <ButtonsList>
                            <li>
                                <ViewBagButton
                                    to="/cart"
                                    onClick={onClose}>
                                    <Button id="view-bag">View Bag</Button>
                                </ViewBagButton>
                            </li>
                            <li>
                                <CheckButton>Check out</CheckButton>
                            </li>
                        </ButtonsList>
                    </ModalList>
                </ModalWindow>
            </ModalBackground>
            ),
            document.getElementById("portal"))
    }
}
