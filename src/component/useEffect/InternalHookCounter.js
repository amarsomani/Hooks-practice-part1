import React, {useState,useEffect}from 'react'

function InternalHookCounter() {

    const [count,setCount] = useState(0)

    const tick =() =>{
        setCount(prevCount => prevCount + 1)
    }

    useEffect( () =>{
        const interval = setInterval(tick,1000)

        return () =>{
            clearInterval(interval)
        }
    },[count])

    return (
        <div>
           {count}  
        </div>
    )
}

export default InternalHookCounter