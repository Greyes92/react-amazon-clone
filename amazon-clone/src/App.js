import './App.css';
import Header from './Components/Header';
import ShoppingCart from './Components/ShoppingCart';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

    //this is a working fetch api search leave it off for now to not waste your free requests
    // fetch(`https://api.scaleserp.com/search?api_key=EB2A7054AF544850A25A012791ED3920&q=games&google_domain=google.com&location=United+States&gl=us&hl=en&search_type=shopping`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))      



  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
