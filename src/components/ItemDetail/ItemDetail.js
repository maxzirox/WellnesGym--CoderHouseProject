import { Container, Divider, Grid, Paper, Typography} from '@mui/material';
import Modal from '../Modal/Modal'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'


const ItemDetail = ({ data }) => {
  
  return(
      
      <Container maxWidth='lg'>
          
          
      <Paper  variant="outlined">
      <h2>{data.titulo}</h2>
      <Grid container spacing={2} alignItems="center" justifyContent="space-evenly" flexWrap='wrap'>
      <div className="detail-product-image">
              <img src={`/${data.imagen}`} alt="imgProduct"/>
          </div>
          <Grid >
              <Paper elevation={4}>
              <Container className='controlContainer'>
              <Grid container direction="column" justifyContent="center" alignItems="flex-end">
              
                  <Grid textAlign='center'><h3> $ {data.precio}</h3></Grid>
                  <ItemCount stockPro={data.stock} initial={1}/>
              </Grid>
              </Container >
              </Paper>
          </Grid>
      </Grid>
      <h3>Descripción:</h3>
      <Typography variant="body1" margin="20px">{data.descripcion}</Typography>
      </Paper>
      <Divider variant="middle" />
  
  </Container>
  )
  }
export default ItemDetail