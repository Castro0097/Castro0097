import ControlledAccordions from "../../components/componentsMaterialUI/ControlledAccordions";
import VerticalLinearStepper from "../componentsMaterialUI/VerticalLinearStepper";
function Estudos() {
  return (
    <>
      <h2> Conheça Nossa Forma de trabalhar em 3 passos </h2>
      <VerticalLinearStepper></VerticalLinearStepper><br></br>


      <div id="texto2">
        O Direito Imobiliário é um ramo do Direito que regula as relações
        jurídicas decorrentes da propriedade e posse de imóveis. Nesse ramo,
        alguns temas são recorrentes e importantes, como o usucapião, o
        inventário, a extremação, incorporação imobiliária, desmembramento, agregação, fusão, desdobro, averbação, registros, dentre outras inúmeras situações.<br></br><br></br>
        <ControlledAccordions></ControlledAccordions><br></br><br></br>
      </div>
    </>
  );
}

export default Estudos;
