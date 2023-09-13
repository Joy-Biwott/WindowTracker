import React, {useState} from "react";
import WindowTracker from "./WindowTracker";

export default function App (){
  const [isToggle, setIsToggle] = useState(true)
  function toggle(){
    setIsToggle(prevIsToggle => !prevIsToggle)
  }
  console.log(isToggle)
  return(<div className="main--div">
    <button className="button" onClick={toggle}>Toggle WindowTracker</button>
    <WindowTracker isToggle={isToggle}/>
  </div>)
}
