import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Banner from './Components/Banner';
import ProductItem from './Components/ProductItem';
import db from './db/Firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';


function HomePage() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);

//From API fetch request


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.scaleserp.com/search?api_key=EB2A7054AF544850A25A012791ED3920&q=clothes&google_domain=google.com&location=United+States&gl=us&hl=en&search_type=shopping&num=10')
      const json = await data.json();
      // console.log(json.shopping_results.id)
      return setProducts(json.shopping_results), setLoading(false)
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
