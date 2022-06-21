import React from 'react'
import styled from 'styled-components';
import { Star } from '@styled-icons/entypo/Star';
import { query, getDocs, getDocFromCache, addDoc, collection, doc, getDoc, updateDoc, setDoc, where, onSnapshot, increment } from 'firebase/firestore';
import db from '../db/Firebase';
import { RepeatOneSharp } from '@mui/icons-material';


function ProductItem({ title, price, rating, image, id }) {

  async function addToCart() {
    // e.preventDefault();
      
      const cartItemRef = doc(db, 'shoppingCartItems', `${id}`)
      const cartItem = await getDoc(cartItemRef)
      .then((doc) => {
        console.log(doc.id)
        if (doc.exists()) {
          console.log("Document data:", doc.data());
          updateDoc(cartItemRef, {
            quantity: increment(1)
          })
        } else {
          console.log("Added to shopping cart")
          setDoc(cartItemRef, {
            name: title,
            image: image,
            price: price,
            quantity: 1
          })
        }
      }) 


      // const cartItem = await addDoc(cartItemRef)
      // .then((doc) => { 
      //   console.log(doc.id)
      //   if(doc.id.exists){
      //     setDoc(collection(db, 'shoppingCartItems'), {
      //       quantity: doc.data().quantity +1
      //     })
      //   } 
      //   else {
      //   addDoc(collection(db, 'shoppingCartItems'), {
      //     name: title,
      //     image: image,
      //     price: price,
      //     quantity: 1
        
      //   })
      // }
    
      //   if (doc.exists) {
      //     console.log("Document data:", doc.data());
      //   } else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      //   }
      // });
        // if (cartItem.exists) {
        //   console.log("Document data:", typeof cartItem.doc.data());
        // } else {
        //   // doc.data() will be undefined in this case
        //   console.log("No such document!");
        // }
      // if (cartItem.exists) {
      //   console.log("Document data:", cartItem.data());
      // } else {
      //   // doc.data() will be undefined in this case
      //   console.log("No such document!");
      // }
      // console.log(cartItem)
    // })
        
    // const querySnapshot = await getDocs(collection(db, "shoppingCartItems"));
    //   querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   // console.log(doc.id, " => ", doc.data());
    //           if (doc.exists()) {
    //       console.log("Document data:", doc.data(), doc.id);
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log("No such document!");
    //     }
    // });

        }

    // setInput("");
    // setImageUrl("");


  return (
        <ProductItemContainer key={id}>
        <Title>{ title }</Title>
        <Price>${ price }</Price>
        <Rating> 
          {
            Array(Math.floor(rating))
            .fill()
            .map(rating => <StarIcon />)
          }
        </Rating>
        <ProductImage src={ image }></ProductImage>
        <AddToCartBtn onClick={addToCart}>Add To Cart</AddToCartBtn>
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