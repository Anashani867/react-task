import React ,{useState} from "react";

function ColorPicker(){
    const [color,setcolor] = useState("#FFFFFF");

    function handleColorChange(event){
        setcolor(event.target.value);

    }

    return(

        <div className="color-picker-container">
            <h1>Colr Picker</h1>
            <div className="color-display" style={{backgroundColor : color}}>
                <p>selected color {color}</p>
                </div>   
                <label> select a color</label> 
                <input type="color" value={color} onChange={handleColorChange} /> 
                   </div>
    )
}

export default ColorPicker;