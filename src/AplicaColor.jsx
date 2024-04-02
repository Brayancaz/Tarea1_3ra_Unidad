export const AplicaColor = ({ colors,dimension, setSelectedColor,setSelectedDime }) => {
        ///////////////////////////
        const handleChangeColor = (e) => {
            setSelectedColor(e.target.value) // Actualizar el color seleccionado
        }
        ///////////////////////////
        const handleChangedime = (e) =>{
            setSelectedDime(e.target.value)
        }

    
        const selector = {
            display: 'flex',
            justifyContent: 'center',
            margin: '15px',
        };
        /////////////////////////////

    return(
        <div style={selector}>
            <select onChange={handleChangeColor}>
                {colors.map((color, index) => (
                    <option key={index} value={color}>
                        {color}
                    </option>
                ))}
            </select>
            <select onChange={handleChangedime}>
            {dimension.map((data, index) => (
                    <option key={data.id} value={data.value}>
                        {data.name}
                    </option>
                ))}
                
            </select>

        </div>
    )

}