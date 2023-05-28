import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login.jsx'
import Registro from './components/Registro';
import Footer from './components/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Inicio from './components/Inicio';
import FotosHotel from './components/FotosHotel';


function App() {
  return (
    <div className="App">
      <Navbar/>

        <Inicio />

      <Footer/>
    </div>
  );
}
export default App;
