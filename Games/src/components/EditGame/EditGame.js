import { useOutletContext, useParams } from "react-router-dom";
import {useGames} from "../Hooks/Customs";
import FormGame from "../FormGame/FormGame";
import { useEffect } from "react";


const EditGame = () => {

    const { id } = useParams();
    const {result: employee, isLoading, error} = useGames({id: id});
    const {setPage, mutate} = useOutletContext();

    useEffect(() => {
        setPage("edit");
    })
    
    if(error) {
        return <div>Error: {error.message}</div>
    }
    if(isLoading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <h2 className="text-center">Modifica gioco</h2>
            <FormGame data={employee} mutateFn={mutate} resetFn={setPage} />
        </>
    );
}


export default EditGame;