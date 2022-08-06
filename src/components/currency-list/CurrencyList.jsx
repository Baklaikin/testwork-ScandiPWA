import { Component } from 'react';
import ReactDOM from "react-dom";
import { CurrencyItem, CurrencyTitle, Select, SelectWrapper } from './CurrencyList.styled';

export default class CurrencyList extends Component{
    render() {
        const {isVisible, currencies} = this.props;
        return ReactDOM.createPortal((
            <SelectWrapper onClick={this.props.onClose}>
                <Select>
                    {isVisible && currencies && currencies.map((cur) =>
                    <CurrencyItem key={cur.label} >
                        <CurrencyTitle
                            onClick={this.props.onClick}
                        >{cur.symbol} {cur.label}</CurrencyTitle>
                    </CurrencyItem>)}
                </Select>
            </SelectWrapper>
        ),document.getElementById("currency"))
    }
}