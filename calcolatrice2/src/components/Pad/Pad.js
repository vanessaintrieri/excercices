import { useState, useEffect } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import Buttons from "./buttons.json";



const Pad = () => {
    const [valueA, setValueA] = useState("0");
    const [valueB, setValueB] = useState("0");
    const [displayValue, setDisplayValue] = useState("0");
    const [operation, setOperation] = useState("");

    useEffect(() => {
        if (operation === "") {
            setValueA(displayValue);
        }
        else if (operation !== "=") {
            setValueB(displayValue);
        }
    }, [displayValue]);

    const changeDisplay = (num = "0") => { //numero che sto cliccando
        setDisplayValue((prevValue) => {
            if (prevValue.indexOf(".") != -1 && num === ".") { //se passo due punti restituisco input così com'è
                return prevValue;
            }
            else {
                let newNum = prevValue + num;
                //se numero parte con zero, restituisco sottostringa che parte da indice 1 (tolgo lo 0 iniziale)
                return newNum.startsWith("0") ? newNum.substring(1, newNum.length) : newNum;

            }
        });
    }

    const handleDisplayChanges = (val = "") => {
        setDisplayValue(val);
    }

    const doOperation = (operation) => {
        setOperation((prevOperation) => {
            switch (operation) {
                case "C":
                    setDisplayValue("0");
                    return "";
                case "=":
                    setValueB("0");
                    setValueA("0");
                    setDisplayValue(eval(valueA + prevOperation + valueB));
                    return "";
                case "%":
                    setDisplayValue(valueB !== "0" ? eval(valueB + "/100") : eval(valueA + "/100"))
                    return "";
                case "+/-":
                    setDisplayValue(valueB !== "0" ? eval("0-(" + valueB + ")") : eval("0-(" + valueA + ")"));
                    return prevOperation;
                default:
                    if (prevOperation === "") {
                        setDisplayValue("0")
                    }
                    return operation;
            }
        })
    }
    return (
        <div className="container w-25 mt-5">
            <div className="row">
                <div className="col px-0">
                    <Display value={displayValue} action={handleDisplayChanges} />
                </div>
            </div>
            <div className="row">
                {Buttons.map((btn) => {
                    return <Button key={btn.order} action={btn.isOperation ? doOperation : changeDisplay} data={btn} />
                })}
            </div>
        </div>
    );
}

export default Pad;