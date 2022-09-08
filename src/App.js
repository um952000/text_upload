import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react'

//importing something from react router

// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   //Link,
//   Routes
// } from "react-router-dom";



function App() {


  const[mode,setMode]=useState('light'); //wheather the dark mode is enabled or not
  
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{

     setAlert({
      msg:message,
      type:type
     })

     setTimeout(() => {
      setAlert(null)
     }, 2000);


  }

const toggleMode = ()=>{

   if(mode==='light'){
       setMode('dark')
       document.body.style.backgroundColor = 'grey';
       showAlert("Dark mode has been enabled","success");
       document.title='TextUtils - Dark Mode';
   }

   else{

    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
    document.title='TextUtils - Light Mode';
    
    // for popup in tab.............

    // setInterval(() => {
    //   document.title='TextUtils - Light Mode';
    // }, 2000);

    // setInterval(() => {
    //   document.title='Install TextUtils now.';
    // }, 1500);
   }

    }
  return (
   <>

   {/* <Router> */}
    {/* multiple use of props */}
   <Navbar  title="MyText" aboutText="About us" mode={mode} toggleMode={toggleMode}/>

   {/* default prop types */}
   {/* <Navbar/> */}


   <Alert alert={alert}/>

   
   <div className="container">

   <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>

   {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
   </Routes> */}

    </div>
   {/* </Router> */}
   </>
    
  );
}

export default App;