import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  list-style: none;
  padding: 0;
  width: 100%;

//   -ms-overflow-style: none;
// scrollbar-width: none;

// &::-webkit-scrollbar{
//     display: none;
// }
`;

export const Item = styled(NavLink)`
`;

export const Container = styled.div`
max-width: 1440px;
margin: 0 auto;
padding: 80px 101px;
`;

export const CategoryTitle = styled.h1`
text-align: left;
margin-bottom: 103px;
font-size: 42px;
line-height: 1.6;
&::first-letter{
text-transform: capitalize;
}
`;

export const ItemLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;