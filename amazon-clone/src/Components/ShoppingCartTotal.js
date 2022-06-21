import React from 'react'
import styled from 'styled-components';
import NumberFormat from 'react-number-format'

function ShoppingCartTotal({ getSubtotal, getCartCount }) {
  return (
    <ShoppingCartTotalContainer>
                 <Subtotal>
              Subtotal ({getCartCount()} items):
              <span>
                    <NumberFormat 
                     value={parseFloat(getSubtotal()).toFixed(2)} 
                     displayType={'text'} 
                     thousandSeparator={true} 
                     prefix={'$'} 
                    />
              </span>
          </Subtotal>
        <CheckoutBtn>Proceed to checkout</CheckoutBtn>
    </ShoppingCartTotalContainer>
  )
}

export default ShoppingCartTotal;

const ShoppingCartTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    flex: 0.23;
    background-color: white;
    padding: 20px;
    span{
      font-weight: bold;
    }
`

const Subtotal = styled.h2`
  font-size: 19px;
  font-weight: 400;
  margin: 6px;
`

const CheckoutBtn = styled.button`
  background: #FFD814;
  border-color: #FCD200;
  border: 2px solid #FCD200;
  width: 100%;
  padding: 4px 8px;
  border-radius: 8px;
  height: 35px;
  font-weight: 500;
  font-size: 16px;
  :hover{
    cursor: pointer;
    background-color: #FCD200;
  }
`