import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer>
         <BackToTop>Back To Top</BackToTop>
         <FooterNav>
              <GetToKnowUsContainer>
                    <ul> 
                         <h3>Get To Know Us</h3>
                         <li>Careers</li>
                         <li>Amazon <br></br> Newsletter </li>
                         <li>About Amazon</li>
                         <li>Sustainability</li>
                         <li>Press Center</li>
                         <li>Investor Relations</li>
                         <li>Amazon Devices</li>
                         <li>Amazon Science</li>
                    </ul>
              </GetToKnowUsContainer>
              <FooterSpacer />
              <MakeMoneyWithUsContainer>
                    <ul> 
                         <h3>Make Money with Us</h3>
                         <li>Sell products on Amazon</li>
                         <li>Sell apps on Amazon</li>
                         <li>Supply to Amazon</li>
                         <li>Become an Affiliate</li>
                         <li>Become a Delivery Driver</li>
                         <li>Start a package delivery <br></br> business</li>
                         <li>Adverise Your Products</li>
                         <li>Self-Publish with Us</li>
                         <li>Host an Amazon Hub</li>
                         <li>See More Ways to<br></br> Money</li>
                    </ul>
              </MakeMoneyWithUsContainer>
              <FooterSpacer />
              <AmazonPaymentProductsContainer>
                    <ul> 
                         <h3>Amazon Payment Products</h3>
                         <li>Amazon Rewards Visa Signature <br/> Cards </li>
                         <li>Amazon Store Card</li>
                         <li>Amazon Secured Card</li>
                         <li>Amazon Business Card</li>
                         <li>Shop With Points</li>
                         <li>Credit Card Marketplace</li>
                         <li>Reload Your Balance</li>
                         <li>Amazon Currency Converter</li>
                    </ul>
              </AmazonPaymentProductsContainer>
              <FooterSpacer />
              <LetUsHelpYouContainer>
                    <ul> 
                         <h3>Let Us Help You</h3>
                         <li>Amazon and Covid-19</li>
                         <li>Your Account</li>
                         <li>Your Orders</li>
                         <li>Shipping Rates & <br/> Policies</li>
                         <li>Amazon Prime</li>
                         <li>Returns & <br/> Replacements</li>
                         <li>Manage Your <br/> Content and Devices</li>
                         <li>Amazon Assistant</li>
                         <li>Help</li>
                    </ul>
              </LetUsHelpYouContainer>
         </FooterNav>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`

`

const BackToTop = styled.div`
     padding-top: 15px;
     padding-bottom: 15px;
     height: 19px;
     width: 100%;
     background-color: #33485b;
     color: white;
     text-align: center;
     font-size: 13px;
`

const FooterNav = styled.div`
     display:flex;
     justify-content: center;
     flex-direction: row;
     height: 400px;
     width: 100%;
     background-color: #232f3e;
     align-items: center;
     color: white;
     font-size: 14px;
     padding-left: 44px;
     padding-right: 44px;
     li{
          color: #DDD;
          :hover{
               text-decoration: underline;
               cursor: pointer;
          }
     }

`

const GetToKnowUsContainer = styled.div`
     display: flex;
     margin-top: -60px;
     h3{
          padding-bottom: 7px;
     }
     ul{
          list-style: none;
          padding: 0;
     }
     li{
          padding: 5px;
     }
`
const MakeMoneyWithUsContainer =styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     h3{
          padding-bottom: 7px;
     }
     ul{
          list-style: none;
          padding: 0;
     }
     li{
          padding: 5px;
     }
`

const AmazonPaymentProductsContainer = styled.div`
     display: flex;
     margin-top: -70px;
     h3{
          padding-bottom: 7px;
     }
     ul{
          list-style: none;
          padding: 0;
     }
     li{
          padding: 5px;
     }
`

const LetUsHelpYouContainer = styled.div`
     display: flex;
     margin-top: -15px;
     h3{
          padding-bottom: 7px;
     }
     ul{
          list-style: none;
          padding: 0;
     }
     li{
          padding: 5px;
     }
`

const FooterSpacer = styled.div`
     height: 345px;
     width: 80px;
     padding-left: 10px;
     padding-right: 10px;
`