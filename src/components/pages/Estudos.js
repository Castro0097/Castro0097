import ControlledAccordions from "../../components/componentsMaterialUI/ControlledAccordions";
import VerticalLinearStepper from "../componentsMaterialUI/VerticalLinearStepper";
function Estudos() {
  return (
    <div id="servi">
      <div id="centerconteud">
        <br></br>
        <br></br>
        <br></br>
        <h2> Conheça nossa forma de trabalhar em 3 passos </h2>
        <VerticalLinearStepper></VerticalLinearStepper>
        <br></br>

        <h2> Conheça alguns de nossos serviços </h2>
        <div id="texto">
          O Direito Imobiliário é um ramo do Direito que regula as relações
          jurídicas decorrentes da propriedade e posse de imóveis. Nesse ramo,
          alguns temas são recorrentes e importantes, como o usucapião, o
          inventário, a extremação, incorporação imobiliária, desmembramento,
          agregação, fusão, desdobro, averbação, registros, dentre outras
          inúmeras situações.<br></br>
          <br></br>
          <ControlledAccordions></ControlledAccordions>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Estudos;
