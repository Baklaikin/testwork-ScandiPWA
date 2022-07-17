import CartProduct from 'components/cart-product/CartProduct';
import { Component } from 'react';
import ReactDOM from "react-dom";
import { ModalBackground, ModalWindow, ModalTitle, Span, Button, CheckButton, ButtonsList, ModalList, ModalListItem } from "./Modal.styled";

export default class Modal extends Component {

    render() {
        console.log("props in modal",this.props);
        return ReactDOM.createPortal(
               ( <ModalBackground>
                    <ModalWindow>
                    <ModalList>
                        <li><ModalTitle>My bag, <Span>{this.props.inCart.length !== 0 ? this.props.inCart.length : 0} items</Span></ModalTitle></li>
                        <li><CartProduct cart={this.props.inCart} currency={this.props.currency} /></li>
                        <li><h3>Total 0</h3></li>
                        <ModalListItem>
                            <ButtonsList>
                                <li><Button>View Bag</Button></li>
                                <li><CheckButton>Check out</CheckButton></li>
                            </ButtonsList>
                        </ModalListItem>
                    </ModalList>
                    </ModalWindow>
                </ModalBackground>
            ),
            document.getElementById("portal"))
    }
}