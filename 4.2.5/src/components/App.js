/*Creare una struttura HTML-CSS-Javascript come descritto:
- Un `div` di dimensioni 200x200px
Al click sul `div`, questo deve casualmente cambiare il suo background color in
uno dei seguenti colori: giallo, rosso, blu, verde, arancione, viola.*/


import '../css/style.scss';
import Container from './container/Container';


function App() {
  return (
    <div className="container">
    
      <Container />
    </div>
    
  );

}

export default App;

