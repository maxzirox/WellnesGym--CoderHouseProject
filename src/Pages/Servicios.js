import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import serviciosMock from '../utils/serviciosMock'
import { useState, useEffect } from 'react'
import {Grid} from '@mui/material'
import '../css/servicios.css'

const Servicios = () => {
    const [servicio, setServicio] = useState([])

    const getServicios = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() =>{
            resolve(serviciosMock)
          }, 2000)
        })
      }
    
    useEffect( () => {
        //primer llamamos a la funcion que devuelve la promesa
        getServicios()
        //con el .then le decimos que cada vez que la promesa responda mueste un console.log
        .then( (respuesta) => {
        //console.log("respuesta promesa: ", response)
        setServicio(respuesta)
        })
    }, [])

    return (
        <>
        <div className='section-title text-center'>
          <h2>Agenda uno de nuestros servicios</h2>
        </div>
        
        { servicio.map((d, i) => (
                
                <Card className='cardServicios'  key={i} variant="outlined">
                <Typography gutterBottom variant="h5" component="div">
                    {d.job}
                  </Typography>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={`${d.img}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {d.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {d.text}
                  </Typography>
                </CardContent>
                <CardActions className='botonesServ'>
                  <Button className='btnServA' variant="outlined" size="small">Agendar</Button>
                  <Button className='btnServB' variant="outlined" size="small">Mas info</Button>
                </CardActions>
              </Card>
              
            
              ))
            }
        
        
      </>
    )
}

export default Servicios