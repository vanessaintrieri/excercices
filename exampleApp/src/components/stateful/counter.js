import {useState} from 'react';
import { useEffect } from 'react';
const Counter = () => {

    const [count, setCounter] = useState(0);
    useEffect(()=>{
        document.title="Cliccato "+ count+ " volte";
    })

    return (
    
    <div className="Counter">
    <h1>Cliccato: {count} volte</h1>
    <button className="btn btn-success" onClick={() => setCounter(count + 1)}>Incrementa</button>
    </div>
    
    );
    
    };
export default Counter;