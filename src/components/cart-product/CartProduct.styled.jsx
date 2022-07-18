import styled from "styled-components";
import PlusSquare from "../../images/plus-square.svg";
import MinusSquare from "../../images/minus-square.svg";

export const CartList = styled.ul`

`;

export const CartListItem = styled.li`
&:not(:last-of-type){
    margin-bottom:40px;
}
`;

export const Container = styled.div`
width: 100%;
padding: 32px 16px;
`;

export const CartTitle = styled.h2`
width:128px;
margin-top:0;
margin-bottom:4px;
font-family: 'Raleway', sans-serif;
font-weight: 300;
font-size: 16px;
line-height: 1.6;
color: #1D1F22;
`;

export const CartContainer = styled.div`
display:flex;
height:190px;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
width:136px;
padding-right:8px;
`;

export const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
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
min-width:24px;
height: 24px;
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
`;

export const PhotoThumb = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-left:8px;
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