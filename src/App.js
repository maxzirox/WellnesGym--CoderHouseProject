import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardListContainer from './components/CardList/CardListContainer';
import SnackBar from './components/SnackBar/SnackBar';
import Banner from './components/Banner/Banner'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Membresias from './Pages/Membresias';
import Detalle from './Pages/Detalle'




function App() {
  //llamamos una api utilizando fetch que nos devuelve una lista de usuarios
  /*useEffect( () => {
    fetch('https://pokeapi.co/api/v2/ability/battle-armor')
    .then((response) => {
      return response.json()
    })
    .then((res) =>{
      console.log("respuesta: ", res)
    })
  },[])*/
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Banner/>
      <h1>Bienvenidos a Wellness GYM</h1>
        <Routes>
          <Route exact path="/productos" element={<CardListContainer/>} />
          <Route exact path="/membresias" element={<Membresias />} />
          <Route exact path="/productos/:id" element={<Detalle/>} />
        </Routes>
      
      
      </BrowserRouter>
      

     
      {/*<div>
        <CardListContainer/>
      </div>*/}
    </div>
  );
}

export default App;
