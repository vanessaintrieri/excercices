import { useGames } from "../Hooks/Customs";
import Row from "./Row/Row";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Games = () => {

    const { result: games, isLoading, error, mutate } = useGames({ includeCategory: true });
    const [isVisibile, setIsVisible] = useState(true);
    const [page, setPage] = useState("");

    useEffect(() => {
        switch (page) {
            case "new":
                setIsVisible(false);
                break;
            case "edit":
                setIsVisible(false);
                break;
            default:
                setIsVisible(true);
                break;
        }
    }, [page])

    if (error) {
        return (<div>Error: {error.message}</div>)
    }
    if (isLoading) {
        return (<div>Loading...</div>)
    }
    return (
        <>
            <h2 className="text-center py-3 m-0 bg-dark text-white">Catalogo giochi</h2>
            <div className="row ">
                <div className="col">
                    <Outlet context={{ setPage, mutate }}/>
                    
                <Link to="new" className={"btn btn-outline-secondary w-100 my-2 " + (!isVisibile ? "d-none" : "")} >
                   Aggiungi gioco   
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                </div>
            </div>
            <div className="row">
                    {games.map(e => {
                        return <Row key={e.id} data={e} mutateFn={mutate} />
                    })}
            </div>
        </>
    );
}

export default Games;