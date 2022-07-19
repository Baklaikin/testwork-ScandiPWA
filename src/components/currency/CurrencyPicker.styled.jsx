import styled from "styled-components";
import ArrowDown from "../../images/arrow-down.svg";

export const Currency = styled.p`
display:flex;
align-items:end;
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
position:relative;
margin-right:10px;
`;

export const CurrencyItem = styled.li`
text-align:center;
margin-bottom:13px;
&:first-of-type{
    margin-top:13px;
}

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

export const Select = styled.ul`
list-style:none;
position:absolute;
top:30px;
left:-31px;
padding: 0;
margin:0;
width:114px;
box-shadow:0px 4px 35px rgba(168, 172, 176, 0.19);
z-index:1;
`;
