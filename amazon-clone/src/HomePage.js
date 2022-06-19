import React from 'react';
import styled from 'styled-components';
import Banner from './Components/Banner';
import ProductItem from './Components/ProductItem';

function HomePage() {
  return (
    <HomeContainer>
      <Banner />

      <Content>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Content>
    </HomeContainer>
  )
}

export default HomePage;

const HomeContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  flex-grow: 1;

`

const Content = styled.div`
  margin-top: -550px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 100px;
  display: flex;
  flex-wrap: wrap;
`