import React,{useState} from "react"
function ToDoList(){

    
        const [tasks, setTasks] = useState(["Eat Breakfast","Take a shower","walk the dog"]);
    const [newTasks, setnewTasks] = useState("");


    


    function handleInputChange(event){
        setnewTasks(event.target.value);
    }

    function addTask(event){
        if(newTasks.trim() !== ""){
        setTasks(t=>[...t, newTasks])
        setnewTasks("")
        }

    }
    function deleteTask(index){

        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
      
    }

    function moveTaskUp(index){
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
          }

    }
    function moveTaskDown(index){

        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
          }

    }

return(<div className="to-do-list">

<h1>To-Do-List</h1>

<div >
    <input type="text" placeholder="Enter a task..." value={newTasks} onChange={handleInputChange}/>

    <button className="add-button" onClick={addTask}>add</button>

</div>

<ol>
    {tasks.map((task, index)=> <li key={index}>
        <span className="text">{task}</span>
        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>

        <button
        className="move-button" onClick={() =>moveTaskUp(index)}>UP</button>
        <button
        className="move-button" onClick={() =>moveTaskDown(index)}>Down</button>
    </li>)}
</ol>
</div>)
}

export default ToDoList