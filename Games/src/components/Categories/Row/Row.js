import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import {useDelete, CATEGORY_URL} from "../../Hooks/Customs";

const Row = ({data: {id=0, name="", alias="", games = []}, mutateFn}) => {

    const onDelete = useDelete(CATEGORY_URL, id);

    const onDeleteSuccess = () => {
        mutateFn();
    }

    const handleClick = () => {
        if(window.confirm("Sei sicuro di eliminare la categoria: " + name + " ?")) {
            onDelete(onDeleteSuccess);
        }
    }

    return (
        <tr>
            <td className="text-center">
                <Link to={"edit/"+ id} className="btn btn-outline-light border-0 border-bottom me-2">
                    <FontAwesomeIcon icon={faPen} />
                </Link>
                <button className="btn btn-outline-light border-0 border-bottom me-2" onClick={handleClick}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
            <td>
                {name}
            </td>
            <td>
                {alias}
            </td>
            <td>
                {games.length}
            </td>
        </tr>
    );
}

export default Row;