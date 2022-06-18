import React from 'react';
import './Header.css';
import styled from 'styled-components';
import { Search }  from  '@styled-icons/boxicons-regular/Search';
import{ Map }  from '@styled-icons/boxicons-regular/Map';
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart';
import { Link } from 'react-router-dom';



function Header() {

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

         <HeaderSearchContainer>
           <HeaderSearchInput type='input'/>
           <SearchIconContainer>
              <SearchIcon />
           </SearchIconContainer>
         </HeaderSearchContainer>

         <HeaderUserOptionsContainer>
            <UserOptionLineOne>Hello, Gibran</UserOptionLineOne> 
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
                <CartCounter>0</CartCounter>
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
  height:65px;
  width: 100%;
  background-color: #0F1111;
  align-items: center;
  color: white;
  font-size: 13px;

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
`
const HeaderAddressLineOne = styled.div`
  color: grey;
`
const HeaderAddressLineTwo = styled.div`
  color:white;
  font-weight: bold;
  font-size: 14px;
`
const HeaderSearchContainer = styled.div`
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
  font-size: 15px;
  border: 0;
  padding: 0;
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
`

const SearchIcon = styled(Search)`
  color: black;
  height: 20px;
`

const MapIcon = styled(Map)`
  height: 21px;
  margin-bottom: 0px;
  margin-top: 11px;
`
const HeaderUserOptionsContainer = styled.div`
  padding: 15px;

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

const CartCounter = styled.div`
  text-align: center;
  font-size: 18px;
  color: orange;
  font-weight: bold;
`