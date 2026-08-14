import { useState } from "react";

function App() {

    const [search, setSearch] = useState("");

    const places = [
        "Goa",
        "Coorg",
        "Ooty",
        "Mysore",
        "Manali"
    ];

    const filteredPlaces = places.filter(place =>
        place.toLowerCase().includes(search.toLowerCase())  //include means if it contains. like goa contains go? yes
    );
// includes return boolean value, if its true then it will be included in the filteredPlaces array otherwise not. it will store like this, filteredPlaces = ["Goa"],

    return (
        <>
            <input
                type="text"
                placeholder="Search Place"
                value={search}  
                onChange={(e) => setSearch(e.target.value)}
                // initially search is empty, cause see the usestate u have given empty string. so initially it will show all the places. but when we type something in the input field, it will update the search state and then it will filter the places array and show only the places that match the search query.
            />

            <ul>
                {
                    filteredPlaces.map((place, index) => (
                        <li key={index}>
                            {place}
                        </li>
                    ))
                    // now filteredPlaces conatins ["Goa"], map will iterate over it and return a list item for each place. so it will return <li>Goa</li>
                }
              
            </ul>
        </>
    );
}

export default App;