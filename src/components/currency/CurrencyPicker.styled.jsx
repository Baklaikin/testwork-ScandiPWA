import styled from "styled-components";
import ArrowDown from "../../images/arrow-down.svg";

export const Currency = styled.p`
display: flex;
align-items: end;
height: 20px;
margin: 0;
font-weight: 500;
font-size: 18px;
line-height: 1;

&::after{
content:'';
display: block;
width: 12px;
height: 12px;
background-image: url(${ArrowDown});
background-repeat: no-repeat;
background-position: center;
transition: background-image, transform, 300ms, ease-in;
}

&.is-open{
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
}

&.is-open::after{
    transform: rotate(180deg);
}
`;

export const CurrencyWrapper = styled.div`
position: relative;
margin-right: 10px;
`;