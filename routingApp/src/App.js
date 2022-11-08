import './css/style.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Article from './components/Article/Article';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element ={<Home></Home>}></Route>
            <Route path='blog' element={<Blog></Blog>}>
            <Route path='article' element={<Article></Article>}></Route>
            </Route>
            <Route path='about' element={<About></About>}></Route>
            
            </Route>        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
