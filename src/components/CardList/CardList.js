import CardItem from '../Card/Card';
import {Container, Grid} from '@mui/material'
import {useState} from 'react';

const CardList = () => {
    const [stock, setStock] = useState(10)

    return(
        <Container>
            <h2>Productos destacados</h2>
        <Grid container className='generalContainer'>
          <Grid item md={3}>
            <CardItem titulo="Whey Gold standar" precio={45000} imagen={"./wheygold.jpg"} descripcion={"Aumento de masa muscular. Mejorar recuperación muscular. Complementar dietas de pérdida de peso. Complementar dietas bajas en proteínas y vegetarianos"} stock={stock}/>
          </Grid>
          <Grid item md={3}>
            <CardItem titulo="Isolate Whey Protein" precio={40000} imagen={"./wheyisolate.jpg"} descripcion={"Aumento de masa muscular. Mejorar recuperación muscular. Complementar dietas de pérdida de peso. Complementar dietas bajas en proteínas y vegetarianos"} stock={stock}/>
          </Grid>
          <Grid item md={3}>
            <CardItem titulo="Women Whey Protein" precio={45000} imagen={"./wheywomen.jpg"} descripcion={"Aumento de masa muscular. Mejorar recuperación muscular. Complementar dietas de pérdida de peso. Complementar dietas bajas en proteínas y vegetarianos"} stock={stock}/>
          </Grid>
        </Grid>
      </Container>
    )
}
export default CardList;