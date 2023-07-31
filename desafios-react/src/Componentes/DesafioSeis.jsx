import {useState} from 'react'

const DesafioSeis = () => {
    const [counter,setCounter] = useState(0)

    const suma = () => {
        setCounter(counter + 1 )
    }

    const resta = () => {
        setCounter(counter - 1)
    }
    
    return (
    
    <div>
        <p>{counter}</p>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>

    </div>
  )
}

export default DesafioSeis