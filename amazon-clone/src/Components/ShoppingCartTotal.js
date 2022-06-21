import React from 'react'
import styled from 'styled-components';

function ShoppingCartTotal() {
  return (
    <ShoppingCartTotalContainer>
         Shopping Cart Total
    </ShoppingCartTotalContainer>
  )
}

export default ShoppingCartTotal;

const ShoppingCartTotalContainer = styled.div`
     height: 300px;
     flex: 0.23;
     background-color: white;
`