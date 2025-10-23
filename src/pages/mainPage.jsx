// src/pages/mainPage.jsx
import React from "react";
import { motion } from "framer-motion";
import miVideo from "../assets/img/en_Construccion.mp4";
import Footer from "../components/footer";
const MainPage = () => {
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold">Are you lost prety gril</h1>
        <motion.div>
          <video
            src={miVideo}
            className="w-ful h-full object-cover rounded-xl"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </motion.div>
        <Footer />
      </main>
    </div>
  );
};

export default MainPage;
