import CartWidget from "../CartWidget/CartWidget";
// import logoEcommerce from "./assets/logoEcommerce.png";
import "./style.css";
import { NavLink, Link } from "react-router-dom";

function NavBar (){

    //<img src={logoEcommerce} alt="Logo Neo Ecommerce"/>
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/">
                <h1>Filliskeb</h1>
            </Link>
            
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column">
                        <NavLink to={`/category/cursos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Cursos</NavLink>
                    </div>
                </div>
                
                
                
                
            </div>
            <CartWidget/>
            </div>
            
            
        </nav>

    )
}

export default NavBar;