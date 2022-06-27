import React from 'react';
import styled from 'styled-components';
import ShoppingCartItems from './ShoppingCartItems';
import ShoppingCartTotal from './ShoppingCartTotal';

function ShoppingCartPage({ cartItems }) {

  console.log(cartItems)

  const getSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal +=  (item.data.price * item.data.quantity)
    })
    return subtotal;
  } 

  const getCartCount = () => {
    let cartItemCount = 0;
    
    cartItems.forEach((item) => {
      cartItemCount += item.data.quantity
      
    })
      return cartItemCount;
  }

  return (
    <ShoppingCartPageContainer>
      <ShoppingCartItems 
        cartItems={cartItems} 
        getSubtotal={getSubtotal} 
        getCartCount={getCartCount}
      />

      <ShoppingCartTotal 
        getSubtotal={getSubtotal} 
        getCartCount={getCartCount}
        />
    </ShoppingCartPageContainer>
  )
}

export default ShoppingCartPage;

const ShoppingCartPageContainer = styled.div`
  display: flex;
  padding: 14px 18px 18px 18px;
  align-items: flex-start;
`
