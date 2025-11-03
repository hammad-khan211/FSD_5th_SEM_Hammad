import React from 'react'
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Usestate from "./components/Usestate";


function App  (){
  return (
    <div>
      {/* <Navbar/>
      <br />
      <center><h1>Our Menu</h1></center>

      <div id="container">
        <Card src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" name="Pizza" price={1800}/>
      
      <Card src="https://images.squarespace-cdn.com/content/v1/670ded352076ec49dde54c02/1728965942155-XUX1IGH7B2FLEY21TJ7S/nobg.png" name="Burgur" price={2000}/>
      
      <Card src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/uvxaliwhse0xduvnqkcw" name="Coke" price={200}/>
      </div> */}
      <Usestate></Usestate>
    </div>
  )
}

export default App;