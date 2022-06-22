import React from 'react'
import styled from 'styled-components'
import { auth, provider } from "../db/Firebase"
import { signInWithPopup } from 'firebase/auth';

function Login() {

     // const authenticate = () => {
     //      //sign in
     //      signInWithPopup(auth, provider)
     //      .then((result) => {
     //           dispatch({
     //                type: actionTypes.SET_USER,
     //                user: result.user,
     //           })
     //           console.log(result.user);
     //      })
     //      .catch((error) => {
     //           alert(error.message)});
     // }

  return (
    <Container>
          <Content>
               <AmazonLogo 
               src='https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png'
               />
               <h1>Sign in</h1>
               <LoginBtn>
                    sign in
               </LoginBtn>
          </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div`
     padding-top: 40px;
     width: 100%;
     height: 65vh;
     background-color: #f8f8f8;
     display: flex;
     justify-content: center;
     box-shadow: 0px 3px 5px 0 rgb(0 0 0 / 13%);
`

const Content = styled.div`
     background-color: white;
     padding: 25px;
     border-radius: 5px;
     height: 300px;
     width: 400px;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;
     box-shadow: 0 1px 3px lightgray;
`

const AmazonLogo = styled.img`
     height: 45px;
     width: 165px;
     margin-bottom: 40px;
`

const LoginBtn = styled.button`
     height: 30px;
     width: 250px;
     border-radius: 5px;
     background: #f0c14b;
     border-color: #a88734 #9c7e31 #846a29;
     background: rgb(240,193,75);
     background: linear-gradient(0deg, rgba(240,193,75,1) 0%, rgba(240,193,75,1) 53%, rgba(255,226,155,1) 99%);
     display: flex;
     justify-content: center;
     align-items: center;
     border: 1px solid #a88734 #9c7e31 #846a29;
`