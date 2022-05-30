import { dividerClasses } from "@mui/material"
import Item from '../ItemDetail/Item'
import {Grid} from '@mui/material'

const ItemDetail = ({data}) => {
    console.log("data desde ItemDetail: ", data)
    return(
        <>
        <Grid container spacing={2} className='generalContainer'>
          
                  <Grid  key={data.id}>
                    <Item titulo={data.titulo} precio={data.precio} imagen={data.imagen} descripcion={data.descripcion} stock={data.stock}/>
                  </Grid>
        </Grid>
        
      </>
        
    )
}

export default ItemDetail