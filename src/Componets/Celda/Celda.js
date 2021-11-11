import {useState} from 'react';



const Celda = ({src, cont, a}) => {
    const [enabled, setEnable] = useState(false);
    const imgFondo = <img className='img-card-fondo' src={src} alt="sin imagen"></img>
    const imgContent = <img className='img-card-content' src={cont} alt="sin imagen"></img>
    const content = enabled ? imgContent : imgFondo 
    return (
        <>
            <td onClick={()=>{setEnable(!enabled)}} className='celda'>
                {content}
            </td>
        </>
    );
};





export default Celda;
