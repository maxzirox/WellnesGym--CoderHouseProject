import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CartContext from '../context/CartContext';
import { Button } from '@mui/material'
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ItemCount from '../components/ItemCount/ItemCount';
import { Link } from 'react-router-dom'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Carrito = () =>{
    const { cartListItems } = useContext(CartContext)
    
    const { removeAllCart } = useContext(CartContext)
    const { removeProductToCart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const [contador, setContador] = useState(0)
    
    return(
            
            
            <>
            <h1>Carrito de compra</h1>
            
            <div>
            {cartListItems.length === 0 && (

                <p>No hay productos agregados</p>

            )}
            {cartListItems.map((item) => {
                console.log("item de widget", item);
                return (
                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 500,
                            flexGrow: 1,
                            backgroundColor: 'orange',
                        }}
                        key={item.id}
                    >
                        <Grid container spacing={4}>
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt={item.titulo} src={`/${item.imagen}`} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {item.titulo}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {item.categoria}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Id: {item.id}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Cantidad: {item.cantidad}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <DeleteIcon
                                            onClick={() => removeProductToCart(item)} />
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle2" component="div">
                                        {item.precio * item.cantidad}clp
                                    </Typography>

                                </Grid>

                            </Grid>

                        </Grid>
                    </Paper>);
            })}

        </div>
            <ItemCount
                stock={cartListItems.stock}
                actualizar={setContador}
                contador={contador} 
            />
                <Button variant='outlined' style={{ background: 'red', color: 'white'}} onClick={removeAllCart}>Borrar Todo</Button>
                <Button variant='outlined' style={{ background: 'orange', color: 'white', marginLeft: 10}}>Pagar</Button></>

            
        
    )
}

export default Carrito