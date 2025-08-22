import { useState } from "react";

function Increment(){
    let [increment, setIncrement] = useState(0);

    function incrementHandler(){
        setIncrement((prev)=>prev+1)
    }
    function decrementHandler(){
        setIncrement((prev)=>prev-1)
    }

    return(
        <>
            <div className="w-[400px] border mx-auto p-2 mt-10 bg-neutral-300 rounded-md">
                <h1 className="text-2xl font-bold">Simple Counter App</h1>
                <p className="mb-2">By using the below buttons you can increment or decrement the Value!</p>

                <h1 className="text-center text-3xl font-bold text-orange-700">{increment}</h1>
                <div className="flex mt-3 justify-center items-center">
                    <button onClick={incrementHandler} className="bg-black text-white rounded-md p-2 m-3">Increment</button>
                    <button onClick={decrementHandler} className="bg-black text-white rounded-md p-2 m-3">Decrement</button>
                </div>
            </div>
        </>
    )
}
export default Increment;