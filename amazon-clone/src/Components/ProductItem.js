import React from 'react'
import styled from 'styled-components';
import { Star } from '@styled-icons/entypo/Star';
import { doc, getDoc, updateDoc, setDoc, increment } from 'firebase/firestore';
import db from '../db/Firebase';
import NumberFormat from 'react-number-format'


function ProductItem({ title, price, rating, image, id }) {

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
    // setInput("");
    // setImageUrl("");
  return (
        <ProductItemContainer key={id} id={id}>
        <Title>{ title }</Title>
        <Price>
          <NumberFormat 
            value={parseFloat(price).toFixed(2)} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'$'} 
          />
        </Price>
        <Rating>
          {calcRating()}
        </Rating>
        <ProductImage src={ image }></ProductImage>
        <AddToCartBtn onClick={addToCart}>Add To Cart</AddToCartBtn>
        {/* <AddToCartBtn >Add To Cart</AddToCartBtn> */}
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

const Title = styled.span`
  overflow: hidden;
`

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`

const Rating = styled.div``

const ProductImage = styled.img`
  min-height: 250px;
  max-height: 250px;
  /* max-width: 200px; */
  object-fit: contain;
  margin-top: 5px;
`

const AddToCartBtn = styled.button`
  margin-top: 12px;
  width: 100px;
  height: 30px;
  /* background-color: #f0c14b;
  border: 2px solid #a88734; */
  border-radius: 5px;
  background: #f0c14b;
  border-color: #a88734 #9c7e31 #846a29;
  background: rgb(240,193,75);
  background: linear-gradient(0deg, rgba(240,193,75,1) 0%, rgba(240,193,75,1) 53%, rgba(255,226,155,1) 99%);
  border: 1px solid #a88734 #9c7e31 #846a29;
  padding: 0;
  align-self: center;
  justify-content: center;
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