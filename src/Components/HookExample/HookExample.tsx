import React, { useState } from 'react';

// Note that the Function must start with a capital letter to be recognised as a React Function
const Example = () => {
    // Declare our variable name and the value for setting it as state
    const [count, setCount] = useState(0);

    // Work with JSX as normal, but replace this.state.count with just count
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default Example;