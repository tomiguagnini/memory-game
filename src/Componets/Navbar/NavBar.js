import {MenuItems} from './MenuItems';
import './NavBar.css'; 
function NavBar(){
    return(
        <nav className="NavBarItems">
            <ul>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}


export default NavBar;