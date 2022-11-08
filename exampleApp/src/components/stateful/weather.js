import { useEffect } from "react";
import { useState } from "react";

const GetTemperatureObjs = (temps = [0]) => {
  let sumTemps = 0;
  temps.forEach((t) => {
    sumTemps += t;
  });
  let avg = sumTemps / temps.length;
  return temps.map((temp) => {
    if (temp > avg) {
      return {
        colorVal: "red",
        value: temp,
      };
    } else {
      return {
        colorVal: "black",
        value: temp,
      };
    }
  });
};

//unico blocco di temperatura (un quadratino)
const Temperature = (props) => {
  return (
    <button
      className=" btn col border p-2 m-2 text-center"
      style={{ color: props.colorVal }}
      onClick={() => {
        props.action(props.id);
      }}
    >
      {props.value}°C
    </button>
  );
};

const Weather = ({ temperatures = [] }) => {
  //START-use state (definisce comp. di weather alla prima reinderizzazione)
  const [stateTemperatures, setTemperatures] = useState(() => {
    let initTemperatures = temperatures.map((temp) => {
      return temp;
    });
    return GetTemperatureObjs(initTemperatures);
  });

  const [stateAvgTemperature, setAvgTemperature] = useState(() => {
    let sumTemps = 0;
    temperatures.forEach(t => 
      sumTemps += t.value
    );
    let initAvgTemperatures = sumTemps / temperatures.lenght;
    return initAvgTemperatures;
  });

  //END-use state

  //START-useEffect
  useEffect(()=>{
    let sumTemps = 0;
    stateTemperatures.forEach(t => 
      sumTemps += t.value);
      setAvgTemperature(sumTemps/stateTemperatures.length);
  },stateTemperatures);

  //END-useEffect

  const incrementDegrees = () => {
    setTemperatures((prevTemperatures) => {
      let newTemperatures = prevTemperatures.map((temp) => {
        return temp.value + 1;
      });
      return GetTemperatureObjs(newTemperatures);
    });
  };

  //incremento una temperatura alla volta
  const incrementDegree = (id) => {
    setTemperatures((prevTemperatures) => {
      let newTemperatures = prevTemperatures.map((temp) => {
        return prevTemperatures.indexOf(temp) === id
          ? temp.value + 1
          : temp.value;
      });
      return GetTemperatureObjs(newTemperatures);
    });
  };

  return (
    <div className="container">
      <div className="row">
        {stateTemperatures.map((temp) => (
          <Temperature
            id={stateTemperatures.indexOf(temp)}
            key={"temp_" + stateTemperatures.indexOf(temp)}
            value={temp.value}
            colorVal={temp.colorVal}
            action={incrementDegree}
          ></Temperature>
        ))}
        <div className="col-12 text-center">
          <button className="btn btn-outline-info " onClick={incrementDegrees}>
            Aggiungi gradi
          </button>
        </div>
          <div className="col-12 text-center m-4">
           <div className=" p-2 bg-primary text-white">Temperatura media:{Math.floor(stateAvgTemperature)}°C</div>
          </div>
      </div>
    </div>
  );
};
export default Weather;
