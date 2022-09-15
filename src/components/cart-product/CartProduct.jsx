import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    CartList, CartListItem, CartTitle,
    CartContainer, QuantityContainer, CartTitleBrand,
    Plus, Minus, AttributesList, TextContainer,
    Price, Item, Size, AttributesItem, List,
    AttributesColorItem, PhotoImage, PhotoThumb, ColorWrapper
} from "./CartProduct.styled";
import productQuantity from "utils/productQuantity";
import filterCart from "utils/filterCart";

export default class CartProduct extends Component {
    attributesSearch = (attributes, item) => {
        const handleAttributesChange = this.props.handleAttributesChange;
        return attributes.map((attribute) => {
            return (
                <Item key={uuidv4()}>
                    <Size>{attribute.name}:</Size>
                    <AttributesList>
                        {attribute.items.map((att, idx) => {
                            const itemName = attribute.id.toLowerCase();
                            const inState = itemName && item[itemName];
                            const canRender = inState && idx === item[itemName].value;  
                            if (itemName === "color") {
                                return itemName && canRender ?
                                    <AttributesColorItem
                                        onClick={e => {
                                            handleAttributesChange(e, item, idx)
                                            this.props.cartAmountHandler(e, item)
                                            }
                                        }
                                        key={uuidv4()}
                                        border
                                        data-name={itemName}
                                    >
                                        <ColorWrapper
                                            color={`${att.value}`}
                                        >{att.value}
                                        </ColorWrapper>
                                    </AttributesColorItem>
                                    : <AttributesColorItem
                                        key={uuidv4()}
                                        color={`${att.value}`}
                                        data-name={itemName}
                                        onClick={(e) => handleAttributesChange(e, item, idx)}>
                                        <ColorWrapper
                                            color={`${att.value}`}
                                        >{att.value}
                                        </ColorWrapper>
                                    </AttributesColorItem>
                            } else {
                                return itemName && canRender ?
                                    <AttributesItem
                                        key={uuidv4()}
                                        chosen
                                        data-name={itemName}
                                        onClick={(e) => handleAttributesChange(e, item, idx)}
                                    >{att.value}
                                    </AttributesItem>
                                    : <AttributesItem
                                        key={uuidv4()}
                                        data-name={itemName}
                                        onClick={(e) => handleAttributesChange(e, item, idx)}
                                        >{att.value}
                                    </AttributesItem>
                                }
                        })}
                </AttributesList>
                </Item>
        )})
    }
             
    render() {
        const { currency, cartAmountHandler} = this.props;
        let items = [...this.props.cart];
        let cart = [];
        filterCart(items, cart);
    
        return (
                <CartList>
                    {this.props && cart.map((item, index) => {
                        return <CartListItem key={uuidv4()}>
                            <CartContainer>
                                <TextContainer>
                                    <CartTitle>{item.brand}</CartTitle>
                                    <CartTitleBrand>{item.name}</CartTitleBrand>
                                    <Price>{currency}{item.prices.find(price => 
                                        price.currency.symbol === currency.trim()).amount}                                        
                                    </Price>
                                    <List>
                                        {this.attributesSearch(item.attributes, item, index)}
                                    </List>
                                    </TextContainer>
                                    <QuantityContainer>
                                    <Plus
                                        id="plus"
                                        onClick={e => cartAmountHandler(e, item)}
                                    ></Plus>
                                        <div>{productQuantity(this.props.cart, item)}</div>
                                    <Minus
                                        id="minus"
                                        onClick={e => cartAmountHandler(e, item)}
                                    ></Minus>
                                    </QuantityContainer>
                                <PhotoThumb>
                                    <PhotoImage src={item.gallery[0]} alt={item.id} />
                                </PhotoThumb>
                            </CartContainer>
                        </CartListItem>
                    })}
                </CartList>
             )
    }
}