import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from '../db/Firebase'

function ShoppingCartItem({ id, item }) {
  let options = [];

  for (let i = 1; i < Math.max(item.quantity + 1, 20); i++){
       options.push(<option value={i}>Qty: {i}</option>)
  }

  async function selectItemQuantity(newQty) {
     const cartItemRef = doc(db, 'shoppingCartItems', `${id}`)
     const cartItem = await getDoc(cartItemRef)
     .then((doc) => {
          console.log(doc.id)
          if (doc.exists()) {
               //console.log("Document data:", doc.data());
               updateDoc(cartItemRef, {
                    quantity: parseInt(newQty)
               })
          }
     })
  }

  async function deleteCartItem(e) {
     const cartItemRef = doc(db, 'shoppingCartItems', `${id}`)
     const cartItem = await getDoc(cartItemRef)
     .then((doc) => {
          console.log(doc.id)
          if (doc.exists()) {
               //console.log("Document data:", doc.data());
               deleteDoc(cartItemRef)
          }
     })
  }


  return (
    <CartItemContainer>

         <ImageContainer>
              <img src={item.image} alt=''/>
         </ImageContainer>

         <CartItemInfo>
               <ItemInfoTop>
                    <h2>{item.name}</h2>
                    <h5 className='inStock'>In Stock</h5>
                    <h5 className='eligible'>
                         Eligible for FREE Shipping 
                         <span className='and'> & </span> 
                         <span className='returns'>FREE Returns</span>
                    </h5>
                    <h5 className='giftOptions'>Gift options available.</h5>
               </ItemInfoTop>
               
               <ItemInfoBottom>
                    <CartItemQuantityContainer>
                         <select
                              value={item.quantity}
                              onChange={(e) => selectItemQuantity(e.target.value)}
                         >
                              {options}
                         </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer 
                         // onClick={(e) => {deleteCartItem(e.target.value)}}
                         onClick={deleteCartItem}
                    >
                         Delete
                    </CartItemDeleteContainer>
               </ItemInfoBottom>
          </CartItemInfo>

          <ItemPrice>
               <NumberFormat 
                    value={parseFloat(item.price*item.quantity).toFixed(2)}
                    displayType={'text'} 
                    thousandSeparator={true} 
                    prefix={'$'} 
               />
          </ItemPrice>

    </CartItemContainer>
  )
}

export default ShoppingCartItem;

const CartItemContainer = styled.div`
     padding-top: 12px;
     padding-bottom: 12px;
     display: flex;
     border-bottom: 1px solid #DDD;
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
          padding-bottom: 7px;
     }
     .inStock{
          color: green;
          font-weight: 500;
          padding-bottom: 5px;
     }
     .eligible{
          font-weight: 400;
          color: #565959;
          padding-bottom: 5px;
          .and{
               font-weight: bold;
               color: black;
               font-size: 15px;
          }
          .returns{
               color: #007185;
               font-size: 15px;
          }
     }
     .giftOptions{
          font-weight: 400;
          color: #565959;
     }
`

const ItemInfoBottom = styled.div`
     display: flex;
     margin-top: 10px;
     align-items: center;
`

const  CartItemDeleteContainer = styled.div`
     color: #007185;
     margin-left: 16px;
     cursor: pointer;
     font-size: 15px;
`

const CartItemQuantityContainer = styled.div`
     select{
          padding: 6px;
          border: 1px solid grey;
          border-radius: 7px;
          background-color: #F0F2f2;
          box-shadow: 0px 4px 5px 0 rgb(0 0 0 / 13%);
          :hover{
               cursor: pointer;
               background-color: lightgrey;
          }
     }
`

const ItemPrice = styled.div`
     font-size: 18px;
     font-weight: bold;
     width: 200px;
     display: flex;
     flex: 1;
     justify-content: right;
     padding-left: 20px;
`



