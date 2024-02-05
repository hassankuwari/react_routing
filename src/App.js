import { Link, Route, Routes ,BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
<header>
  <div>
    <BrowserRouter>
    
    <Link to="/">Home</Link>
    <Link to ="/about">About</Link>
    <Link to="/contact">Contact</Link>
    
    <Routes>
      <Route path=''element={<Home/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>
    </Routes>
    
    </BrowserRouter>
  </div>
</header>
    );
}

export default App;
