export const Conten = ({ mostrarColorChanger, mostrarTaskList, limpiarContenido }) => {

    return (
        <div className="cnt_btn">
            <button className="button-58" type="button" onClick={mostrarColorChanger}>
                Pregunta N° 1
            </button>
            <button className="button-58" type="button" onClick={mostrarTaskList}>
                Pregunta N° 2
            </button>
            <button className="button-58" type="button" onClick={limpiarContenido}>
                Limpiar
            </button>

        </div>
    )
}