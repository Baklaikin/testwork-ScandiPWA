import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
& a {
    border-bottom: none;
}
`;

export const Title = styled.h1`
font-weight: 700;
font-size: 32px;
color: var(--text-color);
`;

export const Link = styled(NavLink)`
font-weight: 500;
font-size: 28px;
color: var(--text-color);
text-decoration: underline;
`;