import React, {useState} from 'react'

function HookCounterFour() {

    const addItem = () =>{
        setItems([
                ...items,
                {
                    id : items.length,
                    value : Math.floor(Math.random() * 10 + 1)
                }
            ])
    }
    const [items,setItems] = useState([])
    return (
        <div>
            <button onClick={addItem}>Add a number </button>
          <ul>
              {
                items.map(item => <li key={item.id}>{item.value}</li>)
              }
          </ul>  
        </div>
    )
}

export default HookCounterFour