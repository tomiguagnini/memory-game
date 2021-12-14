import React from 'react';
import Menu from '../Menu/Menu';
import { useState } from 'react';



const Header = ({setBkg}) => {
    const [activate, setActivate] = useState(false);

    return (
        <header>
                <span className="material-icons md-18" onClick={()=>setActivate(!activate)}>settings</span>
                <h1>Memory Game</h1>
                <div>
                    {activate ? <Menu setBkg={setBkg}/> : ''}
                </div> 
        </header>
    );
}

export default Header;
