import React from "react";
import Phone from "../../styles/image/phone.png";
import Iframe from "react-iframe";

export default function Contato() {
  return (
    <div id="contact">
      <div id="centerconteud">
        <br></br>
        <h2>CONTATO</h2>
       
          <div id="texto">
            Esperamos ter atendido às suas expectativas e proporcionado uma
            experiência satisfatória. Caso necessite de mais informações entre
            em contato conosco. Nosso escritório está localizado à
            <strong>
              {" "}
              <strong>
                Rua Francisco dos Santos nº 28, sala 02, Centro - Araxá-MG -
                CEP: 38.183.238{" "}
              </strong>
            </strong>{" "}
            . Será um prazer poder ajudar novamente. Até logo!
            <div id="flexC">
              <div id="telefone">
                <img alt="Telefone" height="30px" src={Phone}></img>
              </div>
              <br></br>
              <br></br>
              <div>
                (34)-3664-6461
              </div>
            </div>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.678117864575!2d-46.94005863351028!3d-19.5982860978588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b036e2e9dc7173%3A0x4f80c93ca90d17c4!2sR.%20Francisco%20dos%20Santos%2C%2028%20-%20Centro%2C%20Arax%C3%A1%20-%20MG%2C%2038183-238!5e0!3m2!1sen!2sbr!4v1679600410612!5m2!1sen!2sbr"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
          </div>
        
      </div>
      <div id="criado">Dev. Js - 3498821-1143</div>
    </div>
  );
}
