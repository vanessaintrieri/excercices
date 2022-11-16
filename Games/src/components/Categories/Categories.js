import { useState, useEffect, createContext } from "react";
import { Table } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useCategories } from "../Hooks/Customs";
import Row from "./Row/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {

    const { result: categories, isLoading, error, mutate } = useCategories({includeGames: true});
    const [isVisible, setIsVisible] = useState(true);
    const [page, setPage] = useState("");
    const PageContext = createContext();

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
        }
    }, [page])
    
    if (error) {
        return <div>Error: {error.message}</div>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <PageContext.Provider value={{setPage, mutate}}>
            <h2 className="text-center py-3 text-white">Categorie</h2>
            <div className="row">
                <div className="col">
                    <Outlet context={PageContext}/>
                    <Link to="new" className={"btn btn-outline-secondary w-100 my-2 " + (!isVisible ? "d-none" : "")}>
                        Aggiungi categoria 
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Table responsive className="text-nowrap" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nome</th>
                                <th>Alias</th>
                                <th>Nr Giochi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(c => <Row key={c.id} data={c} mutateFn={mutate} />)}
                        </tbody>
                    </Table>
                </div>
            </div>
        </PageContext.Provider>
    );
}

export default Categories;