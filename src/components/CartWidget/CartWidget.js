import ShopIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import CartContext from '../../context/CartContext';
import Menu from '@mui/material/Menu';
import { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CartWidget = () =>{
    const { cartListItems } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return(
        
            <><ShopIcon
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
            <div>
                {cartListItems.length === 0 && (
                    <>
                        <p>No hay productos agregados</p>
                    </>
                )}
                {cartListItems.map((item) => {
                    console.log("item desde cartwidget: ", item.categoria)
                    return(<Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 500,
                            flexGrow: 1,
                            backgroundColor: 'orange',
                        }}
                        key={item.data.id} 
                    >
                        <Grid container spacing={4}  >
                            <Grid item>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt={item.data.titulo} src={`/${item.data.imagen}`} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {item.data.titulo}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {item.data.categoria}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Id: {item.data.id}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                            <DeleteIcon />
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle2" component="div">
                                        {item.data.precio}clp
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>)
                })}
            </div>
            </Menu>
            </>
            
        
    )
}

export default CartWidget