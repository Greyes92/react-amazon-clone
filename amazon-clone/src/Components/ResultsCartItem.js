import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import { Star } from '@styled-icons/entypo/Star';
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';
import db from '../db/Firebase'

function ResultsCartItem({ title, price, rating, image, id }) {

     function calcRating(){
          if(rating > 0){
            return(
              Array(Math.floor(rating))
              .fill()
              .map(rating => <StarIcon />)
            )
          } else {
            return 'No User Ratings';
          }
        }

        async function addToCart() {
          // e.preventDefault();
            
            const cartItemRef = doc(db, 'shoppingCartItems', `${id}`)
            const cartItem = await getDoc(cartItemRef)
            .then((doc) => {
              console.log(doc.id)
              if (doc.exists()) {
                console.log("Document data:", doc.data());
                alert(`${title} was added to your shopping cart.`)
                updateDoc(cartItemRef, {
                  quantity: increment(1)
                })
              } else {
                console.log("Added to shopping cart")
                alert(`${title} was added to your shopping cart.`)
                setDoc(cartItemRef, {
                  name: title,
                  image: image,
                  price: price,
                  quantity: 1
                })
              }
            }) 
          }

     return (
          <CartItemContainer>
      
               <ImageContainer>
                    <img src={image} alt=''/>
               </ImageContainer>
      
               <CartItemInfo>
                     <ItemInfoTop>
                          <h2>{title}</h2>
                          <Rating>
                              {calcRating()}
                         </Rating>
                          <ItemPrice>
                              <NumberFormat 
                               value={parseFloat(price).toFixed(2)}
                               displayType={'text'} 
                               thousandSeparator={true} 
                               prefix={'$'} 
                              />
                         </ItemPrice>
                          <h5 className='inStock'>In Stock</h5>
                          <h5 className='eligible'>
                               <img src='https://m.media-amazon.com/images/G/01/prime/marketing/slashPrime/amazon-prime-delivery-checkmark._CB659998231_.png' alt=''/>
                                 Get it as soon as
                               <span className='tomorrow'> Tomorrow </span> 
                          </h5>
                          <h5 className='freeShipping'>FREE Shipping By Amazon</h5>
                     </ItemInfoTop>
                     
                     <AddToCartBtn onClick={addToCart}>Add To Cart</AddToCartBtn>
                </CartItemInfo>
                
      
          </CartItemContainer>
        )
      }
      
export default ResultsCartItem;

const CartItemContainer = styled.div`
     display: flex;
     justify-content: left;
     border-bottom: 1px solid #DDD;
     background-color: white;
     margin: 10px;
`
const ImageContainer = styled.div`
     width: 200px;
     height: 225px;
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
          font-size: 20px;
          padding-bottom: 5px;
     }
     .inStock{
          color: green;
          font-weight: 500;
          padding-bottom: 5px;
     }
     .eligible{
          font-weight: 400;
          color: black;
          padding-bottom: 5px;
          font-size: 14px;
          img{
               margin-bottom: -9px;
               height: 26px;
          }
          .tomorrow{
               font-weight: bold;
               color: black;
               font-size: 15px;
          }
          .returns{
               color: #007185;
               font-size: 15px;
          }
     }
     .freeShipping{
          font-weight: 400;
          color: black;
          font-size: 14px;
     }
`

const Rating = styled.div`
     padding-bottom: 5px;
`

const ItemPrice = styled.h1`
     font-weight: 500;
     font-size: 30px;
     padding-bottom: 5px;
`
const StarIcon = styled(Star)`
  height: 18px;
  color: #FEBD69;
  padding: 0;
  margin: -1px;
`

const AddToCartBtn = styled.button`
  margin-top: 15px;
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  padding: 0;
  align-self: center;
  margin-bottom: 10px;
  :hover{
    cursor: pointer;
  }
`
