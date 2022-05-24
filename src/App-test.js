import React, { useState, useEffect, createRef } from 'react';
import paragraph from './utils/paragraph';
import './App.styles.scss';

function App() {
  const [wordToType, setPara] = useState({word: paragraph, color: 'red'})
  const {word, color} = wordToType
  // const [typedWord, setTypedWord] = useState('')
  // const [count, setCount] = useState(0);
    // const input = createRef()
    
  useEffect(()=>{
    async function fetchApi(){
      // const res = await fetch('https://api.quotable.io/random')
      const res = await fetch('http://localhost:3000/posts')
      // console.log(res)
      const resJson = await res.json()
      let newPara = await resJson[0].author
      console.log(newPara)
     newPara ? setPara(newPara) : setPara(paragraph)
   }
   fetchApi()
  }, [])
  // useEffect(()=>{
  //   console.log('how many times do I get fired.')
  // }, [])
  

  const handleChange = event=>{
    let {value} = event.target;
    let wordToCheck = word[0]
    let currentTypedWord = value.slice(0, -1)
    // setTypedWord(currentTypedWord)
      
      if(currentTypedWord === wordToCheck){
        //clearing input box
        event.target.value = ''
        //removing typed word
        // word.shift( )<----------------- this is the problem
        // setPara({})
      if(value.length > 1 ) setPara({...wordToType, word})
    }
    }
  const styles = {
    color,
    display: 'inline-block',
    fontSize: '24px',
    width: '300px'
  }
  const currentTextStyles = {
    color: 'steelblue',
    fontWeight: 'bold',
  }
  const normalStyles = {
    color: 'white',
  }
  const inputStyles = {
    fontSize: '20px',
    border: '.5px solid black',
    outline: 'none',
    height: '30px'
  }
  return (
    <div className="App">
     <h1>Type to learn</h1>
     {word}
      {/* <div className='paragraph' style={styles}>
      
      {
        word.map((w, i) => 
        {
          console.log(word)
        return <span key={i} style={i === 0 ? currentTextStyles : normalStyles}> {w + ' '}</span>})
        
      }
      </div> */}
      <br/><br/>
      <input 
      // ref={input}
      style={inputStyles}
      type="text" 
      onChange={(e) => handleChange(e)}
      />
     <div>
     
     </div>
    </div>
  )
}

export default App;
