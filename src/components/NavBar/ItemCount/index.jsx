import './ItemCount.css'
import React,{useState} from 'react'
import { useEffect } from 'react'

export const ItemCount = ({initial, stock, onAdd}) => {
    const[count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        if (count - 1 >= 0) {
            setCount(count - 1)
        }
    }
    const increase = () => {
        if(count + 1 <= 5) {
            setCount(count + 1)
        }
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

    return(
        <div className='counter'>
            <button className='button' disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button className='button' disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount