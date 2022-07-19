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
width: 325px;
height: 600px;
overflow:auto;
padding: 32px 16px;
background-color: white;
`;

export const ModalTitle = styled.h3`
font-family: 'Raleway', sans-serif;
font-weight: 700;
font-size: 16px;
line-height: 1.6;
color: #1D1F22;
margin-top:0;
`;

export const Span = styled.span`
font-family: 'Raleway', sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.6;
color: #1D1F22;
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
color: #1D1F22;
background: #FFFFFF;
border: 1px solid #1D1F22;
cursor: pointer;
`;

export const CheckButton = styled(Button)`
background: #5ECE7B;
color: white;
border-color: transparent;
margin-right:0;
`;

export const ButtonsList = styled.ul`
display: flex;
align-items: center;
`;

export const ModalList = styled.div`
display: flex;
flex-direction: column;
`;
