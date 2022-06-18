import './App.css';
import Header from './Components/Header';
import ShoppingCart from './Components/ShoppingCart';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
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
