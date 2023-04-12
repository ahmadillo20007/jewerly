import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/about/:slug' element={<About/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
