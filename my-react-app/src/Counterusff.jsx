import React, { useState,useEffect } from "react";

function Counterusff() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(()=>{
// document.title = `count: ${count}`;
// document.title = `count: ${count}`;
//   },[]);
document.title = `count: ${count}`;
return() =>{
  //some cleanup code
}
  },[count , color]);
// document.title = `my Counter Program`;
//   },[]);
  function addCount() {
    setCount((c) => c + 1);
  }
  function subractCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor(c => c === "green" ? "red" : "green");
  }

  return (
    <>
      <p style={{color}}>Count: {count} {color}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subractCount}>subract</button>
      <button onClick={changeColor}>setColor</button>
    </>
  );
}

export default Counterusff;
