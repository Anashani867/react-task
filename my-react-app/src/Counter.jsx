// React hook = Special function that allows functional components 
//to use React features without writing class components (React v16.8)
//(use State, use Effect, use Context, use Reducer, use Callback, and more…
 
// use State() = A React hook that allows the creation of a stateful variable
//AND a setter function to update its value in the Virtual DOM.
//[[name, surname]

import React,{ useState } from "react";

function Counter (){
   
    const [count,setCount] =useState(0);

    const increment =() => {
        setCount (count +1)
        // setCount (c=>c +1) //c => count
        // setCount (c =>c +1)
    }

    const decrement =() => {
        setCount (count - 1)
    }

    const reset =() => {
        setCount (count *0)
    }


    return(
        <div className="counter-contaciner">
<p className="count-display">{count}</p>

<button className="counter-button" onClick={decrement}>Decrement</button>
<button className="counter-button" onClick={reset}>reset</button>
<button className="counter-button" onClick={increment}>increment</button>
        </div>
    )


}

export default Counter