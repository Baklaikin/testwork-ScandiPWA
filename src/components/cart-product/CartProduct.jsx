import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    CartList, CartListItem, CartTitle,
    CartContainer, QuantityContainer,
    Plus, Minus, AttributesList, TextContainer,
    Price, Item, Size, AttributesItem, List,
    AttributesColorItem, PhotoImage, PhotoThumb
} from "./CartProduct.styled";

export default class CartProduct extends Component{
    render() {
        // const spec = this.props.cart
        let items = [...this.props.cart];
        let cart = [];
        for (let item of items) {
            const inCart = cart.find(prod => prod.id === item.id)
            if (!inCart) {
                cart.push(item); 
            }
        }
        return (
                <CartList>
                    {this.props && cart.map((item) => {
                        return <CartListItem key={uuidv4()}>
                            <CartContainer>
                                <TextContainer>
                                    <CartTitle>{item.name}</CartTitle>
                                    <Price>{this.props.currency}{item.prices.find((price) => 
                                        price.currency.symbol === this.props.currency.trim()).amount}                                        
                                    </Price>
                                    <List>
                                        {item.attributes.map((i) => {
                                            console.log("item in attributeS:", i);
                                            console.log("props in attributeS:", item.size);
                                            return <Item key={uuidv4()}>
                                                <Size>{i.name}:</Size>
                                                <AttributesList>
                                                    {i.items.map(att => {
                                                        const size = att.value === item.size ? <AttributesItem key={uuidv4()} style={{backgroundColor:"Black", color:"white"}}>{att.value}</AttributesItem> : <AttributesItem key={uuidv4()}>{att.value}</AttributesItem>
                                                        return i.id.includes("Color") ? <AttributesColorItem onClick={e=>this.props.cartAmountHandler(e,item)} key={uuidv4()} style={{ backgroundColor: `${att.value}`, minWidth:"16px",width:"16px",  height:"16px" }}>{item.value}</AttributesColorItem> :
                                                            size
                                                    })}
                                                </AttributesList>
                                            </Item>
                                        })}
                                    </List>
                                    </TextContainer>
                                    <QuantityContainer>
                                    <Plus
                                        id="plus" onClick={e => this.props.cartAmountHandler(e, item)}
                                    ></Plus>
                                        <div>{this.props.cart.filter(prod => prod.id === item.id).length}</div>
                                    <Minus
                                        id="minus" onClick={e => this.props.cartAmountHandler(e, item)}
                                    ></Minus>
                                    </QuantityContainer>
                                <PhotoThumb>
                                    <PhotoImage src={item.gallery[0]} alt={item.id} />
                                </PhotoThumb>
                            </CartContainer>
                        </CartListItem>
                    })}
                </CartList>
        );
}
}