import { Component } from "react";
import {Currency,CurrencyWrapper} from "./CurrencyPicker.styled";
import CurrencyList from "components/currency-list/CurrencyList";

export default class CurrencyPicker extends Component{
    render() {
        const { currencies, isVisible, openCurrencyHandler, currency, onClick, onClose} = this.props;
        const currencyViewClosed =
            <Currency
                onClick={openCurrencyHandler}
            >{currency}
            </Currency>;
        const CurrencyViewOpened =
            <Currency
                className="is-open"
                onClick={openCurrencyHandler}
            >{currency}
            </Currency>;
        return (
            <CurrencyWrapper>
                {!isVisible ? currencyViewClosed : CurrencyViewOpened}
                {isVisible &&
                    <CurrencyList
                        id="currencySelect"
                        isVisible={isVisible}
                        currencies={currencies}
                        onClick={onClick}
                        onClose={onClose}
                    />}
            </CurrencyWrapper>
        )
    }
}
