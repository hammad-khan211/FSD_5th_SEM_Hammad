import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'

function Home(){
    
    return <h1>This is my Home Page</h1>
}

function About(){
    
    return <h1>This is my About Page</h1>
}



const Link1 = () => {
  return (
    <div>

        <nav>
            <Link to='/'>Home</Link><br />
            <Link to='/about'>About</Link>
        </nav>
              <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      
    </div>
  )
}

export default Link1
