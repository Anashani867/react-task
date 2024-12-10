// use Effect() = React Hook that tells React to DO THIS CODE WHEN (pick one):

                 //This component re-renders
                 
                 //This component mounts
                 
                 //The state of a value


// // use Effect(function], [dependencies])

// // 1. use Effect(() => (})
// Runs after every re-render
// // 2. use Effect(() => (}, [])
// Runs only on mount
// // 3. use Effect(() => (}, [value]) // Runson mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React,{useState,useEffect} from "react";

function WinWiHe(){
    const[width,setWidth] = useState(window.innerWidth);
    const[height,setheight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("event listener added");
        return()=>{
            window.removeEventListener("resize",handleResize);
            console.log("event listener removed ")
        }
    },[]);

    useEffect(()=>{
        document.title =`size: ${width} x ${height}`
    },[width, height])


    function handleResize(){
        setWidth(window.innerWidth);
        setheight(window.innerHeight);
    }
    return(
        <>
        <p>window width: {width}px</p>
        <p>window height: {height}px</p>
        </>
    )
}

export default WinWiHe;