import './App.css';
import { Route, Routes } from  'react-router-dom';
import Home from './pages/home/Home';
import Receip from './pages/receip/Receip'
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/receip' element={ <Receip/> } />
        <Route path='*' element={<Error/>} />
      </Routes>
      
    </div>
  );
}

export default App;
