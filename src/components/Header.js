import Logo from "../styles/image/logoLVM.png";
import React from "react";
import Whats from "../styles/image/redes/whatsapp.png";

function Header() {
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
              window.scrollTo(0, 965);
            }}
          >
            QUEM SOMOS
          </button>
          <button
            id="rest"
            onClick={() => {
              window.scrollTo(0, 2110);
            }}
          >
            SERVIÇOS
          </button>
          <button
            id="rest"
            onClick={() => {
              window.scroll(0, 3110);
            }}
          >
            CONTATO
          </button>
        </div>
        <div id="logowhatsapp">
          <img alt="contato" src={Whats} height="50px"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
