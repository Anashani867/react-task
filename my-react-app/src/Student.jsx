import PropTypes from 'prop-types'
function Student(props){

    return(
/* <div className="student">
    <p>Name: {props.name}</p>
    <p>age :{props.age}</p>
    <p>Student :{props.isStudent ? "yes" :  "no"}</p>
</div> */ 


<div className="student">
    <p>first_name: {props.first_name}</p>
    <p>last_name :{props.last_name}</p>
    <p>phone :{props.phone }</p>
    <p>address :{props.address}</p>
</div>
   );
}



    Student.propTypes ={
        name: PropTypes.string,
        age: PropTypes.number,
        isStudent: PropTypes.bool,
    }

    Student.defaultProps = {
        name: "Guest",
        age: 0,
        isStudent: false,
      };
      


export default Student