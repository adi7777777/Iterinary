import { useState } from "react";

function App() {

    const [openIndex, setOpenIndex] = useState(null);

    const data = [
        {
            title: "React",
            content: "React is a JavaScript library."
        },
        {
            title: "JavaScript",
            content: "JavaScript is a programming language."
        },
        {
            title: "HTML",
            content: "HTML is used to create web pages."
        }
    ];

    function toggle(index) {

        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }

        // setOpenIndex(1); means Please change the state to 1, like openIndex=1. so if openIndex is 1, then it will show the content of the first item in the data array. if openIndex is null, then it will hide the content of all items in the data array.
    }

    return (

        <div>

            {
                data.map((item, index) => (

                    <div key={index}>

                        <button onClick={() => toggle(index)}>
                            {item.title}
                        </button>

                        // inside the button, we have item.title, which is the title of the item in the data array.

                        {
                            openIndex === index &&
                            <p>{item.content}</p>
                        }

                        // here we are checking if the openIndex is equal to the index of the item in the data array. if it is, then we will show the content of the item in the data array. if it is not, then we will hide the content of the item in the data array.

                    </div>

                ))
            }

        </div>

    );

}

export default App;