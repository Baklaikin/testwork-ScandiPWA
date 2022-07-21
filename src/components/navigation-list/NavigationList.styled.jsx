import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
`;

export const NavItem = styled(NavLink)`
line-height:1.2;
font-weight:600;
border-bottom: none;
color: inherit;
color:inherit;
`;