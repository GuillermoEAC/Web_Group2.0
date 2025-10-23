// src/pages/404.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import constructionImage from "../assets/img/UnderConstruction.png";

const Error404 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("UnderConstruction component rendered");
  console.log("Current path:", location.pathname);

  // Mensajes personalizados según la ruta
  const getPageInfo = () => {
    const path = location.pathname;

    const pages = {
      "/nosotros": {
        title: "Quiénes Somos",
        description:
          "Estamos preparando nuestra historia para compartirla contigo.",
      },
      "/contacto": {
        title: "Contáctanos",
        description:
          "Pronto tendrás múltiples formas de comunicarte con nosotros.",
      },
      "/terminos": {
        title: "Términos y Condiciones",
        description:
          "Nuestros términos de servicio estarán disponibles próximamente.",
      },
      "/privacidad": {
        title: "Política de Privacidad",
        description: "Estamos trabajando en nuestra política de privacidad.",
      },
      "/blog": {
        title: "Blog de Tecnología",
        description:
          "Pronto compartiremos contenido valioso sobre tecnología e innovación.",
      },
      "/nuestras-tiendas": {
        title: "Nuestras Sucursales",
        description:
          "Estamos preparando la información de todas nuestras ubicaciones.",
      },
      "/trabaja-con-nosotros": {
        title: "Trabaja con Nosotros",
        description: "Pronto podrás unirte a nuestro equipo empresarial.",
      },
      "/centro-ayuda": {
        title: "Centro de Ayuda",
        description: "Estamos creando una sección de ayuda completa para ti.",
      },
      "/cookies": {
        title: "Política de Cookies",
        description:
          "Nuestra política de cookies estará disponible próximamente.",
      },
    };

    return (
      pages[path] || {
        title: "Sitio en Construcción",
        description:
          "Estamos trabajando duro para brindarte la mejor experiencia.",
      }
    );
  };

  const pageInfo = getPageInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Imagen de construcción */}
        <div className="mb-8">
          <img
            src={constructionImage}
            alt="Sitio en construcción"
            className="w-100 h-80 mx-auto object-contain"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {pageInfo.title}
        </h1>

        <p className="text-gray-600 mb-6 text-lg">
          {pageInfo.description} Vuelve pronto para descubrir las novedades.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Volver al Inicio
          </button>
        </div>

        {/* Información de contacto adicional */}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">
            Mientras tanto, puedes contactarnos en:{" "}
            <span className="font-semibold text-blue-600">
              administracion@grupofomex.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
