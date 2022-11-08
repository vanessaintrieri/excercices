/*Creare una struttura HTML-CSS-Javascript come descritto:
- Un input di tipo text per acquisire una frase
- Un `div` contenitore
- Un bottone di invio
Al click sul bottone di invio il programma deve mostrare nel `div` il numero di
vocali (a, e, i, o, u) presenti nella frase inserita dall’utente.*/

import { useState } from 'react';
import '../css/style.scss';
import Container from './container/Container';
import Form from './form/Form';





function App() {
//creo variabili di stato
  const [stateInput, setInput]=useState('');
  const [stateResult, setResult]=useState('');

  //evento scatenante
  const getInput=(value)=>{
    return setInput(value);
  }


  const countVocals = () => {
  
    const COUNT_A = str => Array.from(str).filter(letter => "aA".includes(letter)).length;
    const COUNT_E = str => Array.from(str).filter(letter => "eE".includes(letter)).length;
    const COUNT_I = str => Array.from(str).filter(letter => "iI".includes(letter)).length;
    const COUNT_O = str => Array.from(str).filter(letter => "oO".includes(letter)).length;
    const COUNT_U = str => Array.from(str).filter(letter => "uU".includes(letter)).length;
    
    const COUNT_ALL = str => Array.from(str).filter(letter => "aAeEiIoOuU".includes(letter)).length;
  
    // let txtInput = document.getElementById("txtPhrase");
    // let string = txtInput.value;
  
    let value = "";
    value += "Conteggio A: " + COUNT_A(stateInput) ;
    value += "Conteggio E: " + COUNT_E(stateInput)  ;
    value += "Conteggio I: " + COUNT_I(stateInput) ;
    value += "Conteggio O: " + COUNT_O(stateInput) ;
    value += "Conteggio U: " + COUNT_U(stateInput) ;
    value += "Conteggio vocali:" + COUNT_ALL(stateInput);
    // let divContainer = document.getElementById("valContainer");
    // divContainer.innerHTML = value; 
   return value;
  };
 
  const getResult=()=>{
    return setResult(countVocals);
  }

  return (
    <div className="container">
      <Form action={getInput} change={getResult}/>
      
      <Container text={stateResult}/>
    </div>
    
  );
}

export default App;