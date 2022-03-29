import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import Buttons from './components/Buttons'
import Result from './components/Result'
import React from 'react'

function App() {
  const [text, setText] = React.useState('')
  const [words, setWords] = React.useState(0)
  const [char, setChar] = React.useState(0)
  const [mode, setMode] = React.useState('light')
  const toggleMode = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
    mode === 'light'
      ? (document.body.style.backgroundColor = '#121212')
      : (document.body.style.backgroundColor = 'white')
  }
  let changeText =(e) =>{
    let input=e.target.value;
    let countwords =input.split(" ");
    let countchar = input.split("");
    setText(input);
    let length = countwords.length;
    if(countwords.length === 1){
      if(countwords[0] === ""){
        length =0;
      }
    }
    setWords(length);
    setChar(countchar.length);
  }

  const tolc = () => {
    setText(text.toLowerCase());
    //console.log("editing to lower case")
  }

  const touc = () => {
    setText(text.toUpperCase());
    //console.log("editing to uppercase")
  }

  // clear the text
  const clearText = () =>{
    setText("");
    setWords(0);
    setChar(0);
  }
  return (
    <div className="container">
      <Header setMode={toggleMode} mode={mode} />
      <Input changeText={changeText} text={text} mode={mode} />
      <Buttons tolc={tolc} touc={touc} clearText={clearText} mode={mode}/>
      <Result words={words} chars={char} mode={mode}/>
      
    </div>
  )
}

export default App
