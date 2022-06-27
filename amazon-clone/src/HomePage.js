import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Banner from './Components/Banner';
import ProductItem from './Components/ProductItem';
// import db from './db/Firebase';
// import { collection, onSnapshot, query } from 'firebase/firestore';


function HomePage() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);

//From API fetch request
  useEffect(() => {
    console.log('i fired once')
    const fetchData = async () => {
      const data = await fetch('https://api.scaleserp.com/search?api_key=EB2A7054AF544850A25A012791ED3920&q=trending+items&shopping_condition=new&google_domain=google.com&location=United+States&gl=us&hl=en&search_type=shopping&sort_by=review_score&num=20')
      const json = await data.json();
      // console.log(json.shopping_results.id)
      return setProducts(json.shopping_results) & setLoading(false)
    }
    fetchData()
    .catch(console.error)
  }, [])


  
  // useEffect(() => {
  //      setLoading(false)
  //      const q = query(collection(db, 'products'));
  //      onSnapshot(q, (snapshot) =>
  //        setProducts(snapshot.docs.map((doc) => (
  //           { 
  //             id: doc.id, 
  //             data: doc.data()
  //           })))
  //         );
  // }, []);

  if(loading === true){
    console.log('loading')
    
    return( 
      <HomeContainer>
        <Banner />
        <LoadingMessage>
          <img src={'https://media0.giphy.com/media/hW9umw9Iu17ODEEfCQ/200w.gif?cid=82a1493bhyg2zh0qb9ri9ds52ydl39prgmsf89mx682hw0sl&rid=200w.gif&ct=s'} />
        </LoadingMessage>
      </HomeContainer>
    )

  } else {

  return (
    <HomeContainer>
      <Banner />

      <Content>
      {/* FOR API USE */}
        {products.map((products) => (
          
          <ProductItem 
          id={products.id}
          title={products.title} 
          price={products.price} 
          rating={products.rating} 
          image={products.image}
          />
        ))}
        {/* {products.map((products) => (
          <ProductItem 
          id={products.id}
          title={products.data.name} 
          price={products.data.price} 
          rating={products.data.rating} 
          image={products.data.image}
          />
        ))} */}
        
      </Content>
    </HomeContainer>
  )
}
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
  margin-bottom: 25px;
`
const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -500px;
  margin-bottom: 150px;
  
  img{
    height: 300px;
    z-index: 100;
  }
`
