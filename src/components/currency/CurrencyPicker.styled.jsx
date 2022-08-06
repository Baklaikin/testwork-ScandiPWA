import styled from "styled-components";
import ArrowDown from "../../images/arrow-down.svg";

export const Currency = styled.p`
display:flex;
align-items: end;
height:20px;
margin:0;
font-weight: 500;
font-size: 18px;
line-height: 1;

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

// export const CurrencyItem = styled.li`
// margin-bottom:13px;
// text-align:center;
// &:first-of-type{
//     margin-top:13px;
// }

// `;

// export const CurrencyTitle = styled.p`
// margin:0;
// font-size:18px;
// cursor:pointer;
// &:hover{
//     background-color:#EEEEEE;
// }
// `;

// export const Select = styled.ul`
// position:absolute;
// top:30px;
// left:-31px;
// padding: 0;
// margin:0;
// width:114px;
// list-style:none;
// box-shadow:0px 4px 35px rgba(168, 172, 176, 0.19);
// z-index:1;
// background-color: #FFF;
// `;

// export const SelectWrapper = styled.div`
// width:100vw;
// height:100vh;
// position: absolute;
// top:0;
// left:0;
// `;