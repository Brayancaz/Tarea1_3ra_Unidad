export const ColorChanger = ({color,dimension}) =>{

    const cuadro = {
        width: dimension,
        height: dimension,
        backgroundColor: color,
        border: '2px solid',
    }
    const contenedorStyle = {
        display: 'flex',
        justifyContent: 'center',
    };
    /*console.log(color)*/

    return(
        <div style={contenedorStyle}>
            <div style={cuadro}>
            </div>
        </div>
    )
}