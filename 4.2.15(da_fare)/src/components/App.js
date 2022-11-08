/*Creare una struttura HTML-CSS-Javascript come descritto:
- Un `div` di dimensioni 200x200px
Al click sul `div`, questo deve casualmente cambiare il suo background color in
uno dei seguenti colori: giallo, rosso, blu, verde, arancione, viola.*/

import { useState } from 'react';
import '../css/style.scss';
import Container from './container/Container';


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function applyRandomBg() {
  const [stateResult, setResult]=useState('');

  let randomNum = getRandomInt(1,7);

  let divContainer = document.getElementById("randomContainer")
  if (divContainer.hasAttribute("class")) {
      divContainer.removeAttribute("class");
  }
  
  switch (randomNum) {
      case 1:
          divContainer.setAttribute("class", "square-200 bg-primary")
          break;
      case 2:
          divContainer.setAttribute("class", "square-200 bg-warning")
          break;
      case 3:
          divContainer.setAttribute("class", "square-200 bg-success")
          break;
      case 4:
          divContainer.setAttribute("class", "square-200 bg-danger")
          break;
      case 5:
          divContainer.setAttribute("class", "square-200 bg-purple")
          break;
      case 6:
          divContainer.setAttribute("class", "square-200 bg-yellow")
          break;
  }


}

  return (
    <div className="container">
    
      <Container text={stateResult}/>
    </div>
    
  );


export default applyRandomBg;
