
function Button(){

    // let count = 0;

    // const handleClick =() => console.log("ouch!");
    // const handleClick1 =(name) => console.log(` ${name} stop clicking me!`);
    //  const handleClick =(name) => {
    //     if(count <3)
    //     {
    //         count ++;
    //         console.log(`${name} you clicked me ${count} time/s`)
 
    //     }

    //     else{
    //         console.log(` ${name} stop clicking me!`);}


    //     }

    const handleClick = (e) => e.target.textContent ="ouch!";
        //  console.log(e); //e => event

    return(<button onDoubleClick={(e)=>handleClick(e)}>   click me😂  </button>);
    // return(<button onClick={(e)=>handleClick(e)}>   click me😂  </button>);
    // return(<button onClick={()=>handleClick("anas")}>   click me😂  </button>);
}

export default Button ;