import {useState} from 'react';
import { Button } from '@mui/material'
import { stock } from '../Card/Card';

const ItemCount = ({ stockPro, initial}) => {

    const [stock, setStock] = useState(stockPro)
    const [count, setCount] = useState(initial)
        const addCount = () =>{
            setCount(count + 1)
        }
        const removeCount = () =>{
            if(count > 0 ){
              setCount(count - 1)
            }       
        }
        const removeStock = () =>{
            if(stock > 0 && stock >= count){
                setStock( stock - count)
                alert(`has agregado ${count} unidades al carrito`)
            }else{
                alert("sin stock")
            }
        }
    return(
        <>
        <div className='countItem'>
            <Button onClick={removeCount} disabled={count == 1} >-</Button>
            <p>{count}</p>
            <Button onClick={addCount}>+</Button>
            <Button variant='contained' onClick={removeStock}>Agregar</Button>
        </div>
        <p>Stock: {stock}</p>
        </>
        
    )
}

export default ItemCount