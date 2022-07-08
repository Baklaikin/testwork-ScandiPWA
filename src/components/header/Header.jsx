import { Component } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as CartIcon } from "../../images/cart.svg";
import { getInfo } from "../../api/api";
import { Container, Navigation, List, Item, Logo, Cart, Select, Currency, CurrencyWrapper, CurrencyTitle, CurrencyItem, NavItem} from "./Header.styled";

export default class Header extends Component{
    state = {
        currency: "$",
        isVisible: false
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

    render() {
        const { currencies, currency, isVisible } = this.state;
        return (
            <Container>
                <Navigation>
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
                </Navigation>

                {/* Logo component */}
                <Logo>

                    <NavLink to="/" onClick={() => this.props.onChange("all")}>
                        <LogoIcon />
                    </NavLink>
                </Logo>
                <Cart>
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
                    <div><CartIcon /></div>
                </Cart>
            </Container>
        )
    }
}
