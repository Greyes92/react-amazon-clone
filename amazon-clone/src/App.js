import './App.css';
import Header from './Components/Header';
import ShoppingCartPage from './Components/ShoppingCartPage';
import HomePage from './HomePage';
import SearchResultsPage from './Components/SearchResultsPage'
import db from './db/Firebase'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';


function App() {

    //this is a working fetch api search leave it off for now to not waste your free requests
    // fetch(`https://api.scaleserp.com/search?api_key=EB2A7054AF544850A25A012791ED3920&q=games&google_domain=google.com&location=United+States&gl=us&hl=en&search_type=shopping`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
  const [ loading, setLoading ] = useState(true);      
  const [ cartItems, setCartItems ] = useState([]);

  useEffect(() => {
    setLoading(false)
    const q = query(collection(db, 'shoppingCartItems'));
    onSnapshot(q, (snapshot) =>
      setCartItems(snapshot.docs.map((doc) => (
         { 
           id: doc.id, 
           data: doc.data()
         })))
       );
}, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartItems={cartItems}/>

        <Routes>
          <Route path='/searchresults' element={<SearchResultsPage />}></Route>
          <Route path='/cart' element={<ShoppingCartPage cartItems={cartItems}/>} />
          <Route path='/' element={<HomePage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
