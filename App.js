import { style } from "@mui/system";
import { useState } from "react";
import './/App.css'
function App(){
  const date = new Date().toLocaleTimeString();
  
  const[ctime,settime]=useState(date);
 
  function GetTime(){
    const Cdate = new Date().toLocaleTimeString();
    settime(Cdate);
    
  }
  setInterval(GetTime,1000);
 
  return(
  <>
 <div id="root" >
  <h1>{ctime}</h1>
 </div>
  </>);
}

export default App;
