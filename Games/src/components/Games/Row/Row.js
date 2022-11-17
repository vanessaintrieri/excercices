import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDelete, GAMES_URL } from "../../Hooks/Customs";
import "./Row.scss"

const Row = ({ data: { id = 0, name = "", publisher = "", imageUrl = "", category = { id: 0, name: "", alias: "" } }, mutateFn = () => { } }) => {

    const performDelete = useDelete(GAMES_URL, id);

    const onDeleteComplete = () => {
        mutateFn();
    }

    const handleClick = () => {
        if (window.confirm("Sei sicuro di voler eliminare il gioco: " + name + " " + " ?")) {
            performDelete(onDeleteComplete);
        }
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-2 ">
            <div className="btn-delete">
                <button onClick={handleClick} className="btn btn-dark border-0 border-bottom me-2">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
            <Link to={"edit/" + id} className=" text-dark text-decoration-none">
                <div className="container-fluid border-dark py-2 my-2 my-md-0 bg-white v-card">
                    <div className="row">
                        <div className="col-12 mb-3 text-center">
                            <div className="v-card_img">
                              <img src={imageUrl} alt="Copertina" />
                            </div>                         
                        </div>
                        <div className="col-12 ">
                            <div className="row text-md-center">
                                <div className="col-12">
                                    <h5>{name}</h5>
                                </div>
                                <div className="col-12">
                                    {publisher}
                                </div>
                                <div className="col-12">
                                    {category.alias}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
}

export default Row;