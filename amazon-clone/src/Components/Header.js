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
            <UserOptionLineOne>Hello, Sign in</UserOptionLineOne> 
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
  background-color: #0F1111;
  align-items: center;
  color: white;
  font-size: 13px;
  button{
    display: none;
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