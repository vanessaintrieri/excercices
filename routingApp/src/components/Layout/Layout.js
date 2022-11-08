import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div >
      <header>
        <Header />
      </header>
      <main className="container">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
