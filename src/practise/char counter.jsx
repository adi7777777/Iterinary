import { useState } from "react";

function App() 
{
    const [text, setText] = useState("");


    return (
        <>
            <textarea
                placeholder="Type something..."
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <h2>Characters: {text.length}</h2>
        </>
    );
}


export default App;