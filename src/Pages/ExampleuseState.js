import { listItems } from "../Utils/data";
import {useEffect,useState}from "react";
const ExampleuseState=()=>{
    const[counterValue,setCounterValue]=useState(0)
    const[counterValues,setCounterValues]=useState(0)
    // let counterValue=0;
    const handleIncrement=()=>{
        // counterValue=counterValue+1;
        setCounterValue(counterValue+1);
        // console.log(counterValue);
    };
   
    const handleDecrement=()=>{
        // counterValue=counterValue-1;
         setCounterValue(counterValue-1);
        };
        useEffect(()=>{
            console.log("With  dependancy")
        },[counterValues]);
        useEffect(()=>{
            console.log("With array")
        },);
        useEffect(()=>{
            console.log("With empty dependancy")
        },[]);
        // console.log(counterValue);
 
    return(
        <div className="layout-cobntainer__wrapper">
            <h1>UseState hook</h1>
            <p>{counterValue}</p>
    <div>
        <button onClick={handleIncrement}>Increment</button>
    </div>
    <div>
        <button onClick={handleDecrement}>Decrement</button>
    </div>

        </div>
    )
}
export default  ExampleuseState;