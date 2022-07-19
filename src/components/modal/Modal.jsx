import CartProduct from 'components/cart-product/CartProduct';
import { Component } from 'react';
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { ModalBackground, ModalWindow, ModalTitle, Span, Button, CheckButton, ButtonsList, ModalList, ModalListItem } from "./Modal.styled";

export default class Modal extends Component {

    componentDidUpdate(prevProps, _) {
        const prices =  this.props.inCart.map((item) => {
                            console.log(item);
                            const price = item.prices.find(it => it.currency.symbol === this.props.currency)
                            return price
                            }).reduce((acc, item) => {
                                console.log(item);
                                return acc + item.amount;
                            }, 0)
    }

    render() {
        // console.log("props in modal",this.props);
        return ReactDOM.createPortal(
               ( <ModalBackground>
                    <ModalWindow>
                    <ModalList>
                        <ModalTitle>My bag, <Span>{this.props.inCart.length !== 0 ? this.props.inCart.length : 0} items</Span></ModalTitle>
                        <CartProduct cart={this.props.inCart} currency={this.props.currency} />
                        {/* <h3>Total {this.props.inCart &&
                            this.props.inCart.map((item) => {
                            console.log(item);
                            const price = item.prices.find(it => it.currency.symbol === this.props.currency)
                            return price
                            }).reduce((acc, item) => {
                                console.log(item);
                                // return acc + item.amount;
                            }, 0)}</h3> */}
                        {/* <ModalListItem> */}
                            <ButtonsList>
                                <li><NavLink to="/cart"><Button>View Bag</Button></NavLink></li>
                                <li><CheckButton>Check out</CheckButton></li>
                            </ButtonsList>
                        {/* </ModalListItem> */}
                    </ModalList>
                    </ModalWindow>
                </ModalBackground>
            ),
            document.getElementById("portal"))
    }
}