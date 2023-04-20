import Logo from "../styles/image/logoLVM.png";
import React from "react";
import Whats from "../styles/image/redes/whatsapp.png";

function Header() {
  function qS() {
    const element = document.getElementById("quemsomos");
    element.scrollIntoView();
  }

  function servicos() {
    const element = document.getElementById("servi");
    element.scrollIntoView();
  }

    function contato() {
      const element = document.getElementById("contact");
      element.scrollIntoView();
    }

  return (
    <div id="header">
      <div id="Reg">
        <img src={Logo} id="logoHeader" height="80px" alt="Logomarca"></img>
        <div id="RIU">
          - Regularização de Imóveis Urbanos e Rurais - Direito Imobiliário{" "}
          <strong>ARAXÁ-MG e REGIÃO </strong>
        </div>
      </div>
      <div id="flexc">
        <div id="m2">
          <button
            id="home"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            HOME
          </button>

          <button
            id="rest"
            onClick={() => {
              qS();
            }}
          >
            QUEM SOMOS
          </button>
          <button
            id="rest"
            onClick={() => {
              servicos();
            }}
          >
            SERVIÇOS
          </button>
          <button
            id="rest"
            onClick={() => {
              contato();
            }}
          >
            CONTATO
          </button>
        </div>
        <div id="logowhatsapp">
          <img
            alt="contato"
            src={Whats}
            height="50px"
            onClick={() => {
              window.open(
                "https://api.whatsapp.com/send/?phone=5534991499080&text&type=phone_number&app_absent=0"
              );
            }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
