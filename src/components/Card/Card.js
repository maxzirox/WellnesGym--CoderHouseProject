import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material'
import './Card.css'
import Modal from '../Modal/Modal'
import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
//creamos un componente funcional en una constante funcional de tipo flecha y le pasamos propiedades
const CardItem = ({ imagen, titulo, precio, descripcion, stock }) => {
    //en una constante de array indicamos el nombre del estado y la variable modificadora y le asignamos un estado  inicial con useState de react
    //hooks de estados
    const [open, setOpen] = useState(false)
    const handleClose = () => {
    setOpen(false)
    }
  
    return(
        <Card className="card" sx={{ minWidth: 275, minHeight: 300 }}>
            <CardContent className='cardContenedor'>
                <div className="cardItem">
                    <div>
                        <img src={`./${imagen}`} alt="Producto"/>
                    </div>
                    <p>{titulo}</p>
                    <span>$ {precio}</span>
                    <ItemCount stockPro={stock} initial={1}/>
                    <Button onClick={() => setOpen(true)} variant={'contained'}>Detalles</Button>
                    <Modal handleClose={handleClose} open={open}>
                        <img src={`./${imagen}`}/>
                        <p>{descripcion}</p>
                    </Modal>
                </div>
            </CardContent>
        </Card>
    )
}
//exportamos el componente
export default CardItem