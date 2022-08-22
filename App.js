import { style } from "@mui/system";
import { useState } from "react";
import './/App.css'
function App(){
  let i=0;
  const date = new Date().toLocaleTimeString();
  const color="green";
  const[ctime,settime]=useState(date);
  const[ccolor,setcolor]=useState(color);
  function GetTime(){
    const Cdate = new Date().toLocaleTimeString();
    settime(Cdate);
    
  }
  setInterval(GetTime,1000);
  function GetColor(){
    const c="yellow";
    setcolor(c);
    i=i++%c.length();
    
    
  }
  const styling ={
    backgroundColor:{ccolor}
  }
  return(
  <>
  <div id="container" style={styling.backgroundColor}>
 <div id="root" >
  <h1>{ctime}</h1>
 </div>
<button id="btn" onClick={GetColor} >GetColor</button>
</div>
  </>);
}

export default App;