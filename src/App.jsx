import React, {useState, useEffect} from "react";
import WindowTracker from "./WindowTracker";

export default function App (){
  const [isToggle, setIsToggle] = useState(true)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const handleResize = () =>  {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function toggle(){
    setIsToggle(prevIsToggle => !prevIsToggle)
  }
  console.log(isToggle)
  return(<div className="main--div">
    <button className="button" onClick={toggle}>Toggle WindowTracker</button>
    <WindowTracker isToggle={isToggle}
      innerWidth={innerWidth}
    />
  </div>)
}
