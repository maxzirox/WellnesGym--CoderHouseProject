import { Button, TextField, Grid } from '@mui/material'
import { useState } from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const Hours = (actualizar) =>{
    const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const [formValue, setFormValue] = useState({
        nombre: '',
        mail: '',
        horario: ''
        
    })

    const handleChanges = (e, newValue) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
    };
  
    const onAdd = (e) =>{
        e.preventDefault()
        actualizar({...formValue, horario: value})
    }

    return(
        <Grid item container direction="column" xs={12} sm={12}>
      
        <TextField
          required
          id="nombre"
          name="nombre"
          label="Nombre"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          value={formValue.nombre}
          onChange={handleChanges}
          sx={{ width: 250, alignSelf: 'center', marginTop: 2 }}
        />
        <TextField
          required
          id="mail"
          name="mail"
          label="Mail"
          fullWidth
          autoComplete="Mail"
          variant="standard"
          value={formValue.mail}
          onChange={handleChanges}
          sx={{ width: 250, alignSelf: 'center', marginTop: 2 }}
        />
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button
          sx={{ width: 250, alignSelf: 'center', marginTop: 2 }}
          type='button'
          onClick={onAdd}
        >
            Agendar
        </Button>
    </Grid>
    )
}

export default Hours