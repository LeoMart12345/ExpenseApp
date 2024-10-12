import { useState } from "react"; // Importing useState hook;
function Color() {
const [color, setColor] = useState("red"); // Initializing the state and setter function;
return (
<>
<h1>My favorite color is {color}!</h1>
<button
type="button"
onClick={() => setColor("blue")} // Updating the state;
>Blue</button>
<button
type="button"
onClick={() => setColor("red")} // Updating the state;
>Red</button>
<button
type="button"
onClick={() => setColor("yellow")} // Updating the state;
>Yellow</button>
</>
);
}
export default Color