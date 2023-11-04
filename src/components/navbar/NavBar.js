import CartWidget from "../CartWidget/CartWidget";
// import logoEcommerce from "./assets/logoEcommerce.png";
import "./style.css";
import { NavLink, Link } from "react-router-dom";

function NavBar (){

    //<img src={logoEcommerce} alt="Logo Neo Ecommerce"/>
    return (

        <nav className="navbar">
            <div className="navbar-brand">
            <Link to="/"><h1>Filliskeb</h1></Link>
            
            <div className="navbar-menu">
                <ul>
                    <li><Link className="linkMenu" to="/">Inicio</Link></li>
                    <li><Link className="linkMenu" to="/category/cursos">Cursos</Link></li>
                    <li><Link className="linkMenu" to="/contacto">Log In</Link></li>
                </ul>

            </div>
            {<CartWidget/>}
            </div>
            
            
        </nav>

    )
}

export default NavBar;