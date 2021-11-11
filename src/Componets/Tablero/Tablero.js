import React from 'react';
import './Tablero.css';
import Celda from './Celda';




const Tablero = () => {
    return (
        <div>
            <img src='https://yt3.ggpht.com/yti/APfAmoFpjP8Y5C3BdxOEChw76WjA3VvtOqr90SH7iiTD8Wc=s88-c-k-c0x00ffffff-no-rj-mo'></img>
            <table className='tablero'>
                    <tbody>
                        <tr>
                        <Celda/>        
                        <Celda/>        
                        <Celda/>        
                        </tr>       
                        <tr>
                        <Celda/>        
                        <Celda/>        
                        <Celda/>        
                        </tr>       
                        <tr>
                        <Celda/>        
                        <Celda/>        
                        <Celda/>        
                        </tr>       
                        
                        
                    </tbody>
                </table>
        </div>
    );
}

export default Tablero;
