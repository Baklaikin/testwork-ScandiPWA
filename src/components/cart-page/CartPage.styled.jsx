import styled from "styled-components";

export const Container = styled.div`
max-width: 1440px;
margin: 0 auto;
padding: 80px 101px;
`;

export const PageName = styled.h1`
margin-top: 0;
margin-bottom: 55px;
font-weight: 700;
font-size: 32px;
line-height: 1.25;
`;

export const NoProductTitle = styled.h2`
font-weight: 600;
font-size: 28px;
line-height: 1.25;
`;

export const CartList = styled.ul`
`;

export const AttributesList = styled.ul`
display: flex;
align-items: center;
flex-wrap: wrap;
`;

export const ColorWrapper = styled.div`

width: 32px;
height: 32px;
color: transparent;
background-color: ${props => props.color ? props.color : "none"};
box-shadow:${props => props.color === "var(--light-color)" ? "0px 0px 1px 2px rgba(250,229,255,0.51)" : "none"}
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

export const AttributesItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
min-width: 63px;
height: 45px;
color: var(--text-color);
border: 1px solid var(--text-color);
&:not(:last-of-type){
    margin-right:8px;
}
font-family: 'Source Sans Pro';
font-weight: 400;
font-size: 14px;
line-height: 1.6;
color: var(--text-color);
color: ${props => props.chosen ? "var(--light-color)" : "var(--text-color)"};
background-color: ${props=>props.chosen ? "var(--text-color)" : "var(--light-color)"};
cursor: pointer;
`;

export const AttributesColorItem = styled(AttributesItem)`
display: flex;
align-items: center;
justify-content: center;
color: transparent;
min-width: 36px;
width: 36px;
height: 36px;
border: 1px solid ${props => props.border ? "var(--button-color)" : "transparent"};
cursor: pointer;
`;

export const Item = styled.li`
&:not(:last-of-type){
    margin-bottom: 16px;
}
`;