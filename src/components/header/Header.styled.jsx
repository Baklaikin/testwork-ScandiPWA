import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ArrowDown from "../../images/arrow-down.svg";

export const Container = styled.div`
box-sizing:border-box;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 101px;
margin:0 auto;
max-width:1440px;
height:80px;
`;

export const Navigation = styled.nav`
display:flex;
align-items:center;
justify-content: space-between;
height:100%;
`;

export const NavItem = styled(NavLink)`
font-family:'Raleway', sans-serif;
font-size:16px;
line-height:1.2;
font-weight:600;
text-decoration:none;
border-bottom: none;
color: inherit;
color:inherit;
`;

export const List = styled.ul`
display:flex;
align-items: center;
list-style: none;
padding:0;
margin:0;
height:100%;
`;

export const Item = styled.li`
display:flex;
flex-direction:column;
justify-content:center;
height:100%;
:not(:last-of-type){
    margin-right:10px;
}
&.active{
    margin-bottom:-1px;
    color:#5ECE7B;
}
}
`;

export const Link = styled(NavLink)`
border-bottom:none;
`;

export const Logo = styled.div`
width:33px;
<height:3></height:3>1px;
& > a{
    border-bottom:none;
}
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
width:20px;
height:20px;
margin-bottom:32px;
border-radius:50%;
background-color:black;
`;

export const CartQuantityText = styled.p`
font-size:12px;
color:white;
`;

export const Select = styled.ul`
list-style:none;
position:absolute;
top:30px;
left:-17px;
padding:0;
margin:0;
width:114px;
box-shadow:0px 4px 35px rgba(168, 172, 176, 0.19);
z-index:1;
`;

export const Currency = styled.p`
width:40px;
height:20px;
margin:0;

&::after{
    content:'';
    display:block;
    width:12px;
    height:12px;
    background-image: url(${ArrowDown});
    background-repeat:no-repeat;
    background-position:center;
    position:absolute;
    top:25%;
    right:0;
    transition: background-image, transform, 300ms, ease-in;
}
&.is-open::after{
    transform: rotate(180deg);
}
`;

export const CurrencyWrapper = styled.div`
position:relative;
margin-right:10px;
`;

export const CurrencyTitle = styled.p`
cursor:pointer;
margin:0;
font-size:18px;
line-height:1.6;
&:hover{
    background-color:#EEEEEE;
}
`;

export const CurrencyItem = styled.li`
margin-bottom:13px;
&:first-of-type{
    margin-top:13px;
}
`;
