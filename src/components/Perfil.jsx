import { useState } from "react"
export function Perfil (usuario){
    const [user, SetUser] = useState([])
    console.log(usuario[[0]], "hola1")
    console.log(usuario, "hola")

    return(
        <div>
            <h1>Pagina de Perfil </h1>
            Nombre: {usuario[usuario[0]]}
            Correo: {usuario[2]}
        </div>
        
    )
}