import { Component } from "react";
import { Container } from "./CartPage.styled";
import { v4 as uuidv4 } from "uuid";
import { CartList, CartListItem, CartTitle, CartTotalSpan,CartTotalContainer,
    CartContainer, QuantityContainer, ColorWrapper, CartButton,
    Plus, Minus, AttributesList, TextContainer, CartTotal,
    Price, Item, Size, AttributesItem, List, NoProductTitle,
    AttributesColorItem, PhotoImage, PhotoThumb, CartModel, PageName} from "./CartPage.styled"

export default class CartPage extends Component{
    state = {
        totalPrice:[]
    }
    
    findPrice = (prices) => {
        const actualPrice = prices.find((price) => price.currency.symbol === this.props.currency.trim()).amount;
        return actualPrice;
    }
    
    countTax = (items, currency, tax) => {
        if (tax) {
            return (tax * items.map((item) => item.prices.find(it => it.currency.symbol === currency.trim())).reduce((acc, item) => acc + item.amount, 0)).toFixed(2)
        } else {
            return items.map((item) => item.prices.find(it => it.currency.symbol === currency.trim())).reduce((acc, item) => acc + item.amount, 0).toFixed(2);
        }
    }

    attributesRender = (attributes) => {
        return attributes.map((attribute) => {
            return <Item key={uuidv4()}>
                <Size>{attribute.name}:</Size>
                <AttributesList>
                    {attribute.items.map((item, idx) => {
                        const itemName = attribute.id.toLowerCase();
                        const inState = itemName && this.props.cart.find(item => {
                            if (item[itemName]) {
                            return item[itemName].id === itemName
                                }
                            return null})
                                const canRender = inState && idx === inState[itemName].value;
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
                    })}
                </AttributesList>
            </Item>
        })
    }

    render() {
        const { currency } = this.props;
        let items = [...this.props.cart];
        const tax = 0.21;
        let cart = [];
        for (let item of items) {
            const inCart = cart.find(prod => prod.id === item.id)
            if (!inCart) {
                cart.push(item); 
            }
        }
        return <Container>
            <PageName>Cart</PageName>
            {items.length === 0 ? <NoProductTitle>You haven't add any product in cart so far</NoProductTitle> : null}
            <CartList>
                    {this.props && cart.map((item) => {
                        return <CartListItem key={uuidv4()}>
                            <CartContainer>
                                <TextContainer>
                                    <CartTitle>{item.brand}</CartTitle>
                                    <CartModel>{item.name}</CartModel>
                                    <Price>{currency}{this.findPrice(item.prices)}                                        
                                    </Price>
                                     <List>
                                        {this.attributesRender(item.attributes)}
                                    </List>
                                </TextContainer>
                                
                                <QuantityContainer>
                                        <Plus id="add" onClick={e => this.props.cartAmountHandler(e,item)}></Plus>
                                        <div>{this.props.cart.filter(prod => prod.id === item.id).length}</div>
                                        <Minus id="delete" onClick={e => this.props.cartAmountHandler(e,item)}></Minus>
                                </QuantityContainer>
                                
                                <PhotoThumb>
                                    <PhotoImage src={item.gallery[0]} alt={item.id} />
                                </PhotoThumb>
                            </CartContainer>
                        </CartListItem>
                    })}
            </CartList>

            {items.length > 0 ? <CartTotalContainer>
                <CartTotal>
                    <CartTotalSpan>Tax 21%:</CartTotalSpan>
                    {currency}{this.countTax(items, currency, tax)}
                </CartTotal>
                <CartTotal>
                    <CartTotalSpan>Quantity:</CartTotalSpan> {items.length}
                </CartTotal>
                <CartTotal>
                    <CartTotalSpan>Total: </CartTotalSpan>
                    {currency}{this.countTax(items, currency)}
                </CartTotal>
                <CartButton type="button"
                >Order</CartButton>
            </CartTotalContainer> : null}
        </Container>;
    }
}