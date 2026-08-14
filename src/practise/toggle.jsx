import React from 'react';
import { useState } from 'react'


function App() {

   const[switchu, switchfunc] = useState(false);

   function toggle()
   {
        switchfunc(!switchu)
   }

    return (
        <>
           <h1>{switchu ? "ON" : "OFF"}</h1>

           <button onClick={toggle}>switch</button>
        </>
    );
}


export default App


