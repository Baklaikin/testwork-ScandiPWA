import styled from "styled-components";
import PlusSquare from "../../images/plus-square.svg";
import MinusSquare from "../../images/minus-square.svg";

export const Container = styled.div`
max-width:1440px;
margin:0 auto;
padding:80px 101px;
`;

export const PageName = styled.h1`
margin-top: 0;
margin-bottom: 55px;
font-weight: 700;
font-size: 32px;
line-height: 1.25;
`;

export const NoProductTitle = styled.h2`
font-weight: 600;
font-size: 28px;
line-height: 1.25;
`;

export const CartList = styled.ul`

`;

export const CartListItem = styled.li`
overflow: auto;
margin-bottom:40px;
border-top: 1px solid #E5E5E5;
&:last-of-type{
    border-bottom: 1px solid #E5E5E5
}
`;

export const CartTitle = styled.h2`
width: 297px;
margin-top: 0;
margin-bottom: 16px;
font-weight: 600;
font-size: 30px;
line-height: 0.9;
color: var(--text-color);
`;

export const CartModel = styled(CartTitle)`
font-weight: 400;
margin-bottom: 20px;
`;

export const CartContainer = styled.div`
display: flex;
padding: 24px 0;
`;

export const CartTotal = styled.p`
display: inline-flex;
margin-top: 0; 
margin-bottom:8px;
font-weight: 700;
font-size: 24px;
line-height: 1.1666;
`; 

export const CartTotalSpan = styled.span`
display:inline-flex;
width:108px;
font-weight: 400;
font-size: 24px;
line-height: 1.1666;

`;

export const CartButton = styled.button`
margin-top: 16px;
width: 279px;
height: 43px;
color: white;
background-color: var(--button-color);
border: none;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 297px;
`;

export const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
margin-left: auto;
`;

export const QuantityAdjastment = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:24px;
height: 24px;
background-position: center;
background-repeat:no-repeat;
background-size:contain;
`;

export const Plus = styled(QuantityAdjastment)`
background-image: url(${PlusSquare});
`;

export const Minus = styled(QuantityAdjastment)`
background-image: url(${MinusSquare});
`;

export const AttributesList = styled.ul`
display:flex;
align-items: center;
flex-wrap: wrap;
`;

export const ColorWrapper = styled.div`

width:32px;
height: 32px;
color:transparent;
background-color: ${props => props.color ? props.color : "none"};
box-shadow:${props => props.color === "#FFFFFF" ? "0px 0px 1px 2px rgba(250,229,255,0.51)" : "none"}
`;

export const Paragraph = styled.p`
margin-top:0;
margin-bottom: 8px;
color: var(--text-color);
`;

export const Price = styled(Paragraph)`
font-weight: 700;
font-size: 24;
line-height: 1;
margin-bottom: 20px;
`;

export const Size = styled(Paragraph)`
font-weight:700;
font-size: 18px;
line-height: 1;
`;

export const AttributesItem = styled.li`
display:flex;
align-items:center;
justify-content:center;
min-width:63px;
height: 45px;
color: var(--text-color);
border: 1px solid var(--text-color);
&:not(:last-of-type){
    margin-right:8px;
}
font-family: 'Source Sans Pro';
font-weight: 400;
font-size: 14px;
line-height: 1.6;
color: var(--text-color);
color: ${props => props.chosen ? "white" : "var(--text-color)"};
background-color: ${props=>props.chosen ? "black" : "white"};
`;

export const AttributesColorItem = styled(AttributesItem)`
display:flex;
align-items:center;
justify-content:center;
color:transparent;
min-width:36px;
width:36px;
height:36px;
border: 1px solid ${props => props.border ? "#5ECE7B" : "transparent"};
`;

export const PhotoThumb = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-left: 24px;
width: 200px;
height: 288px;
overflow:hidden;
`;

export const PhotoImage = styled.img`
display:block;
width:100%;
object-fit:cover;
`;

export const List = styled.ul`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
`;

export const Item = styled.li`
&:not(:last-of-type){
    margin-bottom: 16px;
}
`;

export const CartTotalContainer = styled.div`
display: flex;
min-width: 210px;
flex-direction: column;

`;