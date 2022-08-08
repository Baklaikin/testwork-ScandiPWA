import { Component, lazy } from "react";
import { ReactComponent as CartIcon } from "../../images/cart.svg";
import { getInfo } from "../../api/api";
import { Container, Navigation, Cart, CartQuantity, CartQuantityText } from "./Header.styled";
import { getCurrencyQuerry } from "queries/queries";
import NavigationList from "components/navigation-list/NavigationList";
import Logotype from "components/logo/Logo";
import Modal from "components/modal/Modal";
const CurrencyPicker = lazy(() => import("../currency/CurrencyPicker"));

export default class Header extends Component{
    state = {
        currencies:null,
        currency: "",
        isVisible: false,
        shouldModalOpen: false
    }

    componentDidMount() {
        getInfo(getCurrencyQuerry).then(res => this.setState({ currencies: res.currencies }))
        window.addEventListener('keydown', this.closeCurrencyHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeCurrencyHandler)
    }

    closeCurrencyHandler = (e) => {
        if (this.state.isVisible && e.code === "Escape") this.openCurrenciesHandler();
        if (this.state.shouldModalOpen && e.code === "Escape") this.openModal();
    }

    openCurrenciesHandler = (e) => {
        if (this.state.shouldModalOpen) this.openModal(e)
        this.setState({ isVisible: !this.state.isVisible })
    };

    setCurrencyHandler = (e) => {
        this.setState({ isVisible: !this.state.isVisible });
        this.props.onChoice( e.target.textContent.slice(0, 2));
    };

    closeModal = (e) => {
        if (this.state.shouldModalOpen && e.target === e.currentTarget) this.setState({ shouldModalOpen: false }) 
        if (this.state.shouldModalOpen && e.target.id === "view-bag") this.setState({ shouldModalOpen: false })
        if (this.state.isVisible && e.target === e.currentTarget) this.setState({ isVisible: !this.state.isVisible }) 
    }

    openModal = (e) => {
        if (this.state.isVisible) this.setState({ isVisible: !this.state.isVisible })
        this.setState({ shouldModalOpen: !this.state.shouldModalOpen })
        // if (e.target.id === "modalWindow" ) return
    }
    render() {
        return (
            <Container id="header" onClick={this.closeModal}>
                <Navigation>
                    <NavigationList { ...this.props} />
                </Navigation>
                <Logotype onChange={this.props.onChange} />
                <Cart id="cart">
                    <CurrencyPicker id="currency"
                        onClick={this.setCurrencyHandler}
                        openCurrencyHandler={this.openCurrenciesHandler}
                        currencies={this.state.currencies}
                        isVisible={this.state.isVisible}
                        currency={this.props.currency}
                        onClose={this.closeModal}
                    />
                    {this.state.shouldModalOpen &&
                        <Modal
                            id="modal"{...this.props}
                            onClose={this.closeModal}
                        />}
                    {this.props.inCart.length !== 0 &&
                        <CartQuantity onClick={this.openModal}>
                            <CartQuantityText>{this.props.inCart.length}</CartQuantityText>
                        </CartQuantity>}
                    <CartIcon onClick={this.openModal}/>
                </Cart>
            </Container>
        )
    }
}