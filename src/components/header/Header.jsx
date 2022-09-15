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
        isVisible: false,
        shouldModalOpen: false
    }

    componentDidMount() {
        getInfo(getCurrencyQuerry).then(res => this.setState({ currencies: res.currencies }))
    }

    closeCurrencyHandler = (e) => {
        if (this.state.isVisible && e.code === "Escape") this.openCurrenciesHandler();
        if (this.state.shouldModalOpen && e.code === "Escape") this.openModal();
    }

    openCurrenciesHandler = (e) => {
        if (this.state.shouldModalOpen) this.openModal(e)
        if(!this.state.shouldModalOpen && this.state.isVisible) this.setState({shouldModalOpen: !this.state.shouldModalOpen, isVisible: !this.state.isVisible})
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

    openModal = () => {
        if (this.state.isVisible) this.setState({ isVisible: !this.state.isVisible })
        this.setState({ shouldModalOpen: !this.state.shouldModalOpen })
    }
    render() {
        const { currencies, isVisible, shouldModalOpen } = this.state;
        const { currency, onChange, inCart } = this.props;
        const cartIsNotEmpty = inCart.length !== 0;
        return (
            <Container id="header"
                onClick={this.closeModal}
                onKeyDown={this.closeCurrencyHandler}
                tabIndex={-1}>
                <Navigation>
                    <NavigationList { ...this.props} />
                </Navigation>
                <Logotype onChange={onChange} />
                <Cart id="cart">
                    <CurrencyPicker
                        id="currency"
                        onClick={this.setCurrencyHandler}
                        openCurrencyHandler={this.openCurrenciesHandler}
                        currencies={currencies}
                        isVisible={isVisible}
                        currency={currency}
                        onClose={this.closeModal}
                    />
                    {shouldModalOpen &&
                        <Modal
                            id="modal"
                            onClose={this.closeModal}
                            {...this.props}
                        />}
                    {cartIsNotEmpty &&
                        <CartQuantity onClick={this.openModal}>
                            <CartQuantityText>{inCart.length}</CartQuantityText>
                        </CartQuantity>}
                    <CartIcon onClick={this.openModal}/>
                </Cart>
            </Container>
        )
    }
}