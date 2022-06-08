import ShopIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CartContext from '../../context/CartContext';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material'
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ItemCount from '../ItemCount/ItemCount';
import { Conteo } from '../ItemDetail/ItemDetail'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CartWidget = () =>{
    const { cartListItems } = useContext(CartContext)
    const { cantidad } = useContext(CartContext)
    const { removeAllCart } = useContext(CartContext)
    const { removeProductToCart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return(
        
            <div>
                <ShopIcon
                color={'primary'}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-Menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button'
                }}
            >
            <div >
                {cartListItems.length === 0 && (
                    
                    <p>No hay productos agregados</p>
                    
                )}
                {cartListItems.map((item) => {
                    return(<Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 500,
                            flexGrow: 1,
                            backgroundColor: 'orange',
                        }}
                        key={item.id} 
                    >
                        <Grid container spacing={4}  >
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
                                            Cantidad: {cantidad}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                            <Conteo 
                                             data={item}
                                            />
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle2" component="div">
                                        {item.precio * cantidad}clp
                                    </Typography>
                                    
                                </Grid>
                                
                            </Grid>
                            <ItemCount/>
                        </Grid>
                    </Paper>)
                })}
                  
            </div>
            
            <Button variant='outlined' style={{background: 'orange'}} onClick={removeAllCart}>Borrar Todo</Button>
            </Menu>
            </div>
            
        
    )
}

export default CartWidget