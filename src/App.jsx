import { useState } from 'react'
import Billy from './assets/Billy.png'
import van from './assets/van.png'
import HH from './assets/HH.png'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [answer, setAnswer] = useState ("")
  const [pluseggs, setPluseggs] = useState (2)
   function adcount () {
     
    setCount( (prevvalue) =>{
      console.log(prevvalue + 1)
      return prevvalue + 1
    })
   }
   function secret () {
    setAnswer ("collegeboy")
    
   } 
   function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
   function balls () {
    setPluseggs( (prevvalue) =>{
      const randomnum = getRandomInt(2)
      console.log(randomnum)

      if (randomnum === 1) {
      console.log(prevvalue + 2)
      return prevvalue + 2
      }

      else {
      console.log(prevvalue - 2)
      return prevvalue - 2  }
    })
   }

     return (
   
     <>
       <div>
         <a href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Van_Darkholme_1.JPG" target="_blank">
          <img src={van} className="logo vite" alt="Vite logo" />
         </a>
          <a href="https://en.wikipedia.org/wiki/Billy_Herrington" target="_blank">
           <img src={Billy} className="logo react" alt="React logo" />
          </a>
        </div>
      <h1>Billy or Van</h1>
       <h2>
        how much of a dick you had today?
       </h2>
       <div>
       {answer}
       </div>
       <button onClick={secret}>
       try if you dare 
        </button>
         <button onClick={adcount}>
          Dicks count {count}
          </button>
           <button onClick={balls}>
            +2 or -2 = {pluseggs}
          </button>
           
       </>
    )
}

export default App
