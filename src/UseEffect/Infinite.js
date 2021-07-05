import React,{useState,useEffect} from 'react'

function Infinite() {
    console.log('render');
    useEffect(()=>{
        console.log('useEffect');
        let num = Math.random()*100;
        setCount(num)
    },[]) // does infinite re-rendering if we remove []- dependency array
    const [count,setCount] =useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)} >Click</button>
        </div>
    )
}

export default Infinite
