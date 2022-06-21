import React from 'react'
import styled from 'styled-components';
import ShoppingCartItem from './ShoppingCartItem';
import NumberFormat from 'react-number-format'

function ShoppingCartItems({ cartItems, getSubtotal, getCartCount }) {
  return (
    <Container>
         <Title>Shopping Cart</Title>
         <PriceTitle>Price</PriceTitle>
         <hr/>
         <ShoppingCartItemsContainer>
              {
                   cartItems.map((item) => (
                     <ShoppingCartItem 
                         id={item.id}
                         item={item.data}
                     />
                   ))
              }
               
         </ShoppingCartItemsContainer>
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
    </Container>
  )
}

export default ShoppingCartItems;

const Container = styled.div`
     flex: 0.76;
     padding: 20px;
     padding-bottom: 30px;
     margin-right: 20px;
     background-color: white;
`

const Title = styled.h1`
     font-weight: normal;
`
const PriceTitle = styled.h5`
     font-size: 15px;
     color: #565959;
     font-weight: normal;
     display: flex;
     justify-content: right;
`

const ShoppingCartItemsContainer = styled.div`

`
const Subtotal = styled.h3`
     font-weight: normal;
     display: flex;
     justify-content: right;
     padding-top: 5px;
     span{
          font-weight: bold;
     }
`