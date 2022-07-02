import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import dataBase from '../../utils/firebaseConfig'
import TextField from '@mui/material/TextField';
import { Button, Grid  } from '@mui/material'
import Hours from '../Hours/Hours'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Grid
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </Grid>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Schedule = () => {
  
  const [success, setSuccess] = useState()

  const agendar = async (newAgenda) => {
    const agendaFirebase = collection(dataBase, 'agenda')
    const agendaDoc = await addDoc(agendaFirebase, newAgenda)
    setSuccess(agendaDoc.id)
  }

    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Lunes" {...a11yProps(0)} />
          <Tab label="Martes" {...a11yProps(1)} />
          <Tab label="Miercoles" {...a11yProps(2)} />
          <Tab label="Jueves" {...a11yProps(3)} />
          <Tab label="Viernes" {...a11yProps(4)} />
          <Tab label="Sabado" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Hours actualizar={agendar} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Hours actualizar={agendar} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Hours actualizar={agendar} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Hours actualizar={agendar} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Hours actualizar={agendar} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Hours actualizar={agendar} /> 
      </TabPanel>
    </Box>
    )
}

export default Schedule