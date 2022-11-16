import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className="container-fluid bg-dark">
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    );
}

export default Layout