import React, {setState, useState} from "react";

function Add(){

    const[foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handelAddFood(){
        const newfood =document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        // setFoods([...foods,newfood]);
         setFoods(f=>[...f,newfood]);//f => foods
    }
    function handelRemoveFood(index){

        setFoods(foods.filter((_, i) => i !== index) );
// _ => ignore   i=>index
    }
    return(
        <div>
        
        <h1>List of Food</h1>
        <ul>
        {foods.map((food, index) => <li key={index} onClick={()=> handelRemoveFood(index)}  >    
            {food}</li>) }

        </ul>
        <input type="text" id="foodInput" placeholder="enter food name"/>
        <button onClick={handelAddFood}>add food</button>
        
        </div>
    )
}

export default Add;