
import Typewriter from "typewriter-effect";
import LogoLVMR from "../../styles/image/logoLVM.png"
import Nav from "../Nav"

export default function Initial(){

    return (
      <div id="initial">
        <Nav></Nav>
        <div id="anime">
          <div id="animetext">
            <div id="logoMobile">
              {" "}
              <img src={LogoLVMR} alt="Logo Mobile" height="120px"></img>
              <br></br>
            </div>
            <div id="reftext" className="refclass">
              {" "}
              Regularização de Imóveis Urbanos e Rurais - Direito Imobiliário{" "}
              <strong>ARAXÁ-MG e REGIÃO </strong>
            </div><br></br>

            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString(
                    "SOLUÇÕES JURÍDICAS REGULARIZAÇÃO DE IMÓVEIS URBANOS E RURAIS - ARAXÁ-MG E REGIÃO"
                  )

                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Legalize seu imóvel com facilidade e rapidez")
                  .deleteAll()
                  .typeString(
                    "Não perca mais tempo com processos de regularização demorados"
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    "Precisando de ajuda em processos judiciais ou extrajudiciais envolvendo imóveis urbanos e rurais"
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    "Garanta a qualidade da sua obra com nossos serviços de engenharia"
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    "Não importa qual é a sua necessidade em Direito Imobiliário, nossa equipe de especialistas está pronta para auxiliar"
                  )

                  .start();
              }}
            />
          </div>
        </div>
      </div>
    );
}