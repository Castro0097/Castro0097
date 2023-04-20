import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function AutoAtendimento() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [email, setEmail] = useState("");
  const [caso, setCaso] = useState("");
  const nomestring = "Prezado Dr. Líbero Leal Rocha, meu nome é: Sr(a). ";
  const emailstring = ", o contato por e-mail é: ";
  const telefonestring = ", número Telefone: ";
  const servicostring =    ", Tenho interesse em saber mais informaões acerca do serviço: ";
  const casostring = ", segue um breve relato do meu caso: ";
  const finalização = "Aguardo seu contato, obrigado(a)";

  function handleChangeNome(e) {
    setNome(e.target.value);
  }

  function handleChangeTelefone(e) {
    setTelefone(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeServico(e) {
    setServico(e.target.value);
  }
  function handleChangeCaso(e) {
    setCaso(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div>
        <div id="centerconteud">
          <form>
            <TextField
              onChange={handleChangeNome}
              nome="nome"
              value={nome}
              id="nomeform"
              label="Nome:"
              variant="standard"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={handleChangeTelefone}
              telefone="telefone"
              value={telefone}
              label="Telefone:"
              variant="standard"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={handleChangeEmail}
              email="email"
              value={email}
              id="emailform"
              label="E-mail:"
              variant="standard"
            />
            <br></br>
            <br></br>
            <h5>Escolha o serviço desejado:</h5>
            <select
              onChange={handleChangeServico}
              servico="servico"
              value={servico}
            >
              <option value="egularização Administrativa">
                Regularização Administrativa
              </option>
              <option value="Planejamento">Planejamento</option>
              <option value="Contratos Imobiliários">
                Contratos Imobiliários
              </option>
              <option value="Procedimentos Extrajudiciais">
                Procedimentos Extrajudiciais
              </option>
              <option value="Procedimentos Judiciais">
                Procedimentos Judiciais
              </option>
              <option value="Engenharia">Engenharia</option>
            </select>
            <h5>Breve Descrição do caso:</h5>
            <textarea
              caso="caso"
              value={caso}
              onChange={handleChangeCaso}
              id="casoform"
              rows="6"
              cols="24"
            />
            <br></br>
            <br></br>
            <button
              type="submit"
              onClick={() => {
                const msgwhats =
                  nomestring +
                  nome +
                  telefonestring +
                  telefone +
                  emailstring +
                  email +
                  servicostring +
                  servico +
                  casostring +
                  caso;
                window.open(
                  "https://api.whatsapp.com/send?phone=5534991499080&text=" +
                    msgwhats
                );
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
