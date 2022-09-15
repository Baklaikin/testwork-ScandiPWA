import styled from "styled-components";

export const CartTotalText = styled.p`
display: inline-flex;
margin-top: 0; 
margin-bottom: 8px;
font-weight: 700;
font-size: 24px;
line-height: 1.1666;
`; 

export const CartTotalSpan = styled.span`
display: inline-flex;
width: 108px;
font-weight: 400;
font-size: 24px;
line-height: 1.1666;
`;

export const CartButton = styled.button`
margin-top: 16px;
width: 279px;
height: 43px;
color: var(--light-color);
background-color: var(--button-color);
border: none;
transform: scale(1);
transition: transform 0.5s ease;
&:active {
 transform: scale(0.9);
}
`;

export const CartTotalContainer = styled.div`
display: flex;
min-width: 210px;
flex-direction: column;
`;