import { Component } from "react";
import { Container } from "./CartPage.styled";
import { v4 as uuidv4 } from "uuid";
import {
    CartList, ColorWrapper, AttributesList, Item, Size,
    AttributesItem, NoProductTitle,AttributesColorItem,PageName
} from "./CartPage.styled";
import filterCart from "../../utils/filterCart";
import CartTotal from "components/cart-total/CartTotal";
import CartListItem from "components/cart-list-item/CartListItem";

export default class CartPage extends Component{
    state = {
        totalPrice:[]
    }
    
    findPrice = prices => prices
        .find((price) => price.currency.symbol === this.props.currency.trim()).amount;
    
    countTax = (items, currency, tax) => {
        const currentCurrency = it => it.currency.symbol === currency.trim();
        if (tax) {
            return (tax * items
                .map(item => item.prices.find(currentCurrency))
                .reduce((acc, item) => acc + item.amount, 0)).toFixed(2)
        };
        return items
            .map(item => item.prices.find(currentCurrency))
            .reduce((acc, item) => acc + item.amount, 0).toFixed(2);
    }

    attributesRender = product => {
        const { attributes } = product;
        return attributes.map((attribute) => {
            return <Item key={uuidv4()}>
                <Size>{attribute.name}:</Size>
                <AttributesList>
                    {attribute.items.map((item, idx) => {
                        const itemName = attribute.id.toLowerCase();
                        const inState = itemName && product[itemName];
                        const canRender = inState && idx === product[itemName].value;
                                if (itemName === "color") {
                                    return itemName && canRender ?
                                        <AttributesColorItem
                                            onClick={e => this.props.cartAmountHandler(e, item)}
                                            key={uuidv4()} border
                                        >
                                            <ColorWrapper color={`${item.value}`}
                                            >{item.value}
                                            </ColorWrapper>
                                        </AttributesColorItem> :
                                        <AttributesColorItem
                                            key={uuidv4()}
                                            color={`${item.value}`}
                                        ><ColorWrapper color={`${item.value}`}>{item.value}</ColorWrapper>
                                        </AttributesColorItem>
                                } else {
                                    return itemName && canRender ?
                                        <AttributesItem
                                            chosen
                                            key={uuidv4()}
                                        >{item.value}
                                        </AttributesItem>
                                        :
                                        <AttributesItem key={uuidv4()}>{item.value}</AttributesItem>
                                }
                        })
                    }
                </AttributesList>
            </Item>
        })
    }

    render() {
        let items = [...this.props.cart];
        let cart = [];
        const tax = 0.21;
        const { currency } = this.props;
        const noProduct = items.length === 0;
        filterCart(items, cart);
        const cartTotalProps = {
            currency,
            items,
            tax,
            countTax: this.countTax
        }
        const cartListItemProps = {
            currency,
            cartAmountHandler: this.props.cartAmountHandler,
            cart: this.props.cart,
            findPrice: this.findPrice,
            attributesRender: this.attributesRender
        }
                
        return <Container>
            <PageName>Cart</PageName>
            {noProduct ?
                <NoProductTitle>You haven't add any product in cart so far</NoProductTitle>
                : null
            }
            <CartList>
                {this.props && cart.map((item, idx) =>
                    <CartListItem
                        key={uuidv4()}
                        item={item}
                        idx={idx}
                        {...cartListItemProps}
                    />
                )}
            </CartList>
            {items.length > 0 ?
                <CartTotal
                    {...cartTotalProps}
                />
                : null
            }
        </Container>;
    }
}
