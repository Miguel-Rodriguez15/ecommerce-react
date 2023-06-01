import React from "react";

import "./assets/footer.css";

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="seccion-footer">
        <article className="footer-up">
          <h3>El Rincón del BIT</h3>
          <p>
            Somos una empresa dedicada a la venta de productos tecnológicos, con
            el fin de satisfacer las necesidades de nuestros clientes.
          </p>
        </article>
      </section>
      <section className="seccion-footer">
        <article className="footer-up">
          <h3>Nuestras Redes Sociales</h3>
          <p>
            <FaFacebook className="icono-footer" />
            <AiFillInstagram className="icono-footer" />
            <AiFillTwitterCircle className="icono-footer" />
          </p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
