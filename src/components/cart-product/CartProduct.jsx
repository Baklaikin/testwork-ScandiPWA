import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    Container, CartList, CartListItem, CartTitle, CartContainer, QuantityContainer, Plus, Minus,
AttributesList, TextContainer, Price, Size, AttributesItem,List, AttributesColorItem, PhotoImage, PhotoThumb} from "./CartProduct.styled";

export default class CartProduct extends Component{
    render() {
        const items = [...this.props.cart];
        let cart = [];
        for (let item of items) {
            if (!cart.includes(item)) {
                cart.push(item); 
            }
        }
        console.log("cart:",cart);
        return (
            // <Container>
                <CartList>
                    {this.props && cart.map((item) => {
                        return <CartListItem key={uuidv4()}>
                            <CartContainer>
                                <TextContainer>
                                    <CartTitle>{item.name}</CartTitle>
                                    <Price>{item.prices.map((price) => {
                                        if (price.currency.symbol === this.props.currency.trim()) return `${this.props.currency} ${price.amount}`
                                    })}
                                    </Price>
                                    <List>
                                        {item.attributes.map((i) => {
                                            return <li key={uuidv4()}>
                                                <Size>{i.name}:</Size>
                                                <AttributesList>
                                                    {i.items.map(item => {
                                                        return i.id.includes("Color") ? <AttributesColorItem key={uuidv4()} style={{ backgroundColor: `${item.value}`, minWidth:"16px",width:"16px",  height:"16px" }}>{item.value}</AttributesColorItem> :
                                                            <AttributesItem key={uuidv4()}>{item.value}</AttributesItem>
                                                    })}
                                                </AttributesList>
                                            </li>
                                        })}
                                    </List>
                                    
                                    {/* <ul className="color"></ul> */}
                                    </TextContainer>
                                    <QuantityContainer>
                                        <Plus></Plus>
                                        <div>{this.props.cart.filter(prod => prod.id === item.id).length}</div>
                                        <Minus></Minus>
                                    </QuantityContainer>
                                <PhotoThumb>
                                    <PhotoImage src={item.gallery[0]} alt={item.id} />
                                </PhotoThumb>
                            </CartContainer>
                        </CartListItem>
                    })}
                </CartList>
            // </Container>
        );
}
}