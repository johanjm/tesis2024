import { useState } from "react"
import { Perfil } from "./Perfil"
import { Busqueda } from "./Busqueda"
import { Formulario } from "./Formulario"


export function Home({user, setUser}){
    const [menu, setMenu] = useState(0)

    const handleLogout = () =>{
        setUser([]) 
    }
    const inicio = () =>{
        setMenu(0)
    }
    const busqueda = () =>{
        setMenu(1)
    }
    const perfil = () =>{
        setMenu(2)
    }
    
    return(
    
        <div>
            <div>
            <button onClick={inicio}>Inicio</button>
            <button onClick={busqueda}>Busqueda</button>
            <button onClick={perfil}>Perfil</button>
            <button color="red" onClick={handleLogout}>Cerrar Sesion</button>
            </div>
            
            {
                menu>0
                ? menu==1
                ? <Busqueda />
                : <Perfil usuario={user} />
                : <h1>pagina de inicio</h1>
            }
        </div>
    )
}