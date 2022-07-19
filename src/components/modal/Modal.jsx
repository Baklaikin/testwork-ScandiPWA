import CartProduct from 'components/cart-product/CartProduct';
import { Component } from 'react';
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { ModalBackground, ModalWindow, ModalTitle, Span, Button, CheckButton, ButtonsList, ModalList } from "./Modal.styled";

export default class Modal extends Component {
    render() {
        return ReactDOM.createPortal(
               ( <ModalBackground>
                    <ModalWindow>
                    <ModalList>
                        <ModalTitle>My bag, <Span>{this.props.inCart.length !== 0 ? this.props.inCart.length : 0} items</Span></ModalTitle>
                        <CartProduct cart={this.props.inCart} currency={this.props.currency} />
                        <h3>Total {this.props && this.props.inCart.map((item) => item.prices.find(it => it.currency.symbol === this.props.currency.trim())).reduce((acc, item) => acc + item.amount, 0).toFixed(2)}</h3>
                        <ButtonsList>
                            <li><NavLink to="/cart"><Button>View Bag</Button></NavLink></li>
                            <li><CheckButton>Check out</CheckButton></li>
                        </ButtonsList>
                    </ModalList>
                    </ModalWindow>
                </ModalBackground>
            ),
            document.getElementById("portal"))
    }
}