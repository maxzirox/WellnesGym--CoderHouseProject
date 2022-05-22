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
        const onAdd = () =>{
            if(stock > 0 && stock >= count){
                setStock( stock - count)
                alert(`has agregado ${count} unidades al carrito`)
                setCount(0)
            }else{
                alert("sin stock")
            }
        }
    return(
        <>
        <div className='countItem'>
            <Button onClick={removeCount} disabled={count <= 1} >-</Button>
            <p>{count}</p>
            <Button onClick={addCount} disabled={stock <= count}>+</Button>
            <Button variant='contained' onClick={onAdd} disabled={stock < count || stock == 0}>Agregar</Button>
        </div>
        <p>Stock: {stock}</p>
        </>
        
    )
}

export default ItemCount