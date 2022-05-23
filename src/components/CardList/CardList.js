import CardItem from '../Card/Card';
import {Container, Grid} from '@mui/material'


const CardList = ({products}) => {
   
   
    return(
      <>
        <h2>Productos destacados</h2>
        <Grid container spacing={2} className='generalContainer'>
          {
            products.map( (producto) =>{
              return(
                  <Grid item md={3} key={producto.id}>
                    <CardItem titulo={producto.titulo} precio={producto.precio} imagen={producto.imagen} descripcion={producto.descripcion} stock={producto.stock}/>
                  </Grid>
              )
            })
          }
        </Grid>
        
      </>
    )
}
export default CardList;

