import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importar Componentes de Maquetacion
import Header from './components/Header';
import Slider from './components/Slider';
import SeccionPruebas from './components/SeccionPruebas';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function holaMundo(nombre, edad){
  var presentacion = <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>y tengo {edad} años</h3>
  </div>
  return presentacion;
}

function App() {
  var nombre = "Cristian Perez";
  var edad = 27;

  return (
    <div className="App">
      <Header/>
      <Slider/>
      
      <div className="center">
        <SeccionPruebas/>
        <Sidebar/>
      </div>
      <div className="clearfix"></div>
      <Footer/>

    </div>
  );
}

export default App;
