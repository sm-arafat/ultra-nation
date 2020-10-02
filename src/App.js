import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {

// to hold data which may vary time to time.
// useState রিটার্ন করে দুইটা জিনিস
// 1.	যে জিনিসটা আমার আছে,
// 2.	যে জিনিসটা আমার আপডেট করতে হবে.

const [countries, setCountries]= useState([]);
const [cart, setCart]= useState([]);


// To call the API.
// get response & convert to json.
// for multi line we use extra {}. 
// get the data & set the data.
// To catch error if the browser get crass.


useEffect (()=>{
  fetch('https://restcountries.eu/rest/v2/all')   
  .then(res=>res.json())
  .then(data=>setCountries(data))
  .catch(err=>console.log(err))
},[])



const handleAddCountry = (country) => {
  const newCart = [...cart, country];
  setCart(newCart);
  };


  return (
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <h3>Country Added : {cart.length}</h3>
      
      <Cart cart = {cart}></Cart>
      <ul>`
        {
        countries.map(country=> <Country country={country} handleAddCountry = {handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
