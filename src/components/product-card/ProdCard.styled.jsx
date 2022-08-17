import styled from "styled-components";

export const Container = styled.div`
position: relative;
height: auto;
flex-grow: 1;
padding:16px;
cursor: pointer;
&:hover{
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
}
&:hover div {
  visibility: visible;
}
`;

export const Thumb = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width:100%;
width: 354px;
height:330px;
overflow: hidden;
margin-bottom: 24px;
`;

export const Image = styled.img`
max-width:100%;
display:block;
height:100%;
object-fit:cover;
z-index: -1;
`;

export const Title = styled.p`
margin: 0;
text-align:left;
font-weight: 500;
font-size: 18px;
color: var(--text-color);
`;

export const OutOfStockText = styled.p`
font-size: 24px;
color: #8D8F9A;
`;

export const OutOfStockContainer = styled.div`
position: absolute;
display:flex;
align-items:center;
justify-content:center;
top: 0;
left: 0;
width:100%;
height:100%;
background-color: rgba(255,255,255,0.5);
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: flex-end;
flex-basis: calc((100% / 3) - 30px);
margin-left: 10px;
margin-top: 10px;
`;

export const InCart = styled.div`
position: absolute;
bottom: 74px;
right: 31px;
display:flex;
align-items: center;
justify-content: center;
width:52px;
height: 52px;
border-radius: 50%;
background-color: var(--button-color);
visibility: hidden;
z-index: 10;
`;