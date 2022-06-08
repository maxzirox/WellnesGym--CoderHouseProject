import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material'
import './Card.css'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useContext, useState } from 'react'


//creamos un componente funcional en una constante funcional de tipo flecha y le pasamos propiedades
const CardItem = ({ imagen, titulo, precio, descripcion, stock, id, categoria }) => {

    const { addProductToCart } = useContext(CartContext)
    const { removeProductToCart } = useContext(CartContext)
    const [showButton , setShowButton] = useState(false)
    
    const onAdd = () =>{
        addProductToCart({ imagen, titulo, precio, descripcion, stock, id, categoria })
        setShowButton(true)
    }

    const onRemove = () => {
        removeProductToCart({ imagen, titulo, precio, descripcion, stock, id, categoria })
        setShowButton(false)
    }
    
    /*/en una constante de array indicamos el nombre del estado y la variable modificadora y le asignamos un estado  inicial con useState de react
    //hooks de estados
    const [open, setOpen] = useState(false)
    const handleClose = () => {
    setOpen(false)
    }

    **agregar onClick={() => setOpen(true)} al button si quiero abrir un modal de detalle

    agregar <Modal handleClose={handleClose} open={open}>
                        <ItemDetailContainer/>
                    </Modal>
    debajo de button para renderizar el modal al cambiar el estado de close a open o de false a true
  */
    return(

        <CardContent className='cardContenedor'>
            <div className="cardItem">    
            <img src={`/${imagen}`} alt="Producto"/>       
            <h3>{titulo}</h3>
            <Button  variant={'contained'} style={{backgroundColor: 'orange'}} >
                <Link to={`/productos/${id}`} style={ {textDecoration: 'none', color: 'aliceblue' } } >Detalles</Link>
            </Button>
            { !showButton ?
                    <Button variant='contained' style={{ backgroundColor: '#FF5900', marginTop: 10 }} onClick={onAdd}>Agregar</Button>
                    :
                    <Button variant='contained' style={{ backgroundColor: '#FA3004' , marginTop: 10 }} onClick={onRemove}>Eliminar</Button>}
             
                     
            </div>
        </CardContent>
        
        
    )
}
//exportamos el componente
export default CardItem