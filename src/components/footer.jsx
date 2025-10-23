// /src/components/footer.jsx;
import { useNavigate } from "react-router-dom";
import logoletras from "../assets/img/logoletras.png";
import { Icons } from "../assets/icons/icons";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    about: [
      { path: "/nosotros", label: "Quiénes somos" },
      { path: "/nuestras-tiendas", label: "Nuestras Sucursales" },
      { path: "/trabaja-con-nosotros", label: "Trabaja con nosotros" },
      { path: "/blog", label: "Blog de tecnología" },
    ],
    help: [
      { path: "/centro-ayuda", label: "Centro de ayuda" },
      { path: "/contacto", label: "Contáctanos" },
    ],
    legal: [
      { path: "/terminos", label: "Términos y condiciones" },
      { path: "/privacidad", label: "Política de privacidad" },
      { path: "/cookies", label: "Política de cookies" },
    ],
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61582577164747",
      icon: <Icons.Facebook className="w-6 h-6" />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/grupo_fomex/",
      icon: <Icons.Instagram className="w-6 h-6" />,
      label: "Instagram",
    },
    {
      href: "https://wa.me/5216681502496?text=Hola%2C%20quiero%20mas%20informacion",
      icon: <Icons.Whatsapp className="w-6 h-6" />,
      label: "WhatsApp",
    },
  ];

  const contactInfo = {
    email: "administracion@grupofomex.com",
    phone: "+52 668-150-2496",
    address:
      "Blvd. Adolfo López Matéos 1224 Int 4, Col. Las Fuentes CP 81223, Los Mochis, Sinaloa, México.",
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16  m-0 p-0">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Logo y descripción - ocupa 2 columnas */}
          <div className="col-span-1 lg:col-span-2">
            <img
              src={logoletras}
              alt="Fomex Logo"
              className="h-32 w-48 lg:h-40 lg:w-56 mb-6 object-contain"
            />
            <p className="text-sm leading-relaxed mb-6 text-gray-400 max-w-md">
              Grupo empresarial dedicado al sector de la construcción y
              soluciones integrales para la industria. Comprometidos con la
              excelencia, innovación y desarrollo sostenible.
            </p>

            {/* Información de contacto */}
            <div className="mb-6 space-y-2">
              <p className="text-gray-400 text-sm">
                <span className="font-medium text-white">Email:</span>{" "}
                {contactInfo.email}
              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-medium text-white">Teléfono:</span>{" "}
                {contactInfo.phone}
              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-medium text-white">Dirección:</span>{" "}
                {contactInfo.address}
              </p>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces "Acerca de"  */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Acerca de</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-400 hover:text-white transition duration-300 text-base w-full text-left hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces "Ayuda" */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Ayuda</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-400 hover:text-white transition duration-300 text-base w-full text-left hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces "Información legal" */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Información legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-400 hover:text-white transition duration-300 text-base w-full text-left hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bloque de copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Grupo Fomex. Todos los derechos
              reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleNavigation("/terminos")}
                className="hover:text-white transition duration-300"
              >
                Términos y Condiciones
              </button>
              <button
                onClick={() => handleNavigation("/privacidad")}
                className="hover:text-white transition duration-300"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => handleNavigation("/mapa-sitio")}
                className="hover:text-white transition duration-300"
              >
                Mapa del Sitio
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
