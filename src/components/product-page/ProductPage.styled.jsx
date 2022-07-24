import styled from "styled-components";

export const Container = styled.div`
box-sizing:border-box;
display: flex;
padding: 72px 96px;
margin:0 auto;
max-width:1440px;
`;

export const MiniPicturesWrapper = styled.div`
display:flex;
flex-direction:column;
margin-right:20px;
`;

export const MainPictureWrapper = styled.div`
width:610px;
height:511px;
margin-right:100px;
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
padding:0;
margin-bottom:24px;
list-style:none;
`;

export const List = styled.ul`
list-style:none;
padding:0;
margin:0;
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
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.6;
color: var(--text-color);
`;

export const AddToCartButton = styled.button`
width:100%;
height:52px;
background-color:#5ECE7B;
color: white;
border:none;
padding:16px 32px;
margin-bottom:40px;
cursor: pointer;
`;

export const AddToCartButtonDisabled = styled(AddToCartButton)`
background-color:grey;
`;

export const ColorText = styled.p`
visibility:hidden;
`;