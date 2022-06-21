import React from 'react';
import styled from 'styled-components';
import ShoppingCartItems from './ShoppingCartItems';
import ShoppingCartTotal from './ShoppingCartTotal';

function ShoppingCartPage({ cartItems }) {
  return (
    <ShoppingCartPageContainer>
      <ShoppingCartItems cartItems={ cartItems }/>
      <ShoppingCartTotal />
    </ShoppingCartPageContainer>
  )
}

export default ShoppingCartPage;

const ShoppingCartPageContainer = styled.div`
  display: flex;
  padding: 14px 18px 18px 18px;
`