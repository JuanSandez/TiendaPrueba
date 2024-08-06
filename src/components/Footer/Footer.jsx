import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h5>Medios de pago y envío</h5>
        <div className="footer-card">
          <img
            src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/correo-argentino.png"
            alt=""
          />
          <img
            src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/personalizado.png"
            alt=""
          />
          <img
            src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/retiro-local.png"
            alt=""
          />
        </div>
        <h6>Contacto</h6>
        <p>empresa@gmail.com | +541122339955 | Villa Ballester, General San Martín</p>
        <h5>Creado por <Link>AJJ</Link></h5>
      </div>
    </>
  );
};

export default Footer;
