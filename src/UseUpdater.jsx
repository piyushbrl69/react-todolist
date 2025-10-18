import React, {useState} from "react";

function UseUpdater(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(c=>c+1);//can call first letter of variable , c for count
    }
    function decrement(){
        setCount(c=>c-1);
    }
    function reset(){
        setCount(c=>c=0);
    }

    return(<>

    <p>Count: {count} </p>
    <button onClick={increment}>Incre</button>
    <button onClick={decrement}>Decre</button>
    <button on onClick={reset}>Reset</button>
    </>)

}
export default UseUpdater