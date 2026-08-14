import { useState } from "react";

function App() {
    const [dark, setDark] = useState(false);

    function darkMode() {
        setDark(prev => !prev);
    }
   


    return (
        <div style={{
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
            height: "100vh",
           }}>
           
<h1>Dark Mode</h1>
           <button onClick={darkMode}>{dark ? "light" : "dark"}</button>
        </div>
    );
}


export default App;