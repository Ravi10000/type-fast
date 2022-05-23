import React, { useState, useEffect } from 'react';
import paragraph from './utils/paragraph';
import './App.styles.scss';

function App() {
  const [wordToType, setPara] = useState({word: paragraph.split(' '), color: 'red'})
  const {word, color} = wordToType
  // const [typedWord, setTypedWord] = useState('')
  // const [count, setCount] = useState(0);
  useEffect(()=>{
    async function fetchApi(){
      const res = await fetch('https://api.quotable.io/random');
      const resJson = await res.json()
      console.log(resJson.content.split(' '))
      // setPara(resJson.content.split(' '))
   }
   fetchApi()
  }, [])
  

  const handleChange = event=>{
    let {value} = event.target;
    let wordToCheck = word[0]
    let currentTypedWord = value.slice(0, -1)
    // setTypedWord(currentTypedWord)
      
      if(currentTypedWord === wordToCheck){
        //clearing input box
        event.target.value = ''
        //removing typed word
        word.shift()
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
    color: 'black',
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
      <div className='paragraph' style={styles}>
      
      {
        word.map((w, i) => <span style={i === 0 ? currentTextStyles : normalStyles}> {w + ' '}</span>)
      }
      </div>
      <br/><br/>
      <input 
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
