import { Component } from "react";
import {Currency,CurrencyWrapper} from "./CurrencyPicker.styled";
import CurrencyList from "components/currency-list/CurrencyList";

export default class CurrencyPicker extends Component{
    render() {
        const { currencies, isVisible } = this.props;
        const currencyViewClosed =
            <Currency
                onClick={this.props.openCurrencyHandler}
            >{this.props.currency}
            </Currency>;
        const CurrencyViewOpened =
            <Currency
                className="is-open"
                onClick={this.props.openCurrencyHandler}
            >{this.props.currency}
            </Currency>;
        return  <CurrencyWrapper>
                    {!isVisible ? currencyViewClosed : CurrencyViewOpened}
                    {isVisible &&
                        <CurrencyList
                            id="currencySelect"
                            isVisible={isVisible}
                            currencies={currencies}
                            onClick={this.props.onClick}
                            onClose={this.props.onClose}
                        />}
                </CurrencyWrapper>
    }
}
