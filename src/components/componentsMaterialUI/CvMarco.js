import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CvMarco() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
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
              <hr></hr>
              Bacharelado em Engenharia Civil -{" "}
              <strong>Universidade de Uberaba - UNIUBE-MG</strong>
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
            Especialização
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="cvFormat">
              <hr></hr>
              Especialista em engenharia de Segurança do Trabalho -
              <strong> Universidade - FUMEC-MG</strong>
            </div>
            <div id="cvFormat">
              <hr></hr>
              Especialista em gestão ambiental -{" "}
              <strong>
                Centro Universitário do Planalto de Araxá - UNIARAXÁ
              </strong>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br></br>
    </div>
  );
}
