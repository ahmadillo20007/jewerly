import { Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import Home from './pages/OurStory/OurStory';
import Header from './components/Header/Header'
import Menu from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
    <Route path='/' element={<Menu/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/blog' element={<Blog/>}/>
</Routes>
    
    </div>
  );
}

export default App;
