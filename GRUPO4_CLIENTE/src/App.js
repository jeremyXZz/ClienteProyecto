import { Routes, Route } from "react-router-dom"
import  Login  from "./Paginas/Login"
import  Registro  from "./Paginas/Registro"
import AppEstudiante from "./Paginas/AppEstudiante"
import CrearCita from "./Paginas/CrearCita";
import Profes from "./Paginas/Profes";
import PerfilUsuario from "./Paginas/PerApp";
import CitasPaneles from "./Paginas/CitasPaneles";
import CitasProf from "./Paginas/CitasProf";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Registro" element={<Registro/>} />
        <Route path="/AppEstudiante" element={<AppEstudiante/>} />
        <Route path="/CrearCita" element={<CrearCita/>} />
        <Route path="/Profes" element={<Profes/>} />
        <Route path="/Perfil" element={<PerfilUsuario/>} />
        <Route path="/Citas" element={<CitasPaneles/>} />
        <Route path="/CitasProf" element={<CitasProf/>} />
      </Routes>

    </>
  );
}

export default App;
