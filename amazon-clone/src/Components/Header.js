import React from 'react';
import styled from 'styled-components';
import { Search }  from  '@styled-icons/boxicons-regular/Search';
import{ Map }  from '@styled-icons/boxicons-regular/Map';
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import ResultsItems from './ResultsItems';
// import { useState } from 'react';



function Header({ cartItems, searchQuery, setSearchQuery }) {

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    // setSearchQuery(e.target.value); original
    setSearchQuery(e.target[0].value);
    // setSearchQuery(e.target.parentElement.parentNode.parentNode[0].value);
  }

  const handleClick = (e) => {
    setSearchQuery(e.target.parentElement.parentNode.parentNode[0].value);
  }

  // const handleSubmit = event => {
  //   // 👇️ prevent page refresh
  //   event.preventDefault();
  //   console.log('form submitted ✅');
  // };

  // const handleInput = (e) => {
  //   e.preventDefault();
  //   // setSearchQuery('');
  //   // console.log(e)
  //   console.log(e.target.parentElement.parentNode.parentNode[0].value)
  // }

  const getCartCount = () => {
    let cartItemCount = 0;
    
    cartItems.forEach((item) => {
      cartItemCount += item.data.quantity
      
    })
      return cartItemCount;
  }
  // setInput("");
  // setImageUrl("");
  return (
    <div>
      <HeaderContainer>
        <Link to='/'>
          <HeaderLogo>
            <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
          </HeaderLogo>
        </Link>

         <MapIcon />
         <HeaderSelectAddress>
           <HeaderAddressLineOne>Hello,</HeaderAddressLineOne>
           <HeaderAddressLineTwo> Select your address</HeaderAddressLineTwo>
         </HeaderSelectAddress>

         <HeaderSearchContainer onSubmit={(handleChange)}>
           <HeaderSelect>
             <option selected='selected'>All Departments</option>
             <option value="">Alexa Skills</option>
             <option value="">Amazon Devices</option>
             <option value="">Amazon Explore</option>
             <option value="">Amazon Pharmacy</option>
             <option value="">Amazon Warehouse</option>
             <option value="">Appliances</option>
             <option value="">Apps & Games</option>
             <option value="">Arts, Crafts & Sewing</option>
             <option value="">Audible Books & Originals</option>
             <option value="">Automotive Parts & Accessories</option>
             <option value="">AWS Courses</option>
             <option value="">Baby</option>
             <option value="">Beauty & Personal Care</option>
             <option value="">Books</option>
             <option value="">CDs & Vinyl</option>
             <option value="">Cell Phones & Accessories</option>
             <option value="">Clothing, Shoes & Jewelry</option>
             <option value="">Women</option>
             <option value="">Men</option>
             <option value="">Girls</option>
             <option value="">Boys</option>
             <option value="">Baby</option>
             <option value="">Collectibles & Fine Art</option>
             <option value="">Computers</option>
             <option value="">Credit and Payment Cards</option>
             <option value="">Digital Educational Resources</option>
             <option value="">Digital Music</option>
             <option value="">Electronics</option>
             <option value="">Garden & Outdoor</option>
             <option value="">Gift Cards</option>
             <option value="">Grocery & Gourmet Foods</option>
             <option value="">Handmade</option>
             <option value="">Health, Houshold & Baby Care</option>
             <option value="">Home & Business Services</option>
             <option value="">Home & Kitchen</option>
             <option value="">Industrial & Scientific</option>
             <option value="">Just for Prime</option>
             <option value="">Kindle Store</option>
             <option value="">Luggage & Travel Gear</option>
             <option value="">Luxury Stores</option>
             <option value="">Magazine Subscription</option>
             <option value="">Movies & TV</option>
             <option value="">Musical Instruments</option>
             <option value="">Office Products</option>
             <option value="">Pet Supplies</option>
             <option value="">Premium Beauty</option>
             <option value="">Prime Video</option>
             <option value="">Smart Home</option>
             <option value="">Software</option>
             <option value="">Sports & Outdoors</option>
             <option value="">Subscribe & Save</option>
             <option value="">Subscription Boxes</option>
             <option value="">Tools & Home Improvement</option>
             <option value="">Toys & Games</option>
             <option value="">Under $10</option>
             <option value="">Video Games</option>
             <option value="">Whole Foods Market</option>
           </HeaderSelect>
           <HeaderSearchInput 
            type='text'
            // onClick={handleChange}
            // onChange={handleChange}
            // value={searchQuery}
           />
            <button type='submit' > hidden submit</button>
           <SearchIconContainer >
           <Link to='/searchresults'>
              <SearchIcon type='submit' onClick={handleClick}/> 
            </Link> 
           </SearchIconContainer>
         </HeaderSearchContainer>
         <HeaderUserOptionsContainer>
           <Link to='/loginpage'>
            <UserOptionLineOne>Hello, Sign in</UserOptionLineOne>
           </Link>
            <UserOptionLineTwo>Accounts & Lists</UserOptionLineTwo>
         </HeaderUserOptionsContainer>

         <HeaderUserOptionsContainer>
            <UserOptionLineOne>Returns</UserOptionLineOne>
            <UserOptionLineTwo>& Orders</UserOptionLineTwo>
         </HeaderUserOptionsContainer>

         <Link to='/cart'>
          <HeaderShoppingCartContainer>
              <ShoppingCartIcon />
              <CartCounterContainer>
                <CartItemCounter>{getCartCount()}</CartItemCounter>
                <UserOptionLineTwo>Cart</UserOptionLineTwo>
              </CartCounterContainer>
          </HeaderShoppingCartContainer>
         </Link>

      </HeaderContainer>
    </div>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  height:60px;
  width: 100%;
  background-color: #111922;
  align-items: center;
  color: white;
  font-size: 13px;
  button{
    display: none;
  }
  a{
    color: white;
    text-decoration: none;
  }

`

const HeaderLogo = styled.div`
  img{
    width: 75%;
    height: 36px;
    padding: 14px 10px 5px 15px;
    margin: 1px;
      :hover{
        border: 1px solid white;
        margin: 0;
      }
  }

`
const HeaderSelectAddress = styled.div`
padding-right: 15px;
:hover{
  border: 1px solid white;
}
`
const HeaderAddressLineOne = styled.div`
  color: grey;
`
const HeaderAddressLineTwo = styled.div`
  color:white;
  font-weight: bold;
  font-size: 14px;
`
const HeaderSearchContainer = styled.form`
  display:flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  border: 0;
  flex: 1;
  width: 100%;
  overflow: hidden;
  background-color: white;
  padding: 0;
  :focus-within{
    box-shadow: 0 0 0px 4px orange;
  }

`

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  font-size: 17px;
  border: 0;
  padding: 0;
  z-index: 100;
  :focus {
    outline: none;
  }
`

const SearchIconContainer = styled.div`
  background-color: #FEBD69;
  width: 45px;
  border-radius: 0px 4px 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  height: 40px;
`

const SearchIcon = styled(Search)`
  color: black;
  height: 20px;
  svg{
    height: 20px;
    width: 20px;
  }
`

const MapIcon = styled(Map)`
  height: 21px;
  margin-bottom: 0px;
  margin-top: 11px;
`
const HeaderUserOptionsContainer = styled.div`
  padding: 15px;
  :hover {
    border: 1px solid white;
  }

`
const UserOptionLineOne = styled.div`

`
const UserOptionLineTwo = styled.div`
  font-weight: bold;
  font-size: 14px;
`

const HeaderShoppingCartContainer = styled.div`
display: flex;
color: white;
:hover{
  border: 1px solid white;
  margin: 0;
  padding: 0;
}

svg{
  color: white;
}
`
const ShoppingCartIcon = styled(AddShoppingCart)`
  height: 40px;
`

const CartCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-right: 25px; */
  margin-right: 25px;
`

const CartItemCounter = styled.div`
  text-align: center;
  font-size: 18px;
  color: orange;
  font-weight: bold;
`

const HeaderSelect = styled.select`
  width: 50px;
  border: none;
  padding-left: 12px;
  color: #0f1111;
  border-right: 1px solid lightgray;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
  font-size: 12px;
  :hover{
    cursor: pointer;
  }
  option {
    font-weight: normal;
    display: flex;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    justify-content: flex-start;
    :hover{
      cursor: pointer;
    }
}
`