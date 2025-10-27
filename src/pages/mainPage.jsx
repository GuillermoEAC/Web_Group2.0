//
import React from "react";
import { motion } from "framer-motion";
import img_Fondo from "../assets/img/Img_Fondo.png";
// import img_Flotante from "../assets/img/Img_Flotante.png"; // Asume la imagen flotante
import Navbar from "../components/navbar.jsx"; // 👈 Nuevo componente para el menú
import BodyMain from "../components/bodyMain.jsx";
import Footer from "../components/footer";

const MainPage = () => {
  return (
    <>
      {/*HEADER  */}
      <header className="relative w-full h-screen min-h-[700px] overflow-hidden bg-brand-dark">
        {/* Componente de Navegación  */}
        <Navbar />

        {/* Imagen/Patrón de Fondo */}
        <img
          src={img_Fondo}
          alt="Patrón de fondo abstracto"
          className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        />

        {/* Contenido Principal con Animación */}
        <div className="relative z-10 h-[calc(100%-100px)] max-w-[1400px] mx-auto px-8 flex items-center justify-start">
          {/* Contenedor del Texto y Botones */}
          <div className="w-full lg:w-1/2 text-white mt-10 lg:mt-0">
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-3"
            >
              Te presentamos nuestro grupo
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: 0.3,
              }}
            >
              Grupo Fomex
            </motion.h1>

            {/* Botón */}
            <motion.button
              className="bg-brand-green hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Conoce Nuestros Servicios
            </motion.button>
          </div>
        </div>

        {/* 4. Separador Curvo SVG (Para la forma de onda blanca) */}
        <svg
          className="absolute bottom-0 w-full h-32 text-[#F4F7FB] z-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,60 C300,120 700,0 1000,60 L1000,100 L0,100 Z"
          ></path>
        </svg>
      </header>

      {/* Body  */}
      <div className="bg-fomex-bg-light">
        <main>
          <BodyMain />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default MainPage;
