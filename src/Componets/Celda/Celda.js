import {useState} from 'react';



const Celda = ({src, cont}) => {
    const [state, setstate] = useState(true);
    const imgFondo = <img className='img-card-fondo' src={src} alt="sin imagen"></img>
    const imgContent = <img className='img-card-content' src={cont} alt="sin imagen"></img>
    const content = state ? imgFondo : imgContent 

    return (
        <>
            <td onClick={()=>{setstate(!state)}} className='celda'>
                {content}
            </td>
        </>
    );
};





export default Celda;
