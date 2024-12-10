import PropTypes from 'prop-types'
function List(props)
{

    // const fruits = ["orange", "apple","banana", "coconut", "pineapple"];

    // const listItems = fruits.map(fruit => <li>{fruit}</li>)



        //  const fruits = [{id: 1, name:"orange", calories: 95},
        //      {id:2,name:"apple",calories: 45},
        //      {id:3,name:"banana",calories:105},
        //       {id:4,name:"coconut",calories:159}, 
        //       {id:5,name:"pineapple", calories:37}];

            //   fruits.sort((a, b)=> a.name.localeCompare(b.name)); //Alphabetical
            //   fruits.sort((a, b)=> b.name.localeCompare(a.name)); //reverse Alphabetical
            //   fruits.sort((a, b)=> a.calories - b.calories); // Alphabetical
            //   fruits.sort((a, b)=> b.calories - a.calories); //reverse Alphabetical

            // lowCalFruits =fruits.filter(fruit => fruit.calories<100);
            // highCalFruits = fruits.filter(fruit => fruit.calories >= 100);


            const category = props.category;
            const iteamList = props.items;

                  const listItems = iteamList.map(item => <li key={item.id} >
                    {item.name}: &nbsp;
                  <b>  {item.calories} </b></li>)

                //   const listItems = fruits.map(fruit => <li key={fruit.id} >
                //     {fruit.name}: &nbsp;
                //   <b>  {fruit.calories} </b></li>)

                // const listItems = highCalFruits.map(highCalFruit => (
                //     <li key={highCalFruit.id}>
                //       {highCalFruit.name}: &nbsp;<b>{highCalFruit.calories}</b>
                //     </li>
                //   ));
                  

    return(
        <>

      <h3 className="list-category">{category}</h3> 
      <ol className="list-items">{listItems}</ol> 
       </>
    );
}

List.defaultProps = {
    category : "Category",
    items : [],

} 

List.PropTypes ={
    category :PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
     })),

}
export default List;