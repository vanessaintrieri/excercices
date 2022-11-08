import LoremJson from "./lorem.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Viewer from "./Viewer";
import { useState } from "react";

const Generator= ()=>{
    const [stateInputValue, setInputValue]=useState(0);
    const [stateType, setType]=useState("");
    const [stateText, setText]=useState("");


    const changeType=(e, type)=>{
        if(e.target.checked){
            setType(type);
        }
    }

    const generateText=()=>{
        if(stateType==="Words"){
            let splitText = LoremJson.text.split(' ');
            let value =' ';
            for (let i=0;i<stateInputValue;i++){
                value += splitText[i]+ '';
            }
        }
    }

    return(
        <Container>
            <Row>
                <Col xs={3}>
                    <input type={"number"} min="1" onChange={(e)=>{setInputValue(e.target.value)}}></input>
                    
                </Col>
                <Col xs={3}>
                    <div>
                        <input type={"radio"} name="radio" id="radioLists" onClick ={(e)=>{changeType(e, "Lists")}}></input>
                        <label htmlFor="radioLists">Lists</label>
                    </div>
                    <div>
                        <input type={"radio"} name ="radio"id="radioWords" onClick ={(e)=>{changeType(e, "Words")}}></input>
                        <label htmlFor="radioWords">Words</label>
                    </div>
                </Col>
                <Col xs={6}>
                    <button className="btn btn-outline-primary"> Genera</button>
                </Col>
            </Row>
            <Row>
                <Col>
                <Viewer text="Hello world"></Viewer>
                </Col>
            </Row>
        </Container>
    );
}
export default Generator;