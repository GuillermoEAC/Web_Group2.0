// src/components/navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import FomexLogocompleto from "../assets/img/FomexLogocompleto.png";
// import { Icons } from "../assets/icons/icons";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/nosotros", label: "Nosotros" },
    { path: "/servicios", label: "Servicios" },
    { path: "/proyectos", label: "Proyectos" },
    { path: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-40 text-white">
      {/* 2. BARRA DE NAVEGACIÓN */}
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex-shrink-0">
            <img
              src={FomexLogocompleto}
              alt="Grupo Fomex Logo"
              className="h-16  cursor-pointer"
              onClick={navLinks.inicio}
            />
          </Link>
        </div>

        <div className="bg-transparent py-4  mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enlaces de Navegación  */}
          <div className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white hover:text-brand-green font-medium tracking-wider uppercase text-sm pb-1 border-b-2 border-transparent hover:border-brand-green transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Menú Mobile */}
          <button className="lg:hidden text-2xl hover:text-brand-green">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
