import styled from "styled-components";
import PlusSquare from "../../images/plus-square.svg";
import MinusSquare from "../../images/minus-square.svg";

export const Container = styled.div`
max-width:1440px;
margin:0 auto;
padding:80px 101px;
`;

export const CartList = styled.ul`

`;

export const CartListItem = styled.li`
overflow: auto;
/* &:not(:last-of-type){
    margin-bottom:40px;
} */
`;

export const CartTitle = styled.h2`
width: 297px;
margin-top: 0;
margin-bottom: 16px;
font-family: 'Raleway', sans-serif;
font-weight: 600;
font-size: 30px;
line-height: 0.9;
color: #1D1F22;
`;

export const CartModel = styled(CartTitle)`
font-weight: 400;
margin-bottom: 20px;
`;

export const CartContainer = styled.div`
display: flex;
height: 326px;
padding: 24px 0;
border-top: 1px solid #E5E5E5
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

export const Paragraph = styled.p`
margin-top:0;
margin-bottom: 8px;
font-family: 'Raleway', sans-serif;
color: #1D1F22;
`;

export const Price = styled(Paragraph)`
font-weight: 500;
font-size: 16px;
line-height: 1.6;
margin-bottom: 20px;
`;

export const Size = styled(Paragraph)`
font-weight: 400;
font-size: 14px;
line-height: 16px;
`;

export const AttributesItem = styled.li`
display:flex;
align-items:center;
justify-content:center;
min-width:63px;
height: 45px;
color: #1D1F22;
border: 1px solid #1D1F22;
&:not(:last-of-type){
    margin-right:8px;
}
font-family: 'Source Sans Pro';
font-weight: 400;
font-size: 14px;
line-height: 1.6;
color: #1D1F22;
`;

export const AttributesColorItem = styled(AttributesItem)`
color:transparent;
min-width:36px;
width:36px;
height:36px;
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