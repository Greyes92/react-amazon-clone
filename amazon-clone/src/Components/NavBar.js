import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <NavBarContainer>

             <div>Best Sellers</div>
             <div>Amazon Basics</div>
             <div>New Releases</div>
             <div>Customer Service</div>
             <div>Today's Deals</div>
             <div>Prime</div>
             <div>Music</div>
             <div>Books</div>
             <div>Handmade</div>
             <div>Amazon Home</div>
             <div>Fashion</div>
             <div>Registry</div>
             <div className='primeday'>Prime Day is July 12 & 13</div>
          
    </NavBarContainer>
  )
}

export default NavBar;

const NavBarContainer = styled.div`
  display:flex;
  flex-direction: row;
  height:39px;
  width: 100%;
  background-color: #232f3e;
  align-items: center;
  color: white;
  font-size: 14px;
  justify-content: space-around;
     div{
          padding: 10px;
     }
     div:hover{
          border: 1px solid white;
     }
     .primeday {
          font-weight: bold;
          padding-right: 12px;
          padding-left: 12px;
     }
`
