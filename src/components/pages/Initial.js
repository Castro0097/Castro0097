
import Typewriter from "typewriter-effect";

export default function Initial(){

    return (
      <div id="initial">
       
        <div id="anime">
          <div id="animetext">
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