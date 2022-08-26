import styled from "styled-components";
import PlusSquare from "../../images/plus-square.svg";
import MinusSquare from "../../images/minus-square.svg";
import LeftArrow from "../../images/left-arrow.svg";
import RightArrow from "../../images/right-arrow.svg";

export const CartListIt = styled.li`
overflow: auto;
margin-bottom:40px;
border-top: 1px solid var(--border-accent-color);
&:last-of-type{
    border-bottom: 1px solid var(--border-accent-color);
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

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 297px;
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

export const QuantityContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
margin-left: auto;
`;

export const Plus = styled(QuantityAdjastment)`
background-image: url(${PlusSquare});
`;

export const Minus = styled(QuantityAdjastment)`
background-image: url(${MinusSquare});
`;

export const ButtonsWrapper = styled.div`
position: absolute;
bottom: 16px;
right: 16px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Button = styled.button`
width: 24px;
height: 24px;
padding: 0;
margin: 0;
border: none;
background-position: center;
background-repeat: no-repeat;
background-color: rgba(0, 0, 0, 0.73);
`;

export const LeftArrowButton = styled(Button)`
background-image: url(${LeftArrow});
margin-right: 8px;
`;

export const RightArrowButton = styled(Button)`
background-image: url(${RightArrow});
`;

export const ProductAmountWrapper = styled.div``;

export const PhotoThumb = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
margin-left: 24px;
width: 200px;
overflow: hidden;
`;

export const PhotoImage = styled.img`
display: block;
width: 100%;
object-fit: cover;
`;

export const Paragraph = styled.p`
margin-top: 0;
margin-bottom: 8px;
color: var(--text-color);
`;

export const Size = styled(Paragraph)`
font-weight: 700;
font-size: 18px;
line-height: 1;
`;

export const Price = styled(Size)`
font-size: 24px;
line-height: 1.3333;
margin-bottom: 20px;
`;

export const List = styled.ul`
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
`;