import { useState } from "react";

const useData = (url) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json()) //trasforma risposta in json
      .then((json) => {
        if (!ignore) {
          setResult(json);  //if eseguito dopo use effect
        }
      });

    return () => { //use effect (ignoro tutte le chiamate finchè ignore è false poi ritorno risultati)
      ignore = true;
    };
  }, [url]);

  return result;
};

const DefaultComp=()=>{
    const[inputValue, setInputValue]= useState("ciao");
    const{searchResult}= useData("https://example.com?search="+ inputValue);
    
}