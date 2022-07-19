import { Component } from "react";
import { ReactComponent as CartIcon } from "../../images/cart.svg";
import { getInfo } from "../../api/api";
import Modal from "../modal/Modal";
import NavigationList from "components/navigation-list/NavigationList";
import Logotype from "components/logo/Logo";
import { Container, Navigation, Cart, CartQuantity, CartQuantityText} from "./Header.styled";
import CurrencyPicker from "components/currency/CurrencyPicker";

export default class Header extends Component{
    state = {
        currencies:null,
        currency: "",
        isVisible: false,
        shouldModalOpen: false
    }

    componentDidMount() {
        const currency = `{currencies
            { 
        label
        symbol
        }
    }`;
        getInfo(currency).then(res => this.setState({ currencies: res.currencies }))
        window.addEventListener('keydown', this.closeCurrencyHandler)
        window.addEventListener('click', this.closeCurrencyHandler)
    }

    componentDidUpdate() {
        
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeCurrencyHandler)
        window.addEventListener('click', this.closeCurrencyHandler)
    }

    closeCurrencyHandler = (e) => {
        if (this.state.isVisible && e.code === "Escape") this.openCurrenciesHandler();
        if (this.state.isVisible && e.target.nodeName === "DIV") this.setState({ isVisible: false });
        if (this.state.shouldModalOpen && e.code === "Escape") this.cartModalHandler();
        if (this.state.shouldModalOpen && e.target.nodeName === "DIV") this.cartModalHandler();
    }

    openCurrenciesHandler = (e) => {
        this.setState({ isVisible: !this.state.isVisible })
    };

    setCurrencyHandler = (e) => {
        this.props.onChoice( e.target.textContent.slice(0, 2));
        this.setState({ isVisible: !this.state.isVisible });
    };

    cartModalHandler = () => {
        this.setState({shouldModalOpen: !this.state.shouldModalOpen})
    }

    render() {
        return (
            <Container>
                <Navigation>
                    <NavigationList { ...this.props} />
                </Navigation>
                <Logotype onChange={this.props.onChange} />
                <Cart>
                    <CurrencyPicker
                        onClick={this.setCurrencyHandler}
                        openCurrencyHandler={this.openCurrenciesHandler}
                        currencies={this.state.currencies} isVisible={this.state.isVisible}
                        currency={this.props.currency}
                    />
                    <div onClick={this.cartModalHandler}>
                        {this.state.shouldModalOpen && <Modal {...this.props } />}
                        {this.props.inCart.length !== 0 &&
                            <CartQuantity>
                                <CartQuantityText>{this.props.inCart.length}</CartQuantityText>
                            </CartQuantity>}
                        <CartIcon />
                    </div>
                </Cart>
            </Container>
        )
    }
}
