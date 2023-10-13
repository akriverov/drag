import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

// Definición de la función Navbar
function Navbar() {
    // Creación de una referencia para el elemento 'nav'
    const navRef = useRef();
  
    // Función para mostrar/ocultar el navbar en dispositivos móviles
    const showNavbar = () => {
      // Utiliza la referencia 'navRef' para acceder al elemento 'nav'
      // y alternar la clase "responsive_nav" para mostrar u ocultar el navbar
      navRef.current.classList.toggle("responsive_nav");
    };
  
    return (
      <header>
        <h3>LOGO</h3>
        {/* El elemento 'nav' utiliza la referencia 'navRef' */}
        <nav ref={navRef}>
          <a href="/#">Inicio</a>
          <a href="/#">Explorar</a>
          <a href="/#">Comunidad</a>
          <a href="/#">Biblioteca</a>
          {/* Botón para cerrar el navbar en dispositivos móviles */}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        {/* Botón para abrir el navbar en dispositivos móviles */}
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    );
  }
  
  // Exporta la función Navbar como un componente reutilizable
  export default Navbar;
  