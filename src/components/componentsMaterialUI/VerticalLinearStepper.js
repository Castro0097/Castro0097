import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Passo 1 - ENVIO DE DOCUMENTOS",
    description: `
    O primeiro  passo é simples: basta encaminhar todos os documentos para o nosso email: atendimento@lvmregulariza.com.br.`
  },
  {
    label: "Passo 2 - ANÁLISE PRELIMINAR",
    description:
      " É importante destacar que para desenvolver a estratégia personalizada do seu caso, é necessário o pagamento de honorários, que serão definidos após a análise da documentação."
  },
  {
    label: "Passo 3 - PARECER TÉCNICO",
    description: `O processo de regularização de imóveis urbanos e rurais é iniciado com a análise da documentação necessária para identificar as irregularidades e pendências existentes. A partir disso, é elaborada uma estratégia personalizada para solucionar cada problema identificado. Com a estratégia definida, é formalizada a contratação e iniciamos o processo de regularização com agilidade e expertise, garantindo a segurança jurídica do seu imóvel.`
  }
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 1100 }}>
      <Stepper id="boxt" activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              id="passo"
              optional={
                index === 2 ? (
                  <Typography variant="success">Proximo Passo </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    id="btnvertical"
                    variant="success"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Fim" : "Proximo"}
                  </Button>
                  <Button
                    id="btnvertical"
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Voltar
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            LVM regularização de imóveis urbanos e rurais - &apos;
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Encerrar
          </Button>
        </Paper>
      )}
    </Box>
  );
}