// src/components/bodyMain.jsx;
import React from "react";
import { motion } from "framer-motion";
import ServiciosSection from "./ServiciosSection";
// import logoFomexvertical from "../assets/img/Logo_Fomex_Vertical.png";
import img_Oficina from "../assets/img/Fomex_Empleados.jpg";

const BodyMain = () => {
  return (
    <>
      <section id="about" className="pt-16 pb-16 bg-fomex-bg-light w-full">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center md:text-left">
            Sobre Nuestro Grupo
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            <motion.div
              className="w-full lg:w-1/2 order-2 lg:order-1" // En móvil va debajo (order-2), en desktop va a la izquierda (order-1)
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: 0.3,
              }}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Con una trayectoria que supera los 8 años, nuestro Grupo
                Empresarial se distingue por ofrecer soluciones innovadoras y de
                la más alta calidad en una amplia gama de sectores. Nuestra
                reputación está construida sobre la base de una ejecución
                impecable y una dedicación constante a la satisfacción total del
                cliente.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                La fuerza de la diversificación es nuestra clave. La sinergia
                entre nuestras empresas permite crear soluciones integrales que
                no solo cumplen, sino que redefinen los estándares de la
                industria, convirtiendo nuestros socios comerciales en líderes
                de su campo.
              </p>

              {/* Cards de Características */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Innovación */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                  <span className="text-brand-dark text-3xl">💡</span>{" "}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Innovación
                    </h3>
                    <p className="text-sm text-gray-600">
                      Soluciones creativas que transforman desafíos en
                      oportunidades de crecimiento.
                    </p>
                  </div>
                </div>

                {/*  Confiabilidad */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                  <span className="text-brand-dark text-3xl">🛡️</span>{" "}
                  {/* Icono de ejemplo */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Confiabilidad
                    </h3>
                    <p className="text-sm text-gray-600">
                      Compromiso inquebrantable con la calidad y cumplimiento de
                      nuestras promesas.
                    </p>
                  </div>
                </div>

                {/*  Alcance Diversificado */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                  <span className="text-brand-dark text-3xl">🌐</span>{" "}
                  {/* Icono de ejemplo */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Alcance Diversificado
                    </h3>
                    <p className="text-sm text-gray-600">
                      Presencia en múltiples sectores con servicios
                      especializados y complementarios.
                    </p>
                  </div>
                </div>

                {/*  Crecimiento */}
                <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                  <span className="text-brand-dark text-3xl">📈</span>{" "}
                  {/* Icono de ejemplo */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      Crecimiento
                    </h3>
                    <p className="text-sm text-gray-600">
                      Expansión continua impulsada por resultados consistentes y
                      visión estratégica.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Imagen*/}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center items-center 
                         order-1 lg:order-2"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: 0.3,
              }}
            >
              {/* Contenedor de la Imagen principal de la oficina */}
              <div className="relative max-w-lg w-full h-[585px] shadow-2xl rounded-xl overflow-hidden">
                <img
                  src={img_Oficina}
                  alt="Equipo de trabajo en la oficina de Fomex"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gray-900/10"></div>{" "}
                {/* Capa oscura para superposición */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative">
        <svg
          className="w-full h-32 text-slate-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,60 C300,120 700,0 1000,60 L1000,100 L0,100 Z"
          ></path>
        </svg>
      </div>
      <ServiciosSection />
    </>
  );
};

export default BodyMain;
