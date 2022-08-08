import styled from 'styled-components';

export const CurrencyItem = styled.li`
margin-bottom:13px;
text-align:center;
&:first-of-type{
    margin-top:13px;
}
`;

export const CurrencyTitle = styled.p`
margin:0;
font-size:18px;
cursor:pointer;
&:hover{
    background-color:#EEEEEE;
}
`;

export const Select = styled.ul`
position: absolute;
top: 60px;
right: 110px;
padding: 0;
margin: 0;
width: 114px;
list-style: none;
box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
z-index: 1;
background-color: #FFF;
`;

export const SelectWrapper = styled.div`
position: fixed;
width:100vw;
height:100vh;
top:0;
left:0;
`;