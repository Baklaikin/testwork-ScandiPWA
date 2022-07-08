import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding:0;
  margin: -40px 0 0 -40px;
  width: 100%;
`;

export const Item = styled(NavLink)`
flex-basis: calc((100% / 3) - 120px);
margin-left:40px;
margin-top:40px;
`;

export const Container = styled.div`
max-width:1440px;
margin:0 auto;
padding:80px 101px;
`;

export const CategoryTitle = styled.h1`
text-align:left;
margin-bottom:103px;
&::first-letter{
text-transform: capitalize;
}
`;

export const ItemLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-basis: calc((100% / 3) - 30px);
  margin-left: 10px;
  margin-top: 10px;
`;