import { createContext, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Test from './Components/Test';

//for context
export const Context = createContext();

function App() {
  //for top toggle
  const [showTop, setShowtop] = useState(true)

  const showView = () => {
    setShowtop(prevState => !prevState);
  };

 //for the console in output
 const [consoleOutput, setConsoleOutput] = useState('');

 // Function to run the JavaScript code
 const runCode = (code) => {
   try {
     // Capture console.log output
     const log = [];
     const originalLog = console.log;
     console.log = (...args) => log.push(args.join(' '));

     // Use eval to run the JS code
     eval(code);

     // Restore original console.log
     console.log = originalLog;

     // Set the captured console output
     setConsoleOutput(log.join('\n'));
   } catch (error) {
     // Display any errors in the console output
     setConsoleOutput(error.toString());
   }
 };


  return (
    <>
    <Context.Provider value={{showTop ,setShowtop, showView, runCode}}>
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
