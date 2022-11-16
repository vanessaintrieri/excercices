import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="row ">
                <div className="col-12 text-center my-5 py-5">
                    <Link to="games" className="btn my-2 p-4 w-50 btn-light text-dark">Giochi</Link>
                </div>
                <div className="col-12 text-center my-4  py-5">
                    <Link to="categories" className="btn my-2 p-4 w-50 btn-light text-dark">Categorie</Link>
                </div>
            </div>
        </>
    );
}

export default Home;