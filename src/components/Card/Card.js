import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material'
import './Card.css'
//creamos un componente funcional en una constante funcional de tipo flecha y le pasamos propiedades
const CardItem = ({ imagen, titulo, precio }) => {
    //desectructuramos el objeto y le indicamos las propiedades  a nuestra constante props
    //const { imagen, titulo, precio } = props
    //siempre retorna algo
    return(
        <Card className="card" sx={{ minWidth: 275, minHeight: 300 }}>
            <CardContent className='cardContenedor'>
                <div className="cardItem">
                    <div>
                        <img src={`./${imagen}`}/>
                    </div>
                    <p>{titulo}</p>
                    <span>$ {precio}</span>
                    <Button variant={'contained'}>Detalles</Button>
                </div>
            </CardContent>
        </Card>
    )
}
//exportamos el componente
export default CardItem