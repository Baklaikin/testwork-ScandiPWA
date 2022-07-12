import { Component } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as CartIcon } from "../../images/cart.svg";
import { getInfo } from "../../api/api";
import Modal from "../modal/Modal";
import { Container, Navigation, List, Item, Logo, Cart, Select, Currency, CurrencyWrapper, CurrencyTitle, CurrencyItem, NavItem, CartQuantity, CartQuantityText} from "./Header.styled";

export default class Header extends Component{
    state = {
        currencies:null,
        currency: "$",
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

    currencyHandler = (e) => {
        const text = this.state.currencies.find(c => c.label === e.target.value);
        this.setState({ currency: text.symbol })
    }
 
    closeCurrencyHandler = (e) => {
        if (this.state.isVisible && e.code === "Escape") this.openCurrenciesHandler();
        if(this.state.isVisible && e.target.nodeName === "DIV") this.setState({isVisible: false})
    }

    openCurrenciesHandler = (e) => {
        this.setState({ isVisible: !this.state.isVisible })
    };

    setCurrencyHandler = (e) => this.setState({ currency: e.target.textContent.slice(0, 2), isVisible: !this.state.isVisible });

    cartModalHandler = () => {
        this.setState({shouldModalOpen: !this.state.shouldModalOpen})
    }

    render() {
        const { currencies, currency, isVisible } = this.state;
        return (
            <Container>
                <Navigation>
                    {/* Hide in diff component============= */}
                    <List>
                        {this.props &&
                            this.props.categories
                            .map(prop => {
                                const activeLink = this.props.category === prop.name ? "active" : '';
                                return <Item key={prop.name} className={activeLink}>
                                    <NavItem to={`/${prop.name}`} onClick={() => this.props.onChange(`${prop.name}`)}> {prop.name.toUpperCase()}</NavItem>
                                </Item>
                            })}
                    </List>
                    {/* ========================== */}
                </Navigation>

                {/* Logo component */}
                <Logo>
                    <NavLink to="/" onClick={() => this.props.onChange("all")}>
                        <LogoIcon />
                    </NavLink>
                </Logo>
                 {/* Remove to diff component============ */}
                <Cart>
                    {this.props.inCart.length !== 0 && <CartQuantity><CartQuantityText>{this.props.inCart.length }</CartQuantityText></CartQuantity>}
                    {this.state.shouldModalOpen && <Modal {...this.props } />}
                    <CurrencyWrapper>
                        {!isVisible ? <Currency onClick={this.openCurrenciesHandler}>
                            {currency}
                        </Currency>: <Currency className="is-open" onClick={this.openCurrenciesHandler}>
                            {currency}
                        </Currency>}
                            <Select>
                        {isVisible && currencies && currencies.map((cur) =>
                                <CurrencyItem key={cur.label} >
                                    <CurrencyTitle onClick={this.setCurrencyHandler}>{cur.symbol} {cur.label}</CurrencyTitle>
                                </CurrencyItem>
                           
                           )}
                           </Select>                            
                    </CurrencyWrapper>
                    <div><CartIcon  onClick={this.cartModalHandler}/></div>
                </Cart>
                {/* ========================================== */}
            </Container>
        )
    }
}
