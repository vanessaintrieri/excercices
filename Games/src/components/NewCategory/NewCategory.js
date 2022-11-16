import FormCategory from "../FormCategory/FormCategory";
import { useEffect, useContext } from "react";
import { useOutletContext } from "react-router-dom";

const NewCategory = () => {
    const PageContext = useOutletContext();
    const {setPage} = useContext(PageContext);

    useEffect(() => {
        setPage("new")
    });

    return (
        <>
            <h4 className="text-white">Nuova categoria</h4>
            <FormCategory context={PageContext} />
        </>
    );
}

export default NewCategory;