import React,{useState, useMemo} from 'react'

function Counter() {

    const [counterOne,setCounterone] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterone(counterOne + 1)
    }

    const incrementTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() =>{
        let i =0
        while(i<10000000000000000000)i++
        return counterOne % 2 === 0
    },[])
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count one - {counterOne}</button>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
