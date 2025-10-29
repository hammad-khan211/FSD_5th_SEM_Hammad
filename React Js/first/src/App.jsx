import React from 'react'
import Card from "./components/Card";
import Navbar from "./components/Navbar";


function App  (){
  return (
    <div>
      <Navbar/>
      <br />
      <center><h1>Our Menu</h1></center>

      <div id="container">
        <Card name="Pizza" price={1800}/>
      
      <Card name="Burgur" price={2000}/>
      
      <Card name="Coke" price={200}/>
      </div>
    </div>
  )
}

export default App;