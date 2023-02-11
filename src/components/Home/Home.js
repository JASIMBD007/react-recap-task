import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };
    const number = 55;
    return (
        <div >
            <button onClick={increaseCount}>Click Me</button>
            <br />
            <h4>My Number Is:{number}</h4>
            <h4>Count:{count}</h4>
            <h5>Double Count:{count * 2}</h5>

        </div>
    );
};

export default Home;