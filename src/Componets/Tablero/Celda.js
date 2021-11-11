import {useState} from 'react';



const Celda = () => {
    const [state, setstate] = useState(false);
    const src = "https://github.com/parzibyte/memoria-python/blob/main/assets/pi%C3%B1a.png"
    const content = state ? 'A' : 1 

    return (
        <>
                <img src={src}></img>
            <td onClick={()=>{setstate(!state)}} className='celda'>
                    {content}
            </td>
        </>
    );
};





export default Celda;
