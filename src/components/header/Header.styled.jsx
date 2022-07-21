import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:0 auto;
padding:0 101px;
max-width:1440px;
height:80px;
`;

export const Navigation = styled.nav`
display:flex;
align-items:center;
justify-content: space-between;
height:100%;
`;

export const Link = styled(NavLink)`
border-bottom:none;
`;

export const Cart = styled.div`
position:relative;
height:20px;
display:flex;
cursor:pointer;
`;

export const CartQuantity = styled.div`
position:absolute;
top:-10px;
right:-11px;
display:flex;
align-items:center;
justify-content:center;
margin-bottom:32px;
width:20px;
height:20px;
border-radius:50%;
background-color:black;
`;

export const CartQuantityText = styled.p`
font-size:12px;
color:white;
`;

