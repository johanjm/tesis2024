import { useEffect, useState } from "react"
import { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );





export function Busqueda(){
/*
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
      );
      const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
      const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];
      const labels = [100, 200, 300, 400, 500, 600, 700];
      
      const options = {
        responsive: true,
      }
      */

    const [filtro1, setFiltro1]= useState("")
    const [filtro2, setFiltro2]= useState("")
    const [filtro3, setFiltro3]= useState("")
    const [filtro4, setFiltro4]= useState("")
    const [web, setWeb]= useState("")
    const [error, setError]= useState(false)
    const [error1, setError1]= useState(false)
    const [datos, setDatos]= useState("")
    const [ana, setAna]= useState(0)
    const [fi1 ,setFi1]= useState(0)
    const [fi2 ,setFi2]= useState(0)
    const [fi3 ,setFi3]= useState(0)
    const [fi4 ,setFi4]= useState(0)
    const [tabla, setTabla]= useState({})
    var num1=0, num2=0, num3=0, num4=0
    /*const data ={
        datasets: [
          {
            label: "Mis datos",
            data: scores,
            tension: 0.3,
            borderColor: "rgb(75, 192, 192)",
            pointRadius: 6,
            pointBackgroundColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.3)",
          },
          {
            label: "Mis datos (2)",
            tension: 0.3,
            data: scores2,
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.3)",
            pointRadius: 6,
          },
        ],
        labels,
      };
    */
  
    useEffect(() =>{    
        fetch("https://data.ny.gov/api/views/d6yy-54nr/rows.json?accessType=DOWNLOAD")
        .then((response) => response.json())
        .then(datos =>{setDatos(JSON.stringify(datos))})
    },[]
    )


    const handleSubmit = (e) => {
        e.preventDefault()

        if (filtro1 == ""){
            setError(true)
            return
        }
        setError(false)
        setAna(datos.length)
        num1=0
        num2=0
        num3=0
        num4=0

        datos.split("").map((index) =>{
            if(index == filtro1){
                num1=num1+1
            }
            if(index == filtro2){
                num2=num2+1
            }
        } 
        )
        datos.split(" ").map((index) =>{
            if(index == filtro3){
                num3=num3+1
            }     
            if(index == filtro4){
                num4=num4+1
            }   
        }
        )
        console.log(datos)
        console.log(datos.split(""))
        console.log(datos.split(" "))
        setFi1(num1)
        setFi2(num2)
        setFi3(num3)
        setFi4(num4)
        setTabla({"caracteres totales": ana, filtro1: fi1, filtro2: fi2, filtro3: fi3, filtro4: fi4})
        
          
    }
    const handleWeb = (e) => {
        e.preventDefault()

        if (web == ""){
            setError1(true)
            return
        }
        setError1(false)
    }

    return(
        <><div>
            <section>
            <h1>Pagina de Busqueda</h1>
            <h3>Pagina web: </h3>
                <form className="formulario"
                onSubmit={handleWeb}>
                <input type= "text" 
                value={web}
                onChange={e => setWeb(e.target.value)}
                />
                <button>verificar</button>
            </form>
            {error1 && <p>Pagina web no valida</p>}
        </section>
        </div><section>
                <h1>Filtros</h1>
                <form className="formulario"
                    onSubmit={handleSubmit}>
                    Filtro para un solo caracter
                    <input type="text"
                        value={filtro1}
                        onChange={e => setFiltro1(e.target.value)} />
                    <input type="text"
                        value={filtro2}
                        onChange={e => setFiltro2(e.target.value)} />
                    filtro para palabras
                    <input type="text"
                        value={filtro3}
                        onChange={e => setFiltro3(e.target.value)} />
                        <input type="text"
                        value={filtro4}
                        onChange={e => setFiltro4(e.target.value)} />
                    <button>Buscar</button>
                </form>
                {error && <p>Debe colocar almenos un filtro</p>}
            </section>

            <h2>RESULTADOS</h2>
            <table>
                <tr>
                    <td>Total de caracteres encontrados:</td><td>{ana}</td>
                </tr>
                <tr>
                    <td>Total "{filtro1}" encontrados:</td><td>{fi1}</td>
                </tr>
                <tr>
                    <td>Total "{filtro2}" encontrados:</td><td>{fi2}</td>
                </tr>
                <tr>
                    <td>Total "{filtro3}" encontrados:</td><td>{fi3}</td>
                </tr>
                <tr>
                    <td>Total "{filtro4}" encontrados:</td><td>{fi4}</td>
                </tr>
            </table>
            </>
            
    )
}
