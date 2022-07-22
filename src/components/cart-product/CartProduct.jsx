import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    CartList, CartListItem, CartTitle,
    CartContainer, QuantityContainer,
    Plus, Minus, AttributesList, TextContainer,
    Price, Item, Size, AttributesItem, List,
    AttributesColorItem, PhotoImage, PhotoThumb
} from "./CartProduct.styled";

export default class CartProduct extends Component {

    attributesSearch = (attributes, item) => {
       return attributes.map((attribute) => {
            // li 
            console.log("item in attributeS:", attribute);
            console.log("props in attributeS:", item.size);
            return <Item key={uuidv4()}>
                <Size>{attribute.name}:</Size>
                {/* ul  */}
                <AttributesList>
                    {attribute.items.map(att => {
                        // li
                        const size = att.value === item.size ? <AttributesItem key={uuidv4()} itemSize>{att.value}</AttributesItem>
                            :
                            <AttributesItem key={uuidv4()}>{att.value}</AttributesItem>
                        return attribute.id.includes("Color") ? <AttributesColorItem onClick={e => this.props.cartAmountHandler(e, item)}
                            key={uuidv4()} style={{ backgroundColor: `${att.value}`, minWidth: "16px", width: "16px", height: "16px" }}
                        >{item.value}</AttributesColorItem> : size
                    })}
              </AttributesList>
            </Item>
    })
    }
             

    render() {
        const { currency, cartAmountHandler } = this.props;
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
                                    <Price>{currency}{item.prices.find((price) => 
                                        price.currency.symbol === currency.trim()).amount}                                        
                                    </Price>
                                    <List>
                                        {/* Cheking attributes and render them in cart  */}
                                        {this.attributesSearch(item.attributes, item)}
                                    </List>
                                    </TextContainer>
                                    <QuantityContainer>
                                    <Plus
                                        id="plus" onClick={e => cartAmountHandler(e, item)}
                                    ></Plus>
                                        <div>{this.props.cart.filter(prod => prod.id === item.id).length}</div>
                                    <Minus
                                        id="minus" onClick={e => cartAmountHandler(e, item)}
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

  {/* {item.attributes.map((i) => { */}
                                            {/* // li 
                                            console.log("item in attributeS:", i);
                                            console.log("props in attributeS:", item.size);
                                            return <Item key={uuidv4()}>
                                                <Size>{i.name}:</Size>
                                                {/* ul  */}
                                                {/* <AttributesList>
                                                    {i.items.map(att => {
                                                        // li
                                                        const size = att.value === item.size ? <AttributesItem key={uuidv4()} style={{backgroundColor:"Black", color:"white"}}>{att.value}</AttributesItem> : <AttributesItem key={uuidv4()}>{att.value}</AttributesItem>
                                                        return i.id.includes("Color") ? <AttributesColorItem onClick={e=>this.props.cartAmountHandler(e,item)} key={uuidv4()} style={{ backgroundColor: `${att.value}`, minWidth:"16px",width:"16px",  height:"16px" }}>{item.value}</AttributesColorItem> :
                                                            size
                                                    })}
                                                </AttributesList>
                                            </Item>
                                        })}  */}