import { Component } from "react";
import { Container } from "./CartPage.styled";
import CartProduct from "components/cart-product/CartProduct";
import { v4 as uuidv4 } from "uuid";
import { CartList, CartListItem, CartTitle,
    CartContainer, QuantityContainer,
    Plus, Minus, AttributesList, TextContainer,
    Price, Item, Size, AttributesItem, List,
    AttributesColorItem, PhotoImage, PhotoThumb, CartModel, PageName} from "./CartPage.styled"

export default class CartPage extends Component{

    colorPicker = () => {

    }

    render() {
        let items = [...this.props.cart];
        let cart = [];
        for (let item of items) {
            const inCart = cart.find(prod => prod.id === item.id)
            if (!inCart) {
                cart.push(item); 
            }
        }
        return <Container>
            <PageName>Cart</PageName>
            {/* Checking the cart and rendering product to a page */}
            <CartList>
                    {this.props && cart.map((item) => {
                        return <CartListItem key={uuidv4()}>
                            <CartContainer>
                                {/* Text info block  */}
                                <TextContainer>
                                    <CartTitle>{item.brand}</CartTitle>
                                    <CartModel>{item.name}</CartModel>
                                    <Price>{this.props.currency}{item.prices.find((price) => 
                                        price.currency.symbol === this.props.currency.trim()).amount}                                        
                                    </Price>
                                    {/* Rendering attributes of a product to its container */}
                                    <List>
                                        {item.attributes.map((i) => {
                                            return <Item key={uuidv4()}>
                                                <Size>{i.name}:</Size>
                                                <AttributesList>
                                                    {i.items.map(item => {
                                                        return i.id.includes("Color") ? <AttributesColorItem onClick={e => this.props.cartAmountHandler(e, item)}
                                                            key={uuidv4()} style={{ backgroundColor: `${item.value}` }}>{item.value}</AttributesColorItem> :
                                                            <AttributesItem key={uuidv4()}>{item.value}</AttributesItem>
                                                    })}
                                                </AttributesList>
                                            </Item>
                                        })}
                                    </List>
                                </TextContainer>
                                {/* Block with quantitiy and add/delete buttons */}
                                    <QuantityContainer>
                                        <Plus id="add" onClick={e=>this.props.cartAmountHandler(e,item)}></Plus>
                                        <div>{this.props.cart.filter(prod => prod.id === item.id).length}</div>
                                        <Minus id="delete" onClick={e=>this.props.cartAmountHandler(e,item)}></Minus>
                                </QuantityContainer>
                                {/* Photo block  */}
                                <PhotoThumb>
                                    <PhotoImage src={item.gallery[0]} alt={item.id} />
                                </PhotoThumb>
                            </CartContainer>
                        </CartListItem>
                    })}
                </CartList>
        </Container>;
    }
}