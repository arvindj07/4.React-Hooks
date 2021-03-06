import React,{useState,useEffect} from 'react'

function Uewc1() {
    const [count,setCount] =useState(0);
    console.log('Render');
    // 1st variation of UseEffect
    useEffect(()=>{ 
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
        //cleanUp
        return ()=>{
            alert(`I Will be called before the next useEffect is called' ${count}`)
        }
    });
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Uewc1
