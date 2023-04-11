import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Input from "@mui/material/Input/Input";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem";
import { InputLabel } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="dow" ref={ref} {...props} />;
});

export default function RegularizacaoAdministrativa() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button id="hovernull" variant="outlined" onClick={handleClickOpen}>
        Iniciar Atendimento - Regularização Administrativa
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{""}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div>
              Escritura: formalização do contrato de compra e venda do imóvel
              entre o vendedor e o comprador. Atas: registro das decisões e
              deliberações tomadas em assembleias de condomínio ou reuniões de
              proprietários de imóveis. Regimentos Internos: normas e regras de
              convivência entre os condôminos, como horários de uso das áreas
              comuns, proibição de atividades que possam perturbar o sossego,
              entre outras. Documentação Técnica: elaboração e registro dos
              projetos arquitetônicos, estruturais e de instalações elétricas e
              hidráulicas do imóvel. Regularização de Imóvel Urbano: processo de
              legalização de imóveis construídos em áreas urbanas sem a devida
              autorização dos órgãos competentes. Regularização de Imóvel Rural:
              processo de legalização de imóveis construídos em áreas rurais sem
              a devida autorização dos órgãos competentes. Regularização de
              Chácaras e Sítios: processo de legalização de propriedades rurais
              com áreas menores que um módulo fiscal, que é a medida usada para
              definir a área mínima de uma propriedade rural. Regularização
              Fundiária REURB: processo de legalização de áreas urban
            </div>
            <div>
              <div>
                <InputLabel id="nome">Nome completo:</InputLabel>
                <Input />
              </div>

              <div>
                <InputLabel type="number" id="Telefone:">
                  CPF:
                </InputLabel>
                <Input />
              </div>
              <div>
                <InputLabel type="number" id="Telefone:">
                  Endereço:
                </InputLabel>
                <Input />
              </div>
              <div>
                <InputLabel type="number" id="Telefone:">
                  Telefone:
                </InputLabel>
                <Input />
              </div>
              <div>
                <InputLabel type="number" id="Telefone:">
                  E-mail:
                </InputLabel>
                <Input />
              </div>

              <br></br>
              <Input />
              <br></br>
              <InputLabel id="proc">Procedimentos</InputLabel>
              <Select labelId="proc" label="Procedimentos">
                <MenuItem>Convenção de Condomínio</MenuItem>
                <MenuItem>Incorporação Imobiliária</MenuItem>
                <MenuItem>Averbação de Construção</MenuItem>
                <MenuItem>Gestão de Condomínio</MenuItem>
                <MenuItem>Escritura</MenuItem>
                <MenuItem>Atas</MenuItem>
                <MenuItem>Regimentos Internos</MenuItem>
                <MenuItem>Documentação Técnica</MenuItem>
                <MenuItem>Regularização de Imóvel Urbano</MenuItem>
                <MenuItem>Escritura:</MenuItem>
              </Select>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id="hovernull" onClick={handleClose}>
            Sair
          </Button>
          <Button id="hovernull" onClick={handleClose}>
            Iniciar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
