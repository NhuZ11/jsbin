import { createContext, useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Components/Home'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Test from './Components/Test';
import Register from './Components/LoginComponent/Register';
import Login from './Components/LoginComponent/Login';
import Blog from './Components/Blog';
import Feature from './Components/SmallerComponent/Feature';

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

 const [user, setUser] = useState([]);
 const [error, setError] = useState(null);

 useEffect(()=>{

   const fetchUser = async () => {
     try {
       // Retrieve the token from local storage (or wherever you store it)
       
       const token = localStorage.getItem("token")

       console.log(token)
       if (!token) {
         setError("No authentication token found. Please log in.");
         return;
       }

       // Send the GET request with the token in the headers
       const res = await axios.get("http://localhost:3000/api/auth/getuser", {
       
         headers: {
           "auth-token": token, // Send the token as part of the headers
         },
       });

      

       // Set the user data in state
       setUser(res.data);
       console.log(res.data)
     } catch (error) {
       // Handle any error that occurs
       setError("Failed to fetch user data.");
       console.error(error);
     }
   };

   fetchUser(); // Call the function when the component mounts
 },[])


  return (
    <>
    <Context.Provider value={{showTop ,setShowtop, showView, runCode, user, }}>
    <Router>
       <Routes>
         <Route path='/' element={<Home />} /> 
         <Route path='/test' element={<Test />} /> 
         <Route path='/register' element={<Register />} /> 
         <Route path='/login' element={<Login />} /> 
         <Route path='/blog' element={<Blog />} /> 
         <Route path='/features' element={<Feature />} /> 
       </Routes>
     </Router>
    </Context.Provider>

    </>
  )
}

export default App
