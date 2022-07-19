import { Component } from "react";
import {Currency,CurrencyWrapper, CurrencyItem, Select, CurrencyTitle } from "./CurrencyPicker.styled";

export default class CurrencyPicker extends Component{
    render() {
        const { currencies, isVisible } = this.props;
        const currencyViewClosed = <Currency onClick={this.props.openCurrencyHandler}>{this.props.currency}</Currency>;
        const CurrencyViewOpened = <Currency className="is-open" onClick={this.props.openCurrencyHandler}>{this.props.currency}</Currency>;
        return  <CurrencyWrapper>
                        {!isVisible ? currencyViewClosed : CurrencyViewOpened}
                            <Select>
                        {isVisible && currencies && currencies.map((cur) =>
                                <CurrencyItem key={cur.label} >
                                    <CurrencyTitle onClick={this.props.onClick}>{cur.symbol} {cur.label}</CurrencyTitle>
                                </CurrencyItem>
                           
                           )}
                           </Select>                            
                    </CurrencyWrapper>
    }
}