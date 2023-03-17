 
import './App.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Home from './components/Home';
import FourZeroFour from './components/FourZeroFour';


import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {
  return (
     <>

      <BrowserRouter>
      <Navbar /> 
         <Routes>
               <Route path='/create' element={<Create />}></Route>
               <Route path='/' element={<Home />}></Route>
               <Route path='*' element={<FourZeroFour />}></Route>
         </Routes>
      </BrowserRouter>

     
     </>
  );
}

export default App;
