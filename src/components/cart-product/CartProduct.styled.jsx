import styled from "styled-components";
import PlusSquare from "../../images/plus-square.svg";
import MinusSquare from "../../images/minus-square.svg";

export const CartList = styled.ul`
`;

export const CartListItem = styled.li`
overflow: inherit;
margin-bottom: 40px;
`;

export const CartTitle = styled.h2`
width: 128px;
margin-top: 0;
margin-bottom: 4px;
font-weight: 300;
color: var(--text-color);
`;

export const CartTitleBrand = styled(CartTitle)`
margin-bottom: 8px;
`;

export const CartContainer = styled.div`
display: flex;
height: auto;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 136px;
padding-right: 8px;
`;

export const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const QuantityAdjastment = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 24px;
height: 24px;
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`;

export const Plus = styled(QuantityAdjastment)`
background-image: url(${PlusSquare});
`;

export const Minus = styled(QuantityAdjastment)`
background-image: url(${MinusSquare});
`;

export const AttributesList = styled.ul`
display: flex;
align-items: center;
flex-wrap: wrap;
`;

export const Paragraph = styled.p`
margin-top: 0;
margin-bottom: 8px;
color: var(--text-color);
`;

export const Price = styled(Paragraph)`
font-weight: 500;
`;

export const Size = styled(Paragraph)`
font-size: 14px;
line-height: 1.1428;
`;

export const AttributesItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
min-width: 24px;
height: 24px;
color: var(--text-color);
border: 1px solid var(--text-color);
&:not(:last-of-type){
    margin-right:6px;
}
font-family: 'Source Sans Pro';
font-weight: 400;
font-size: 14px;
line-height: 1.6;
color: ${props => props.chosen ? "white" : "var(--text-color)"};
background-color: ${props => props.chosen ? "black" : "white"};
cursor: pointer;
`;

export const ColorWrapper = styled.div`

width: 16px;
height: 16px;
color: transparent;
background-color: ${props => props.color ? props.color : "none"};
box-shadow: ${props => props.color === "#FFFFFF" ? "0px 0px 1px 2px rgba(250,229,255,0.51)" : "none"}
`;

export const AttributesColorItem = styled(AttributesItem)`
background-color: transparent;
color: transparent;
display: flex;
align-items: center;
justify-content: center;
min-width: 20px;
width: 20px;
height: 20px;
border: 1px solid ${props => props.border ? "#5ECE7B" : "transparent"};
cursor: pointer;
background-color: ${props => props.color ? props.color : "transparent"} 
`;

export const PhotoThumb = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-left: 8px;
overflow: hidden;
`;

export const PhotoImage = styled.img`
display: block;
width: 100%;
object-fit: cover;
`;

export const List = styled.ul`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
`;

export const Item = styled.li`
&:not(:last-of-type){
    margin-bottom:8px;
}
`;