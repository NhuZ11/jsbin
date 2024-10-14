import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Test from './Components/Test';

//for context
export const Context = createContext();

function App() {
  
  const [showTop, setShowtop] = useState(true)


  const showView = () => {
    setShowtop(prevState => !prevState);
  };

  console.log(showTop)

  return (
    <>
    <Context.Provider value={{showTop ,setShowtop, showView}}>
    <Router>
       <Routes>
         <Route path='/' element={<Home />} /> 
         <Route path='/test' element={<Test />} /> 
       </Routes>
     </Router>
    </Context.Provider>

    </>
  )
}

export default App
