import React, { useState } from "react";

function Counter(){
const[count, setCount] = useState(0);


    return(
<>
<h2>Counter App</h2>
<button onClick={() => {
    setCount(count + 1)
}}>Increament</button>

<button>{count}</button>

<button onClick={() => {
    setCount(0)
}}>reset</button>

<button onClick={() => {
    setCount(count-1)
}}>decrement</button>




</>
    )
}

export default Counter;