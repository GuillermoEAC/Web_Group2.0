import React, { useState } from "react";
import { Target, Hammer, ShieldCheck, ArrowRight } from "lucide-react";

const ServiciosSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const servicios = [
    {
      icon: Target,
      title: "Gestión y Planificación",
      subtitle: "de Obra",
      description:
        "Dirección y supervisión completa de proyectos, asegurando el cumplimiento de plazos y presupuestos.",
      items: [
        "Estudios de viabilidad y costos",
        "Planificación de recursos",
        "Gestión de permisos y normativas",
        "Control de cronograma",
      ],
      accentColor: "#2563eb",
    },
    {
      id: 2,
      icon: Hammer,
      title: "Construcción y Ejecución",
      subtitle: "Técnica",
      description:
        "Ejecución directa de proyectos civiles, industriales y de infraestructura con equipos especializados.",
      items: [
        "Obra civil y cimentaciones",
        "Montajes estructurales y metálicos",
        "Instalaciones eléctricas y mecánicas",
        "Supervisión técnica de obra",
      ],
      accentColor: "#00FF00",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Seguridad, Calidad",
      subtitle: "y Sustentabilidad",
      description:
        "Aseguramos la integridad de nuestros equipos y el cumplimiento de las normativas ambientales.",
      items: [
        "Implementación de normas HSE",
        "Auditorías internas y externas",
        "Medición de indicadores",
        "Certificaciones ambientales",
      ],
      accentColor: "#6366f1",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase">
            Lo que hacemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones integrales de diseño, planificación y ejecución de
            proyectos bajo los más altos estándares de calidad
          </p>
        </div>

        {/* Services Grid  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {servicios.map((servicio) => {
            const IconComponent = servicio.icon;
            const isActive = activeCard === servicio.id;

            return (
              <div
                key={servicio.id}
                onMouseEnter={() => setActiveCard(servicio.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-900 hover:shadow-xl flex flex-col"
              >
                {/* Top Section - Icon & Title */}
                <div className="p-8 pb-6 relative">
                  {/* Icono */}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl transition-all duration-300"
                    style={{
                      backgroundColor: isActive
                        ? servicio.accentColor
                        : "#f3f4f6",
                    }}
                  >
                    <IconComponent
                      className="w-7 h-7 transition-colors duration-300"
                      style={{ color: isActive ? "#ffffff" : "#374151" }}
                    />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1 relative z-10 leading-tight">
                    {servicio.title}
                  </h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 relative z-10 leading-tight">
                    {servicio.subtitle}
                  </h4>

                  {/* Línea decorativa */}
                  <div
                    className="h-1 mb-4 transition-all duration-300"
                    style={{
                      backgroundColor: isActive
                        ? servicio.accentColor
                        : "#e5e7eb",
                      width: isActive ? "100%" : "48px",
                    }}
                  ></div>

                  {/* Descripción */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {servicio.description}
                  </p>
                </div>

                {/* Bottom Section - Services List */}
                <div className="bg-gray-50 p-8 pt-6 flex-1 flex flex-col">
                  <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                    Incluye:
                  </h5>

                  <ul className="space-y-3 mb-6 flex-1">
                    {servicio.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 transition-all duration-300"
                          style={{
                            backgroundColor: isActive
                              ? servicio.accentColor
                              : "#e5e7eb",
                          }}
                        >
                          <svg
                            className="w-3 h-3 transition-colors duration-300"
                            fill="none"
                            stroke={isActive ? "#ffffff" : "#6b7280"}
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Barra superior de color */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{
                    backgroundColor: servicio.accentColor,
                    height: isActive ? "4px" : "2px",
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gray-50 rounded-2xl border-2 border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">8+</div>
            <div className="text-gray-600 font-medium">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
            <div className="text-gray-600 font-medium">
              Proyectos completados
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600 font-medium">
              Satisfacción del cliente
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
