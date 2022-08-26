import { Component } from "react";
import {
    CartListIt, CartContainer, TextContainer, CartTitle, ButtonsWrapper,
    CartModel, Price, List, QuantityContainer, Plus, ProductAmountWrapper,
    Minus, PhotoThumb, PhotoImage, LeftArrowButton, RightArrowButton
} from "./CartListItem.styled";
import productQuantity from "utils/productQuantity";

export default class CartListItem extends Component{
    state = {
        index: 0
    }

    mainImageHandler = (e, idx, item) => {
        const { index } = this.state;
        const img = document.getElementById(`image-${idx}`);
        if (e.target.id === "left-arrow") {
            if (index === 0) {
                img.src = `${item.gallery[item.gallery.length - 1]}`
                this.setState({ index: item.gallery.length - 1 })
            } else {
                img.src = `${item.gallery[index - 1]}`;
                this.setState({ index: index - 1 })
            }
        }
        if (e.target.id === "right-arrow") {
            if (index === item.gallery.length - 1) {
                img.src = `${item.gallery[0]}`
                this.setState({ index: 0 })
            } else {
                img.src = `${item.gallery[index + 1]}`
                this.setState({ index: index + 1 })
            }
        };

    };

    render() {
        const { item, currency, findPrice, attributesRender,
            cartAmountHandler, idx, cart } = this.props;
        return <CartListIt>
                    <CartContainer>
                        <TextContainer>
                            <CartTitle>{item.brand}</CartTitle>
                            <CartModel>{item.name}</CartModel>
                            <Price>{currency}{findPrice(item.prices)}                                        
                            </Price>
                            <List>
                                {attributesRender(item)}
                            </List>
                        </TextContainer>                               
                        <QuantityContainer>
                            <Plus id="add" onClick={e => cartAmountHandler(e,item,idx)}></Plus>
                            <ProductAmountWrapper>{productQuantity(cart, item)}</ProductAmountWrapper>
                            <Minus id="delete" onClick={e => cartAmountHandler(e,item,idx)}></Minus>
                        </QuantityContainer>                              
                        <PhotoThumb>
                            <PhotoImage
                                id={`image-${idx}`}
                                src={item.gallery[0]}
                                alt={item.id}
                        />
                        {/* If gallery contains only 1 photo there is no need to render photo slider buttons  */}
                        {item.gallery.length > 1 && <ButtonsWrapper>
                                <LeftArrowButton id="left-arrow" type="button" onClick={e => this.mainImageHandler(e,idx, item)}></LeftArrowButton>
                                <RightArrowButton id="right-arrow" type="button" onClick={e => this.mainImageHandler(e,idx, item)}></RightArrowButton>
                            </ButtonsWrapper>
                        }
                        </PhotoThumb>
                    </CartContainer>
                </CartListIt>;
    }
}