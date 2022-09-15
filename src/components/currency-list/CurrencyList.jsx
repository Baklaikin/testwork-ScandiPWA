import { Component } from 'react';
import ReactDOM from "react-dom";
import { CurrencyItem, CurrencyTitle, Select, SelectWrapper } from './CurrencyList.styled';

export default class CurrencyList extends Component{
    render() {
        const {isVisible, currencies, onClose, onClick} = this.props;
        return ReactDOM.createPortal((
            <SelectWrapper onClick={onClose}>
                <Select>
                    {isVisible && currencies && currencies.map((cur) =>
                    <CurrencyItem key={cur.label} >
                        <CurrencyTitle
                            onClick={onClick}
                            >{cur.symbol} {cur.label}
                        </CurrencyTitle>
                    </CurrencyItem>)}
                </Select>
            </SelectWrapper>
        ),document.getElementById("currency"))
    }
}