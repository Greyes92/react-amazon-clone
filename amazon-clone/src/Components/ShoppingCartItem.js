import React from 'react';
import styled from 'styled-components';

function ShoppingCartItem({ id, item }) {
  return (
    <CartItemContainer>

         <ImageContainer>
              <img src={item.image} alt=''/>
         </ImageContainer>

         <CartItemInfo>
               <ItemInfoTop>
                    <h2>{item.name}</h2>
               </ItemInfoTop>

               <ItemInfoBottom>
                    <CartItemQuantityContainer>Qty: {item.quantity}</CartItemQuantityContainer>
                     <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
               </ItemInfoBottom>
          </CartItemInfo>

          <ItemPrice>${item.price}</ItemPrice>

    </CartItemContainer>
  )
}

export default ShoppingCartItem;

const CartItemContainer = styled.div`
     padding-top: 12px;
     padding-bottom: 12px;
     display: flex;
`
const ImageContainer = styled.div`
     width: 180px;
     height: 180px;
     flex-shrink: 0;
     flex-grow: 0;
     margin-right: 16px;
     img{
          object-fit: contain;
          height: 100%;
          width: 100%;
     }
`
const CartItemInfo = styled.div`
 
`

const ItemInfoTop = styled.div`
     h2{
          font-weight: normal;
          font-size: 18px;
     }
`

const ItemInfoBottom = styled.div`
     display: flex;
     margin-top: 10px;
`

const  CartItemDeleteContainer = styled.div`
     color: #007185;
     margin-left: 16px;
     cursor: pointer;
`

const CartItemQuantityContainer = styled.div`

`

const ItemPrice = styled.div`
     font-size: 18px;
     font-weight: bold;
     width: 200px;
     display: flex;
     flex: 1;
     justify-content: right;

`



