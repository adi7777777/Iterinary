import { useEffect, useState } from "react";

function App() {

    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(timer);
        };

    }, [search]);

    return (
        <div>

            <h2>Search</h2>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
            />

            <p>
                Searching for: {debouncedSearch}
            </p>

        </div>
    );
}

export default App;

// Debouncing means:  Wait until the user stops typing for a certain amount of time, then perform the action.

// "Why did you use useEffect for debouncing?"
// Because the timer should run whenever the search state changes, and useEffect lets us respond to that state change and clean up the previous timer before starting a new one.

// The user types → setSearch()

// The timer finishes → setDebouncedSearch()

// Every time search changes, React cleans up the previous timer before starting the new one.

// That's what prevents:

// r      → API
// re     → API
// rea    → API
// reac   → API
// react  → API

// search changes
//       ↓
// useEffect runs
//       ↓
// start 500ms timer
//       ↓
// Did search change again?
//       ↓
// YES → cancel old timer
//       ↓
// start new timer