import React from 'react'
import styled from 'styled-components';
import { Star } from '@styled-icons/entypo/Star';

function ProductItem() {
  return (
    <ProductItemContainer>
      <Title>GPU</Title>
      <Price>$1,000</Price>
      <Rating> <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </Rating>
      <ProductImage src='https://m.media-amazon.com/images/I/91V+jq4ixES._AC_SL1500_.jpg'></ProductImage>
      <AddToCartBtn>Add To Cart</AddToCartBtn>
    </ProductItemContainer>
  )
}

export default ProductItem;

const ProductItemContainer = styled.div`
  background-color: white;
  padding: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  margin: 10px;
  max-height: 400px;
  flex: 1;
`

const Title = styled.span``

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`

const Rating = styled.div``

const ProductImage = styled.img`
  max-height: 250px;
  /* max-width: 200px; */
  object-fit: contain;
`

const AddToCartBtn = styled.button`
  margin-top: 12px;
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  padding: 0;
  align-self: center;
  :hover{
    cursor: pointer;
  }
`

const StarIcon = styled(Star)`
  height: 18px;
  color: #FEBD69;
  padding: 0;
  margin: -1px;
`