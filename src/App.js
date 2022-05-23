import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardListContainer from './components/CardList/CardListContainer';
import SnackBar from './components/SnackBar/SnackBar';
import Banner from './components/Banner/Banner'




function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <Banner/>
      </div>
      <h1>Bienvenidos a Wellness GYM</h1>
      <div>
        <CardListContainer/>
      </div>
    </div>
  );
}

export default App;
