import CartProduct from 'components/cart-product/CartProduct';
import { Component } from 'react';
import ReactDOM from "react-dom";
import { ModalBackground, ModalWindow } from "./Modal.styled";

export default class Modal extends Component {

    render() {
        console.log(this.props);
        return ReactDOM.createPortal(
               ( <ModalBackground>
                    <ModalWindow>
                    <h3>My bag {this.props.inCart.length !== 0 ? this.props.inCart.length : 0} items</h3>
                    <CartProduct {...this.props} />
                    <h3>Total 0</h3>
                    <button>View Bag</button>
                    <button>Check out</button>
                    </ModalWindow>
                </ModalBackground>
            ),
            document.getElementById("portal"))
    }
}