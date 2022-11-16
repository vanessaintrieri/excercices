
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout/Layout"
import Home from './components/Home/Home';
import Games from './components/Games/Games';
import Categories from "./components/Categories/Categories"; 
import NewGame from "./components/NewGame/NewGame";
import NewCategory from './components/NewCategory/NewCategory';
import EditGame from "./components/EditGame/EditGame";
import EditCategory from "./components/EditCategory/EditCategory";


const App = () =>  {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} >
            <Route path="new" element={<NewGame />} />
            <Route path="edit/:id" element={<EditGame />} />
          </Route>
          <Route path="categories" element={<Categories />}>
            <Route path="new" element={<NewCategory />}/>
            <Route path="edit/:id" element={<EditCategory />}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
