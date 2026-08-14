import { useState } from "react";

function App() {

    const [task, setTask] = useState("");

    const [todos, setTodos] = useState([]);

    function addTodo() {

        if (task.trim() === "") return;
        setTodos([...todos, task]);
        setTask("");
    }
// here task.trim() is used to remove any whitespace from the beginning and end of the task string. if the task is empty or contains only whitespace, it will return and not add the task to the todos array.

// ...todos is the spread operator, it creates a new array with the existing todos and adds the new task to it. This way, we are not mutating the original todos array, which is important for React's state management.

//settask("") is used to clear the input field after adding the task to the todos array.

    function deleteTodo(index) {
        const updatedTodos = todos.filter((todo, i) => i !== index);
        //"Create a new array containing everything except the item at this index."
        setTodos(updatedTodos);
        //"Tell React to use this new array as the state."
    }
// here filter doesnot remove anything, it asks if ur index is matching, then it wont include that index in array. rest r addded inside array
// so in that filter if condition is true, then it will include that todo in the updatedTodos array, otherwise it will not include that todo in the updatedTodos array. so it will create a new array with all the todos except the one at the index we want to delete.

    return (

        <div>

            <h1>Todo App</h1>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter Task"
            /> 

            <button onClick={addTodo}> Add  </button>

            <ul>

                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => deleteTodo(index)}> Delete </button>
                        </li>
                    ))
                }

            </ul>


        </div>

    );

}

export default App;

// why we used spread operator? cause it creates a new array with the existing todos and adds the new task to it. This way, we are not mutating the original todos array, which is important for React's state management.

// we can also use todos.push(task) but it will mutate the original array and React will not re-render the component.

// mutable means changing original array and immutable means creating a new array with the existing array and adding new element to it.