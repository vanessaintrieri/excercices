import { useParams } from "react-router-dom";
import FormCategory from "../FormCategory/FormCategory";
import { useCategories } from "../Hooks/Customs";
import { useOutletContext } from "react-router-dom";
import { useEffect, useContext } from "react";

const EditCategory = () => {

    const PageContext = useOutletContext();
    const {setPage} = useContext(PageContext);
    const {id} = useParams();

    const {result: category, isLoading, error} = useCategories({id: id});

    useEffect(() => {
        setPage("edit")
    })

    if(error) {
        return <div>Error: {error.message}</div>
    }
    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
        <h4 className="text-white">Modifica categoria</h4>
        <FormCategory data={category} context={PageContext} />
        </>
    );
}

export default EditCategory;