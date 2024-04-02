import { useState } from "react"
/////////////////
export const AppTaskList = () => {

    const [tareas, setTareas] = useState([{
            id: 1,
            name: "Lavarse los dientes",
            status: false
        }, {
            id: 2,
            name: "Tomar desayuno",
            status: false
        }, {
            id: 3,
            name: "Tender la cama",
            status: false
        }, {
            id: 4,
            name: "Hacer la tarea",
            status: false    
    }])


    const [newTarea, setNewTarea] = useState ({
        id: "",
        name:"",
        status: false

    })

    const handleInput = (event) =>{
        setNewTarea({
        id: tareas.length + 1,
        name: event.target.value,
        status: false
        })
    }

    const handleAddTarea = (event) =>{
        event.preventDefault() ///evita que se recarge la pagina
        setTareas([...tareas,newTarea])
    }


    /// PARA COMPLETAR TAREAS
    const handleUpdateTarea = (id) => {
        //console.log("id",id)
        const updateTarea = tareas.map((tarea)=>(tarea.id === id ? {...tarea, status:true}: tarea))
        // map -> devuelve un array de objetos
        // forech -> no devuelve un array de objetos

        setTareas(updateTarea)

    }


    //// PARA BORRAR TAREAS    
    const handleDelete = (id) => {
        const deleteTarea = tareas.filter((tarea)=> tarea.id !==id)
        setTareas(deleteTarea)
  
    }

    /////// REGREAR A FALTA
    const handleFalta = (id) => {
        const updateTarea = tareas.map((tarea)=>(tarea.id === id ? {...tarea, status:false}: tarea))
        setTareas(updateTarea)
    }

    //////////////////////////////////////////////////////////////////////////
    return(
        <div className="tar">
            <p className="txt2"> Aplicacion de Tarea</p>
            <hr />
            {/* formulario para ingresar tarea */}
            <form onSubmit={handleAddTarea}>
                <label htmlFor="tarea"> Ingresar una tarea </label>
                <br />
                <input onChange={handleInput} type="text" placeholder="Digite una nueva tarea"/>
                <input type="submit"  />
            </form>
            <hr />
            {/* para mostrar las tareas hacemos un bucle */}
            {tareas.map((tarea)=> (
                <div key={tarea.id}>
                    <p>
                        {tarea.name} - <strong>{tarea.status ? "" : "Falta :("}</strong>
                        <strong className="t3">{tarea.status ? "Completada :) !" : ""}</strong>
                        
                    </p>
                    <button onClick={()=>handleUpdateTarea(tarea.id)}>Terminado</button>
                    <button onClick={()=>handleFalta(tarea.id)}>Falta</button>
                    <button onClick={()=>handleDelete(tarea.id)}>Borrar</button>
                    <hr />
                </div>

            ))}
        </div>
    )

} 