import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:23px 101px;
margin:0 auto;
max-width:1440px;
height:80px;
`;

export const Navigation = styled.nav`
display:flex;
align-items:center;
justify-content: space-between;
`;

export const List = styled.ul`
display:flex;
align-items: center;
list-style: none;
padding:0;

`;

export const Item = styled.li`
:not(:last-of-type){
    margin-right:10px;
}
`;

export const Link = styled(NavLink)`

`;