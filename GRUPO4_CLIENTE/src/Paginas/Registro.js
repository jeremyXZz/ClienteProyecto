import './Registro.css';


function Registro() {

  function procesarDato(data) {
    document.getElementById("resultado").innerText = data;
  }

  function handleClick(){
    //console.log("Se va a almacenar el producto");
    let cor = document.getElementById("correo").value;
    let pass = document.getElementById("password").value;
    let nom = document.getElementById("nombre").value;
    let apel = document.getElementById("apellido").value;
    let tip = document.getElementById("tipodni").value;
    let Dni = document.getElementById("dni").value;
    let Rol = document.getElementById("rol").value;

    const URL = "http://localhost:3001/guardar-estudiante/"+ cor + "/" + pass + "/" + nom + "/" + apel + "/" + tip + "/" + Dni + "/" + Rol;
    fetch(URL)
      .then(response => response.text())
      .then(procesarDato)
      .catch(error => console.error(error))
  }

  return <div class="Sistema">
    <form action="" class="Estructura">
      <title>REGISTRO</title>
      <h1 class="Titulo">SISTEMA DE CITAS PARA ATENCIÓN A ESTUDIANTES </h1>
      <h2 class="Titulo">Página de registro</h2>            
      
      <div class="Contenedor">
        <input type="email" class="texto" id="correo"></input>
        <label for="" class="label">Correo electrónico</label>
      </div>
                  
      <div class="Contenedor">
        <input type="password" class="texto" id="password"></input>
        <label for="" class="label">Password</label>
      </div>
      <div class="Contenedor">
        <input type="password" class="texto"></input>
        <label for="" class="label">Ingrese Password de nuevo</label>
      </div>

      <p>Datos Personales</p>
      <div class="Contenedor">
        <input type="text" class="texto" id="nombre"></input>
        <label for="" class="label">Nombres</label>
      </div>
      <div class="Contenedor">
        <input type="text" class="texto" id="apellido"></input>
        <label for="" class="label">Apellidos</label>
      </div>
      <div class="Contenedor">
        <input type="text" class="texto" id="tipodni"></input>
        <label for="" class="label">Tipo Documento</label>
      </div>
      <div class="Contenedor">
        <input type="text" class="texto" id="dni"></input>
        <label for="" class="label">N° Documento</label>
      </div>
      <div class="Contenedor">
        <input type="text" class="texto" id="rol"></input>
        <label for="" class="label">Rol</label>
      </div>
      <div class = "boton">
        <button onClick={handleClick} class="botonR">Registrar</button>
        <span id = "resultado"></span>
      </div>
        
    </form>

  </div>
}

export default Registro;