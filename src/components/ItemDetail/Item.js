import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material'
import Modal from '../Modal/Modal'
import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './Item.css'

//creamos un componente funcional en una constante funcional de tipo flecha y le pasamos propiedades
const Item = ({ imagen, titulo, precio, descripcion, stock, id }) => {

    return(
        <Card className="card" sx={{ minWidth: 275, minHeight: 300 }}>
            <CardContent className='cardContenedor'>
                <div className="contenedorItem">
                    <h1 className='titulo'>{titulo}</h1>
                    <div>
                        <img src={`./${imagen}`} alt="Producto"/>
                    </div>
                    <h2 className='precio'>Valor ${precio}</h2>
                    <h3 className='descripcion'>Descripcion</h3>
                    <article className='descrpcion'>{descripcion}</article>
                    <ItemCount stockPro={stock} initial={1}/>
                </div>
            </CardContent>
        </Card>
    )
}
//exportamos el componente
export default Item