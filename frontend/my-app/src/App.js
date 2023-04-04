 
import './App.css';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Home from './components/Home';
import FourZeroFour from './components/FourZeroFour';


import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Edit from './components/Edit';
import Show from './components/Show';


function App() {
  return (
     <>

      <BrowserRouter>
      <Navbar /> 
         <Routes>
               <Route path='/' element={<Home />}></Route>
               <Route path='/create' element={<Create />}></Route>
               <Route path='/edit/:id' element={<Edit />} ></Route>
               <Route path='/show/:id' element={<Show />} ></Route>
               <Route path='*' element={<FourZeroFour />}></Route>
         </Routes>
      </BrowserRouter>
     
     </>
  );
}

export default App;
