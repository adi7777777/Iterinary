import React from 'react';
import { useState } from 'react'


function App() {

    const [pass, setPassword] = useState(false);

    function togglePassword() {
        setPassword(prev => !prev);
    }

    return (
        <>
          <input type={pass ? "text" : "password"} placeholder="type pass"></input><br/>

          <button onClick={togglePassword}>{pass ? "hide" : "show"}</button>  
        </>
    );
}

export default App


// when u click on that button, toggle function will be called inside that function we are changing the state of "pass" to opposite of its current value. if it is true then it will become false and vice versa.

//input and button are connected through the state variable "pass". 