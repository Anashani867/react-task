import { useState } from "react"

function MyComponent(){



    // const [name , setName]= useState("Guest");
    // const [age , setage]= useState(0);
    // const [isEmployed , setisEmployed]= useState(false);


    // const updateName =() =>{
    //     setName("spongebob");
    // }
    // const IncrementAge =() =>{
    //     setage(age+1);
    // }
    // const toggleEmploydStatus =() =>{
    //     setisEmployed(!isEmployed);
    //     // setisEmployed(true);
    // }

    // return(
    //     <div>
    //         <p>name: {name}</p>
    //         <button onClick={updateName}>setName</button>
       
    //         <p>age: {age}</p>
    //         <button onClick={IncrementAge}>IncrementAge</button>
            
    //         <p>isEmployed: {isEmployed ? "yes" : "no"}</p>
    //         <button onClick={toggleEmploydStatus}>Toggle Status</button>
    //     </div>
    // )

    const [name, setname] = useState("GUEST");
    const [quantity, setnquantity] = useState(1);
    const [comment, setcomment] = useState("");
    const [payment, setpayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleNameChange(event){
        setname(event.target.value);
    }
    function handleQuantityChange(event){
        setnquantity(event.target.value);
    }
    function handleCommentChange(event){
        setcomment(event.target.value);
    }
    function handlePaymentChange(event){
        setpayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }


    return(
        <>
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>quantity: {quantity}</p>
            <textarea type="text" value={comment} onChange={handleCommentChange} placeholder="enter delivery instruction"/>
            <p>comment: {comment}</p>


            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping:{shipping}</p>
        </div>

        <select value={payment} onChange={handlePaymentChange}>
<option value=""> select an option</option>
<option value="visa"> visa</option>
<option value="mustercard"> mustercard</option>
<option value="giftcard"> giftcard</option>
        </select>

        <p>payment:{payment}</p>
        </>
    )
}

export default MyComponent