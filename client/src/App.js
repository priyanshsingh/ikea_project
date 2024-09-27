// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header.jsx';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Login from './components/Login';
// import Products from './components/Products';
// import ProductDetails from './components/ProductDetails';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import Admin from './components/Admin';
import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" exact element={Home} />
    //     <Route path="/about" element={About} />
    //     <Route path="/contact" element={Contact} />
    //     <Route path="/login" element={Login} />
    //     <Route path="/products" element={Products} />
    //     <Route path="/products/:id" element={ProductDetails} />
    //     <Route path="/cart" element={Cart} />
    //     <Route path="/checkout" element={Checkout} />
    //     <Route path="/admin" element={Admin} />
    //   </Routes>
    // </Router>
    <>
      <Login/>
      <Navbar/>
    </>
  );
}

export default App;
