import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLightbulb,
  FaShieldAlt,
  FaGlobe,
  FaChartLine,
  FaHardHat,
  FaUsers,
  FaTrophy,
  FaBullseye,
  FaMailBulk,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaChevronLeft,
  FaChevronRight,
  FaTools,
  FaBriefcase, // <-- AGREGADO
  FaCalendarAlt, // <-- AGREGADO
} from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

// Definimos los iconos para exportarlos en un solo objeto
export const Icons = {
  // Íconos Sociales
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  Instagram: FaInstagram,
  Whatsapp: FaWhatsapp,

  // Iconos de Métricas y Servicios
  Trophy: FaTrophy,
  Users: FaUsers,
  Target: FaBullseye,
  Lightbulb: FaLightbulb,
  ShieldCheck: FaShieldAlt,
  Globe: FaGlobe,
  TrendUp: FaChartLine,

  // Iconos de Contacto
  Mail: FaMailBulk,
  Phone: FaPhone,
  Location: FaMapMarkerAlt,

  // Iconos de Construcción y Herramientas
  Construct: MdConstruction,
  Tools: FaTools,

  // Iconos de Estadísticas (Conflo)
  Briefcase: FaBriefcase, // <-- AGREGADO
  Calendart: FaCalendarAlt, // <-- AGREGADO

  // Navegación
  ChevronLeft: FaChevronLeft,
  ChevronRight: FaChevronRight,
};
