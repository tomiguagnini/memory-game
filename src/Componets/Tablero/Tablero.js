import React from 'react';
import './Tablero.css';
import Celda from '../Celda/Celda';
import Fondos from '../../assets/Fondos'
import Frutas from '../../assets/Frutas'

const cont = Frutas.limon;
const src = Fondos[3]

const Tablero = () => {
    return (
        <div>
            <table className='tablero'>
                    <tbody >
                        <tr>
                        <Celda src={src} cont={cont} />        
                        <Celda src={src} cont={cont}/>        
                        <Celda src={src} cont={cont}/>
                        </tr>       
                        <tr>
                        <Celda src={src} cont={cont}/>
                        <Celda src={src} cont={cont}/>
                        <Celda src={src} cont={cont}/>
                        </tr>       
                        <tr>
                        <Celda src={src} cont={cont}/>
                        <Celda src={src} cont={cont}/>
                        <Celda src={src} cont={cont}/>    
                        </tr>       
                        
                        
                    </tbody>
                </table>
        </div>
    );
}

export default Tablero;
