import { Component } from "react";
import {AttributeItem, AttributeItemContainer, ListItemTitle, ItemsList,
    AttItemColor, ColorWrapper, AttItem} from "./Attributes.styled";

export default class Attributtes extends Component{
    render() {
        const { attributes, state, productSpecsChoise } = this.props;
        return attributes.map((item) => {
            return (
                <AttributeItem key={item.id}>
                    <AttributeItemContainer>
                        <ListItemTitle>{item.id}:</ListItemTitle>
                        <ItemsList>
                            {item.items.map((it, idx) => {
                                const itemName = item.id.toLowerCase();
                                const inState = state.product[itemName] && idx === state.product[itemName].value;
                                if (item.id === "Color") {
                                    return inState ?
                                        <AttItemColor
                                            key={it.id}
                                            onClick={(e) => productSpecsChoise(e, idx, item)}
                                            data-name={item.id}
                                            border
                                            color={`${it.value}`}
                                        >
                                            <ColorWrapper color={`${it.value}` !== "var(--light-color)" ? `${it.value}` : "#F2F2F2"}
                                            >{it.value}</ColorWrapper>
                                        </AttItemColor>
                                        : <AttItemColor
                                            onClick={(e) => productSpecsChoise(e, idx, item)}
                                            key={it.id}
                                            data-name={item.id}
                                            color={`${it.value}`}
                                            >
                                            <ColorWrapper color={`${it.value}` !== "var(--light-color)" ? `${it.value}` : "#F2F2F2"}
                                                >{it.value}
                                            </ColorWrapper>
                                        </AttItemColor>
                                } else {
                                    return inState ?
                                        <AttItem
                                            onClick={(e) => productSpecsChoise(e, idx, item)}
                                            key={it.id}
                                            data-name={item.id}
                                            chosen
                                        >{it.value}
                                        </AttItem> :
                                        <AttItem
                                            onClick={(e) => productSpecsChoise(e, idx, item)}
                                            key={it.id}
                                            data-name={item.id}
                                        >{it.value}
                                        </AttItem>
                                    }
                            })}
                        </ItemsList>
                    </AttributeItemContainer>
                </AttributeItem>)
            })
    }
}