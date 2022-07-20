import styled from "styled-components";

export const Container = styled.div`
height: auto;
flex-grow: 1;
padding:16px;
cursor: pointer;
:hover{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
}
`;

export const Thumb = styled.div`
position: relative;
width:100%;
height:346px;
overflow: hidden;
`;

export const Image = styled.img`
max-width:100%;
display:block;
height:auto;
object-fit:cover;
`;

export const Title = styled.p`
text-align:left;
font-family: 'Raleway', sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 1.6;
color: var(--text-color);
`;

export const OutOfStockText = styled.p`
font-family: 'Raleway';
font-weight: 400;
font-size: 24px;
line-height: 1.6;
color: #8D8F9A;

`;

export const OutOfStockContainer = styled.div`
position: absolute;
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100%;
top: 0;
left: 0;
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
