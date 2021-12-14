import React from 'react';
import Fondos from '../../assets/Fondos';

const Menu = ({setBkg}) => {
    return (
        <div>
                <div className="item-fondo">
                    <img src={Fondos[0]} onClick={()=>setBkg(0)} alt="alt"></img>
                    <img src={Fondos[1]} onClick={()=>setBkg(1)} alt="alt"></img>
                    <img src={Fondos[2]} onClick={()=>setBkg(2)} alt="alt"></img>
                    <img src={Fondos[3]} onClick={()=>setBkg(3)} alt="alt"></img>
                    <img src={Fondos[4]} onClick={()=>setBkg(4)} alt="alt"></img>
                    <img src={Fondos[5]} onClick={()=>setBkg(5)} alt="alt"></img>
                </div>
                
        
        </div>
    );
}

export default Menu;
