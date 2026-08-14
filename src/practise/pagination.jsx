import { useState } from "react";

function App() {

    const [currentPage, setCurrentPage] = useState(1);

    const users = [
        "Ashrith",
        "Rahul",
        "Kiran",
        "Ravi",
        "John",
        "Sam",
        "David",
        "Rohit",
        "Alex",
        "Karthik",
        "Arun",
        "Vijay",
        "Manoj",
        "Suresh",
        "Ajay",
        "Raj",
        "Surya",
        "Naveen",
        "Prakash",
        "Amit"
    ];

    const itemsPerPage = 5;

    // Calculate which items should be displayed
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    //suppose currentPage is 1, then start = (1-1)*5 = 0, end = 0+5 = 5. so it will show users from index 0 to index 4. if currentPage is 2, then start = (2-1)*5 = 5, end = 5+5 = 10. so it will show users from index 5 to index 9. and so on.

    // Get only the users for the current page
    const currentUsers = users.slice(start, end);

    // Calculate total number of pages
    const totalPages = Math.ceil(users.length / itemsPerPage);

    return (
        <div>

            <h1>User List</h1>

            {/* Display current page's users */}
            <ul>
                {currentUsers.map((user, index) => (
                    <li key={index}>
                        {user}
                    </li>
                ))}
            </ul>

            {/* Pagination buttons */}
            <div>

// .from creates a new array from something that has length or behaves like collection that is object.

// length: totalPages we add this because we have already calulated the total number of pages. so it will create an array of length totalPages. like if totalPages is 4, then it will create an array of length 4. and then we can use map to iterate over it and create buttons for each page.

think .from as------ Array.from(source, callback), in callback we have used map method


// just think as "Create totalPages positions, and for each position run this function."
// so here 4 buttons are created 

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

            </div>

        </div>
    );
}

export default App;