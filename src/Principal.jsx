import {ColorChanger} from './ColorChanger'
import { NavBar } from './components/NavBar'
import './index.css'
import { Conten } from './components/Conten'
import { useState } from 'react'
import { AplicaColor } from './AplicaColor'
import { useConter } from './hooks/useCounter'
import { AppTaskList } from './TaskList'

export const Principal = () => {
 
    ////////////////////////////TODO PARA PREGUNTA 1/////////////////////////////////////////////
    const [mostrarComponente, setMostrarComponente] = useState(null)
    const [selectedColor, setSelectedColor] = useState('white') // Estado para almacenar el color seleccionado
    const [SelectedDime, setSelectedDime] = useState('200px') // Estado para almacenar el color seleccionado
    /*const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow']) */// Array de colores
    const colors = ['RED', 'BLUE', 'GREEN', 'YELLOW']
    /*const {counter, handleAdd, handleReset, handRest} = useConter()*/
    const dimension = [{
            id: 1,
            name: "200px x 200px",
            value: '200px',
        },{
            id: 2,
            name: "300px x 300px",
            value: '300px',
        },{
            id: 3,
            name: "400px x 400px",
            value: '400px',
         }]

    const mostrarColorChanger = () => {
        setMostrarComponente('ColorChanger')
    }

    const mostrarTaskList = () => {
        setMostrarComponente('TaskList')
    }

    const limpiarContenido = () => {
        setMostrarComponente(null)
    }

     ////////////////////////////////////////////////////
    return(
        <main>
            <NavBar />
            <Conten 
                mostrarColorChanger={mostrarColorChanger}
                mostrarTaskList={mostrarTaskList}
                limpiarContenido={limpiarContenido}
             />
            {mostrarComponente === 'ColorChanger' && <ColorChanger color={selectedColor} dimension={SelectedDime} />}
            {mostrarComponente === 'TaskList' && <AppTaskList />}

            {mostrarComponente === 'ColorChanger' && 
            <div className='txt1'>SELECCIONE UN COLOR Y DIMENSIÓN
            </div>}
            {mostrarComponente === 'ColorChanger' && (<AplicaColor
                colors={colors}
                dimension={dimension}
                setSelectedColor={setSelectedColor}
                setSelectedDime={setSelectedDime}
            />)}
        </main>
    )
}