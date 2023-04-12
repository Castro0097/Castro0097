import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CvAna() {
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
          <Typography id="panel1bh-header" sx={{ width: "33%", flexShrink: 0 }}>
            Graduação
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="cvFormat">
              <hr></hr>
              Bacharelado em Direito -{" "}
              <strong>
                Centro Universitário do Planalto de Araxá - UNIARAXÁ
              </strong>
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
          <Typography id="panel1bh-header" sx={{ width: "33%", flexShrink: 0 }}>
            Certificação
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="cvFormat">
              <hr></hr>
              Curso de perícia judicial ambiental - ABPG - Associação Brasileira
              de perícia e gestão ambiental -{" "}
              <strong>Globo Verde Ambiental</strong>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br></br>
    </div>
  );
}
