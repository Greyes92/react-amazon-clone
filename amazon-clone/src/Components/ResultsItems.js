import React from 'react'
import styled from 'styled-components';
import ResultsCartItem from './ResultsCartItem';

function ResultsItems({ results }) {
     // console.log(results)
  return (
    <Container>
          <Title>RESULTS</Title>

          <ResultsItemsContainer>
              {
                   results.map((item) => (
                     <ResultsCartItem
                     id={item.id}
                     title={item.title} 
                     price={item.price} 
                     rating={item.rating} 
                     image={item.image}
                     >
                     </ResultsCartItem>
                   ))
              }
               
         </ResultsItemsContainer>
    </Container>
  )
}

export default ResultsItems;

const Container = styled.div`
     display: flex;
     flex: 0.85;
     padding: 20px;
     padding-bottom: 30px;
     flex-direction: column;

`

const Title = styled.h1`
     display: flex;
     font-weight: normal;
     font-size: 25px;
`
// const PriceTitle = styled.h5`
//      font-size: 15px;
//      color: #565959;
//      font-weight: normal;
//      display: flex;
//      justify-content: right;
// `


const ResultsItemsContainer = styled.div`

`