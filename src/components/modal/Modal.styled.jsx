import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ModalBackground = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(57, 55, 72, 0.22);
background: linear-gradient(180deg, rgba(255,255,255, 0) 0px, 
rgba(255,255,255, 0) 80px, rgba(57, 55, 72, 0.22) 80px,  
rgba(57, 55, 72, 0.22) 100%);
`;

export const ModalWindow = styled.div`
position: absolute;
top: 80px;
right: 320px;
padding: 32px 16px;
width: 325px;
max-height: 650px;
overflow: auto;
background-color: white;
z-index: 1;
`;

export const ModalTitle = styled.h3`
margin-top: 0;
font-weight: 700;
color: var(--text-color);
`;

export const Span = styled.span`
font-family: 'Raleway', sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.6;
color: var(--text-color);
`;

export const Button = styled.button`
margin-right: 12px;
width: 140px;
height: 43px;
padding: 13px;
font-family: 'Raleway', sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 1.2;
text-transform: uppercase;
color: var(--text-color);
background: var(--light-color);
border: 1px solid var(--text-color);
cursor: pointer;
`;

export const CheckButton = styled(Button)`
margin-right: 0;
border-color: transparent;
background: var(--button-color);
color: var(--light-color);
`;

export const ButtonsList = styled.ul`
display: flex;
align-items: center;
`;

export const ViewBagButton = styled(NavLink)`
border-bottom: none;
`;

export const ModalList = styled.div`
display: flex;
flex-direction: column;
`;

export const TotalContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 32px;
`;

export const TotalTitle = styled.h3`
margin: 0;
font-family: 'Roboto', sans-serif;
font-weight: 500;
line-height: 1.125;
color: var(--text-color);
`;

export const TotalParagraph = styled.p`
margin: 0;
font-weight: 700;
color: var(--text-color);
`;