import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useSubmit, CATEGORY_URL } from "../Hooks/Customs";

const FormCategory = ({ data: { id = 0, name = "", alias = "" } = {}, context}) => {

    const [inputValues, setInputValues] = useState({
        name: name,
        alias: alias
    });

    const onSubmit = useSubmit(CATEGORY_URL, id);
    const navigate = useNavigate();
    const [validated, setValidated] = useState(true);
    const {setPage, mutate} = useContext(context);

    useEffect(() => {
        setInputValues({
            name: name,
            alias: alias
        });
    }, [name, alias]);

    const onSubmitSuccess = () => {
        navigate("/categories", { replace: true });
        setPage("");
        mutate();
    }

    const handleChange = (e) => {
        setInputValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            if (id > 0) {
                onSubmit(e, inputValues, onSubmitSuccess);
            } else {
                const newCategory = {
                    name: inputValues.name,
                    alias: inputValues.alias
                }
                onSubmit(e, newCategory, onSubmitSuccess);
            }
        }
        setValidated(true);
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <Form.Group controlId="txtName">
                        <FloatingLabel controlId="txtName" label="Nome" className="mb-3">
                            <Form.Control name="name" value={inputValues.name} onChange={handleChange} placeholder="Nome" required />
                        </FloatingLabel>
                    </Form.Group>
                </div>
                <div className="col-md-6">
                    <Form.Group controlId="txtAlias">
                        <FloatingLabel controlId="txtAlias" label="Alias" className="mb-3">
                            <Form.Control name="alias" value={inputValues.alias} onChange={handleChange} placeholder="Alias" required />
                        </FloatingLabel>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button type={"submit"} className="btn me-3 mb-3 btn-success">Salva</button>
                    <Link to="/categories" className="btn mb-3 btn-info" onClick={() => { setPage("") }}>Annulla</Link>
                </div>
            </div>
        </Form>
    );
}

export default FormCategory;