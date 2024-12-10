import React,{ useState } from "react"

function MyComponent2(){

    const [cars ,setCar] = useState([]);
    const [carYear ,setCarYear] = useState(new Date().getFullYear());
    const [carMake ,setCarMake] = useState("");
    const [carModel ,setCarModel] = useState("");

    function handelAddCar (){

        const newCar = {
            year: carYear,
            make:carMake,
            model:carModel
        }


        setCar(c=> [...c, newCar])
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

function handelRemoveCar(index){

    setCar(c => c.filter((_,i) => i !== index));

}
function handleYearChange(event){
    setCarYear(event.target.value)


}
function handelMakeChange(event){
    setCarMake(event.target.value)



}
function handelModelChange(event){
    setCarModel(event.target.value)


}





    return(
        <div>

            <ul>
                {cars.map((car,index)=> 
                <li key={index} onClick={()=>handelRemoveCar(index)} >
{car.year}   {car.make}  {car.model}


                </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange} />
            <input type="text" value={carMake} onChange={handelMakeChange} placeholder="enter car make"/><br/>
            <input type="text" value={carModel} onChange={handelModelChange} placeholder="enter car model" /><br/>

        <button onClick={handelAddCar}>Add Car</button>
        </div>
    )
}

export default MyComponent2