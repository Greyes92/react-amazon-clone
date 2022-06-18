import React from 'react';
import styled from 'styled-components';

function HomePage() {
  return (
    <HomeContainer>
      <Banner >

      </Banner>
      <Content>
        stuff
      </Content>
    </HomeContainer>
  )
}

export default HomePage;

const HomeContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;

`

const Banner = styled.div`
  background-image: url('https://m.media-amazon.com/images/I/71B1mwrQ4NL._SX3000_.jpg');
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba( 0, 0, 0, 1), rgba(0, 0, 0, 1), transparent);
`

const Content = styled.div`
  background-color: white;
  margin-top: -350px;
`