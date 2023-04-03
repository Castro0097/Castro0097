import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CvLibero() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Doutorado
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
            <div id="cvFormat">
              Doutorado em Direito Processual -{" "}
              <strong>
                {" "}
                Pontifícia Universidade Católica de Minas Gerais - PUC-MINAS
              </strong>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Mestrado</Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="cvFormat">
              <hr></hr> Mestrado em Direito das Relações Sociais -{" "}
              <strong>
                {" "}
                Pontifícia Universidade Católica de São Paulo - PUC - SP
              </strong>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Especialização
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
            <div id="cvFormat">
              <hr></hr>
              Especialização em Direito Processual Civil -{" "}
              <strong> Universidade Federal de Uberlândia - UFU - MG</strong>
            </div>

            <div id="cvFormat">
              <hr></hr>
              Especialização em Direito Penal e Processual Penal -{" "}
              <strong>Universidade de Franca - UNIFRAN - SP</strong>
            </div>

            <div id="cvFormat">
              <hr></hr> Especialização em Direito Tributário -{" "}
              <strong>Centro Universitário do Triângulo - UNITRI - MG</strong>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Graduação
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="cvFormat">
              <hr></hr> Bacharelado em Direito -{" "}
              <strong>Universidade de Uberaba - UNIUBE - MG</strong>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Certificação
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="cvFormat">
              <hr></hr> Curso de Regularização fundiária Urbana |Introdução à
              regularização fundiária Urbana -{" "}
              <strong>Universidade Federal rural do Semi-Árido - UFERSA</strong>
            </div>

            <div id="cvFormat">
              <hr></hr>
              Curso de Regularização fundiária Urbana |Procedimentos de
              regularização fundiária Urbana-{" "}
              <strong>
                {" "}
                Universidade Federal rural do Semi-Árido - UFERSA
              </strong>
            </div>

            <div id="cvFormat">
              <hr></hr>
              Curso de Regularização fundiária Urbana |Instrumentos de
              regularização fundiária Urbana -{" "}
              <strong>Universidade Federal rural do Semi-Árido - UFERSA</strong>
            </div>

            <div id="cvFormat">
              <hr></hr> Curso de Regularização fundiária Urbana |Registro da
              Reurb| -
              <strong>Universidade Federal rural do Semi-Árido - UFERSA</strong>
            </div>

            <div id="cvFormat">
              <hr></hr>
              Curso de Regularização fundiária Urbana |Projetos e minutas de Lei
              sobre Reurb -{" "}
              <strong>Universidade Federal rural do Semi-Árido - UFERSA</strong>
            </div>

            <div id="cvFormat">
              <hr></hr>
              Curso de Regularização fundiária Urbana |Cadastro Social na Reurb|
              -{" "}
              <strong>Universidade Federal rural do Semi-Árido - UFERSA</strong>
            </div>

            <div id="cvFormat">
              <hr></hr>
              Curso de Regularização fundiária Urbana |Regularização fundiária
              em imóveis da União -{" "}
              <strong>
                {" "}
                Universidade Federal rural do Semi-Árido - UFERSA
              </strong>
            </div>

            <div id="cvFormat">
              <hr></hr>
              Curso de Regularização fundiária Urbana |Casa Verde e Amarela -
              Programa de Regularização fundiária e melhoria Habitacional -
              <strong>Universidade Federal rural do Semi-Árido - UFERSA</strong>
            </div>

            <div id="cvFormat">
              <hr></hr> Curso de Regularização fundiária Urbana |Questoes
              práticas aplicadas ao procedimento e projeto de regularização
              fundiária Urbana -{" "}
              <strong>Universidade Federal rural do Semi-Árido - UFERSA</strong>
            </div>

            <div id="cvFormat">
              <hr></hr>
              Curso de Regularização fundiária Urbana |Identificação e
              caracterização de áreas irregulares de interesse social -
              <strong>Universidade Federal rural do Semi-Árido - UFERSA</strong>
            </div>

            <div id="cvFormat">
              <hr></hr>
              Curso de Regularização de imóveis e perícia judicial -{" "}
              <strong>EBPÓS</strong>
            </div>

          </Typography>
        </AccordionDetails>
      </Accordion>

      <br></br>
    </div>
  );
}
