import React, { useState } from 'react';
import "./CrearCita.css";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function CrearCita() {
    const [dia, setDia] = useState('');
    const [horInicio, setHorInicio] = useState('');
    const [horFin, setHorFin] = useState('');
    const [url, setUrl] = useState('');
    const [citasGuardadas, setCitasGuardadas] = useState([]);
  
    const handleDiaChange = (e) => {
      setDia(e.target.value);
    };
  
    const handleHorInicioChange = (e) => {
      setHorInicio(e.target.value);
    };
  
    const handleHorFinChange = (e) => {
      setHorFin(e.target.value);
    };
  
    const handleUrlChange = (e) => {
      setUrl(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (dia.trim() === '') {
        alert('Ingrese un dia');
        return;
      }
  
      if (horInicio.trim() === '') {
        alert('Ingrese una hora de inicio');
        return;
      }
  
      if (horFin.trim() === '') {
        alert('Ingrese una hora de fin');
        return;
      }
  
      if (url.trim() === '') {
        alert('Ingrese una url');
        return;
      }
  
      const nuevaCita ={
        dia: dia,
        horInicio: horInicio,
        horFin: horFin,
        url: url,
      };
  
      setCitasGuardadas([...citasGuardadas, nuevaCita]);
      setDia('');
      setHorInicio('');
      setHorFin('');
      setUrl('');
    }

    function procesarDato(data) {
      document.getElementById("resultado").innerText = data;
    }
  
    function handleClick(){
      //console.log("Se va a almacenar el producto");
      let fec = document.getElementById("fecha").value;
      let ini = document.getElementById("inicio").value;
      let fin = document.getElementById("fin").value;
      let url = document.getElementById("url").value;
  
      const URL = "http://localhost:3001/guardar-cita/"+ fec + "/" + ini + "/" + fin + "/" + url;
      fetch(URL)
        .then(response => response.text())
        .then(procesarDato)
        .catch(error => console.error(error))
    }
  
    return (
      <div>
        <h1 className='mititulo'>Mis horarios</h1>
        <hr />
        <div className='texto1'>Agregue sus horarios de disponibilidad durante la semana</div>
        <form onSubmit={handleSubmit}>
          <input type="date" value={dia} className="input1" id="fecha" onChange={handleDiaChange} />
          <input type="time" value={horInicio} className="input2" id="inicio" onChange={handleHorInicioChange} />
          <input type="time" value={horFin} className="input3" id="fin" onChange={handleHorFinChange} />
          <input type="text" value={url} className="input4" id="url" onChange={handleUrlChange} />
          <button onClick = {handleClick} type="submit" className='agregar'>Agregar</button>
          <span id = "resultado"></span>
        </form>
        <ul>
          {citasGuardadas.map((nuevaCita, index) => (
            <li className='linea' key={index}>
              {nuevaCita.dia} de {nuevaCita.horInicio} a {nuevaCita.horFin} en el enlace {nuevaCita.url}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: '#49454F' }}>
        <div className='navbar'>
          
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> <p className='AtencionCitas'>Atencion de Citas</p>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <CrearCita />
    </div>
    
  );
}

export default Navbar;