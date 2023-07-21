import { Tab } from "bootstrap"
import { useState } from "react"

function TopBar(){
    return <table class="table-container" style={{width: "100%"}}>
    <tr>
        <td style={{width: "33%"}}><img src="https://cdn-icons-png.flaticon.com/512/56/56763.png" style={{width : "6%"}}/></td>
        <td style={{width: "33%", textAlign: "center"}}><div style={{fontSize:30}}>Atencion de Citas</div></td>
        <td style={{width: "33%", textAlign: "right"}}><img src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6" style={{width : "10%"}}/></td>
    </tr>
</table>
}

function BarraNav(){
    return <div className="col-md-1 barranav"><ul>
        <li>Principal</li>
        <li>Perfil</li>
        <li>Horarios</li></ul></div>
}

function Info(){
    return <div>
        <table className="tablaInfo">
            <tr>
                <td><h1 style={{fontSize:20, marginTop:30}}>Mi Perfil</h1></td>
                <td><button class="cancelar">Cancelar</button></td>
                <td><button class="guardar">Guardar</button></td>
            </tr>
        </table>
        <hr></hr>
        <h2 style={{fontSize:15}}>Informacion Personal</h2>
        <table>
            <tr>
                <td style={{width: "20%"}}><div className="Contenedor"><br/><input type="text" class="texto" name="" id="" /><label class="label">Nombre</label></div></td>
                <td style={{width: "20%"}}><div className="Contenedor"><br/><input type="text" class="texto" name="" id=""/><label class="label">Apellidos</label></div></td>
                <td style={{width: "20%"}}><div className="Contenedor"><br/><input type="text" class="texto" name="" id=""/><label class="label">Tipo de Documento</label></div></td>
                <td style={{width: "20%"}}><img src="https://media.tenor.com/zHp6t8Cg4SsAAAAM/morbius-rawr.gif" alt=""/></td></tr>
            
            <tr>
            <td><div className="Contenedor"><br/><input type="text" class="texto" name="" id=""/><label class="label">Rol</label></div></td>
                <td></td>
                <td><div className="Contenedor"><br/><input type="text" class="texto" name="" id=""/><label class="label">Numero</label></div></td>
                <td>Adjuntar foto</td>
            </tr>
        </table>
    </div>
}

function Datos(){
    const [opt, setOpt] = useState(0)
    let x
    if (opt === 0){
        x = <table className="tablaDatos"><br/>
        <tr>
            <td><div className="Contenedor"><br/><input type="text" class="texto3" name="" id=""/><label class="label3">Ususario</label></div></td>
        </tr>
        <tr>
            <td><div className="Contenedor"><input type="password" class="texto3" name="" id=""/><label class="label3">Contraseña Actual</label></div></td>
            <td><div className="Contenedor"><input type="password" class="texto3" name="" id="" /><label class="label3">Nueva Contraseña</label></div></td>
            <td><div className="Contenedor"><input type="password" class="texto3" name="" id="" /><label class="label3">Repetir Contraseña</label></div></td>
        </tr>
        </table>
    }
    else if(opt === 1){
        x = <table className="tablaDatos"><br/>
        <tr>
            <td><div className="Contenedor"><input type="text" class="texto3"/><label htmlFor="" class="label3">Universidad</label></div></td>
            <td><div className="Contenedor"><input type="text" class="texto3" name="" id=""/><label htmlFor="" class="label3">Agregar cursos</label></div></td>
        </tr>
        <tr>
            <td><div className="Contenedor"><br/><input type="text" class="texto3" name=""/><label class="label3">Carrera</label></div></td>
        </tr>   
        </table>
    }
    else{
        x = <table className="tablaDatos"><br/>
            <tr><div className="Contenedor"><br/><input type="text" class="texto2" name=""/><label class="label2">Titulo</label></div></tr>
            <tr><div className="Contenedor"><br/><input type="text" class="texto2" name=""/><label class="label2">Descripcion</label></div></tr>
            </table>
    }
    return <div><button className="datos" onClick={()=>setOpt(0)}>Datos de usuario</button><button className="datos" onClick={()=>setOpt(1)}>Universidad</button><button className="datos" onClick={()=>setOpt(2)}>Presentacion</button>
    {x}
    </div>
}

function Perfil() {
    return <div>
        <TopBar/>
        <div className="row">
        <BarraNav/>
        <div className="col-md-11"><Info/>
        <Datos/></div>
    </div>
    </div>
}

export default Perfil