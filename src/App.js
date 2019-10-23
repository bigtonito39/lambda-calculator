import React, {useState} from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Number from "./components/ButtonComponents/NumberButtons/Numbers";
import Operator from "./components/ButtonComponents/OperatorButtons/Operators";
import Special from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";


// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

export function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [showDisplay, setShowDisplay] = useState("20")

  const handlesetShowDisplay = data => {
    setShowDisplay(data)
  }

  /* Stretch goal needed here*/

  
  



  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
     
        <Display showDisplay = {showDisplay} />

      <div className = "SpecialDiv" ><Special /></div>
       <div className = "Divider">
       
       <div className = "NumberDiv"><Number /></div>
       <div className = "OperatorDiv"><Operator /></div>
               
</div> 
        
        
        
      </div>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render( < App/> , rootElement);
