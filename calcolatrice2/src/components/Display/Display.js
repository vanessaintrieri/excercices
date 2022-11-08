import { useState, useEffect } from "react";

const Display = ({value = "0",action = () => {}}) => {
    const [val, setValue] = useState(value);
    
    useEffect(() => {
        setValue(value)
    }, [value]);

    const handleChange = (e) => {
        setValue((prevValue) => {
            let numValue = "" + e.target.value;
            if(/([0-9.])$/.test(numValue)) {
                let returnValue = numValue.startsWith(0) ? numValue.substring(1, numValue.length) : numValue;
                action(returnValue);
                return returnValue;
            }
            else if(numValue === ""){
                action("0");
                return "0";
            }
            else {
                return prevValue;
            }
        });
    }

    return (
        <input type={"text"} className="form-control bg-secondary text-white" value={val} onChange={handleChange}/>
    );
}

export default Display;