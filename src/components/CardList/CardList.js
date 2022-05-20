import CardItem from '../Card/Card';
import {Container, Grid} from '@mui/material'

const CardList = () => {
    const productos = [
        {
            titulo: 'Whey Gold stadar',
            precio: 3500,
            imagen: 'wheygold.jpg'
        },
        {
            titulo: 'Women Whey Protein',
            precio: 4500,
            imagen: 'wheywomen.jpg'
        },
        {
            titulo: 'Isolate Whey Protein',
            precio: 3000,
            imagen: 'wheyisolate.jpg'
        }
    ]
    return(
        <Container>
            <h2>Productos destacados</h2>
        <Grid container className='generalContainer'>
          <Grid item md={3}>
            <CardItem titulo="Whey Gold standar" precio={35000} imagen={"./wheygold.jpg"}/>
          </Grid>
          <Grid item md={3}>
            <CardItem titulo="Women Whey Protein" precio={45000} imagen={"./wheywomen.jpg"}/>
          </Grid>
          <Grid item md={3}>
            <CardItem titulo="Isolate Whey Protein" precio={30000} imagen={"./wheyisolate.jpg"}/>
          </Grid>
        </Grid>
      </Container>
    )
}
export default CardList;