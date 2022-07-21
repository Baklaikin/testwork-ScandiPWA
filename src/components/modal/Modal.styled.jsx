import styled from "styled-components";

export const ModalBackground = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
top: 80px;
left: 0;
z-index: 3;
width: 100vw;
height: 100vh;
background-color: rgba(57, 55, 72, 0.22);
`;

export const ModalWindow = styled.div`
position:absolute;
top:0px;
right:72px;
padding: 32px 16px;
width: 325px;
height: 600px;
overflow:auto;
background-color: white;
`;

export const ModalTitle = styled.h3`
margin-top:0;
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
width:140px;
height:43px;
padding:13px;
font-family: 'Raleway', sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 1.2;
text-transform: uppercase;
color: var(--text-color);
background: #FFFFFF;
border: 1px solid var(--text-color);
cursor: pointer;
`;

export const CheckButton = styled(Button)`
margin-right:0;
border-color: transparent;
background: #5ECE7B;
color: white;
`;

export const ButtonsList = styled.ul`
display: flex;
align-items: center;
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