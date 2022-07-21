import CartProduct from 'components/cart-product/CartProduct';
import { Component } from 'react';
import ReactDOM from "react-dom";
import {
    ModalBackground, ModalWindow, ModalTitle, Span, Button, CheckButton,
    ButtonsList, ModalList, TotalContainer, TotalTitle, TotalParagraph, ViewBagButton
} from "./Modal.styled";

export default class Modal extends Component {
    render() {
        return ReactDOM.createPortal(
               ( <ModalBackground id="modalBackground" onClick={this.props.onClose}>
                    <ModalWindow id="modalWindow">
                    <ModalList>
                        <ModalTitle>My bag, <Span>{this.props.inCart.length !== 0 ? this.props.inCart.length : 0} items</Span></ModalTitle>
                        <CartProduct cart={this.props.inCart} currency={this.props.currency} cartAmountHandler={this.props.cartAmountHandler} />
                        <TotalContainer>
                            <TotalTitle>Total</TotalTitle>
                            <TotalParagraph>{this.props.currency }{this.props && this.props.inCart.map((item) => item.prices.find(it => it.currency.symbol === this.props.currency.trim())).reduce((acc, item) => acc + item.amount, 0).toFixed(2)}</TotalParagraph>
                        </TotalContainer>
                        <ButtonsList>
                            <li><ViewBagButton to="/cart" onClick={this.props.onClose}><Button id="view-bag">View Bag</Button></ViewBagButton></li>
                            <li><CheckButton>Check out</CheckButton></li>
                        </ButtonsList>
                    </ModalList>
                    </ModalWindow>
                </ModalBackground>
            ),
            document.getElementById("portal"))
    }
}
