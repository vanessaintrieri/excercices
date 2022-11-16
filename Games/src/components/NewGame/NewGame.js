import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import FormGame from "../FormGame/FormGame";

const NewGame = () => {
    const {setPage, mutate} = useOutletContext();

    useEffect(() => {
        setPage("new");
    });
    
    return (
        <>
            <h2 className="text-center">Nuovo gioco</h2>
            <FormGame mutateFn={mutate} resetFn={setPage} />
        </>
    );
}

export default NewGame;