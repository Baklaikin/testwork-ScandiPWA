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
padding: 1em;
background-color: white;
border:1px solid red;
`;