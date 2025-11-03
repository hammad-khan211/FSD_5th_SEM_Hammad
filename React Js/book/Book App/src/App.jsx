import React from 'react'
import Book from "../Component/Book";
import Navbar from "../Component/Navbar"
function App(){
  return(
    <div><Navbar/>
    <div className="bookcon">
      <Book src="https://media.istockphoto.com/id/1044168372/vector/mathematics.jpg?s=612x612&w=0&k=20&c=02J5s_9nIBV_T4B7ng_6qo2wMfZQne-w8xNHm8XSzqo=" name="Maths" price="250" />
       <Book src="https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=" name="English" price="350" />
       <Book src="https://media.istockphoto.com/id/1092170968/vector/open-book-with-history-doodles-and-lettering.jpg?s=612x612&w=0&k=20&c=SvXn0O25eHC8ARjwlcn83kahxjMGl2ti_DDFGozBKqg=" name="History" price="100" />
       <Book src="https://img.freepik.com/premium-vector/book-science-with-planets-astronaut_1308-3169.jpg" name="Science" price="250" />
    
      
    </div>
    </div>
  )
}

export default App;