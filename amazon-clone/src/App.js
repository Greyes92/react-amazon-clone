import './App.css';
import Header from './Components/Header';
import ShoppingCartPage from './Components/ShoppingCartPage';
import HomePage from './HomePage';
import SearchResultsPage from './Components/SearchResultsPage'
import db from './db/Firebase'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Footer from './Components/Footer';


function App() {

    //this is a working fetch api search leave it off for now to not waste your free requests
    // fetch(`https://api.scaleserp.com/search?api_key=EB2A7054AF544850A25A012791ED3920&q=games&google_domain=google.com&location=United+States&gl=us&hl=en&search_type=shopping`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
  const [ loading, setLoading ] = useState(true);      
  const [ cartItems, setCartItems ] = useState([]);
  const [ results, setResults ] = useState([]);
  const [ searchQuery, setSearchQuery] = useState('');

  //pulls data dynamically from db to set the shopping cart items state 
  //with data that has been added to the shopping cart collection
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
        <Header cartItems={cartItems} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <NavBar />
        <Routes>
          <Route path='/loginpage' element={<Login />}/>
          <Route path='/searchresults' element={<SearchResultsPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} results={results} setResults={setResults}/>} />
          <Route path='/cart' element={<ShoppingCartPage cartItems={cartItems}/>} />
          <Route path='/' element={<HomePage searchQuery={searchQuery}/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
