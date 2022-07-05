import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding:0;
  margin: -10px 0 0 -10px;
  width: 100%;
`;

export const Item = styled(NavLink)`
flex-basis: calc((100% / 3) - 30px);
`;

export const Container = styled.div`
max-width:800px;
margin:0 auto;
padding:1em;
`;