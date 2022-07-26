import styled from "styled-components";

export const Container = styled.div`
margin:0 auto;
padding: 72px 96px;
max-width:1440px;
box-sizing:border-box;
display: flex;
`;

export const MiniPicturesWrapper = styled.div`
margin-right:20px;
display:flex;
flex-direction:column;
`;

export const MainPictureWrapper = styled.div`
margin-right:100px;
width:610px;
height:511px;
overflow:hidden;
`;
export const MiniImageThumb = styled.div`
width:80px;
height:80px;
overflow:hidden;
cursor: pointer;
`;
export const Image = styled.img`
display:block;
width:100%;
height:100%;
object-fit: contain;
`;
export const AttributesList = styled.ul`
margin-bottom:24px;
padding:0;
list-style:none;
`;

export const List = styled.ul`
margin:0;
padding:0;
list-style:none;
`;

export const Item = styled.li`
&:not(:last-of-type){
    margin-bottom:32px;
}
`;

export const ProductContainer = styled.div`
text-align:left;
max-width:292px;
`;

export const ProductTitle = styled.h2`
margin-bottom:12px;
margin-top:0;
font-family: 'Raleway', sans-serif;
font-weight:600;
font-size: 30px;
line-height: 27px;
color: var(--text-color);
`;

export const ProductSubTitle = styled.h3`
margin-bottom:43px;
margin-top:0;
font-family: 'Raleway', sans-serif;
font-weight:400;
font-size: 30px;
line-height: 27px;
color: var(--text-color);
`;

export const ProductText = styled.p`
font-family: 'Roboto Condensed';
font-weight: 700;
font-size: 18px;
line-height: 1;
color: var(--text-color);
margin-top:0;
margin-bottom:10px;
`;

export const ProductPrice = styled.p`
font-family: 'Raleway';
font-weight: 700;
font-size: 24px;
color: var(--text-color);
margin-bottom:20px;
`;

export const DescriptionText = styled.div`
max-height:200px;
overflow: auto;
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.6;
color: var(--text-color);
`;

export const AddToCartButton = styled.button`
padding:16px 32px;
margin-bottom:40px;
width:100%;
height:52px;
background-color:#5ECE7B;
color: white;
border:none;
cursor: pointer;
transform: scale(1);
transition: transform 0.5s ease;
&:active {
 transform: scale(0.9);
}
`;

export const AddToCartButtonDisabled = styled(AddToCartButton)`
background-color:grey;
`;

export const ColorText = styled.p`
visibility:hidden;
`;