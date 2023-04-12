import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RegularizacaoAdministrativa  from "./forms/RegularizacaoAdministrativa";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id="font_quadro">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography id="panel1bh-header" sx={{ width: "33%", flexShrink: 0 }}>
            <strong>Regularização Administrativa</strong>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="panel1bh-header">
            <ul id="itens">
              <div>
                <li>
                  <strong>Convenção de Condomínio:</strong> documento que
                  estabelece as regras e normas que regem a convivência entre os
                  condôminos em um edifício ou condomínio residencial.
                </li>
                <br></br>

                <li>
                  <strong>Incorporação Imobiliária:</strong> processo de
                  legalização de empreendimentos imobiliários, como edifícios,
                  condomínios e loteamentos, desde a aprovação dos projetos até
                  a obtenção do registro no cartório de imóveis.
                </li>
                <br></br>

                <li>
                  <strong>Averbação de Construção:</strong> inclusão no registro
                  do imóvel de todas as construções realizadas no terreno, como
                  casas, edifícios, galpões, entre outros.
                </li>
                <br></br>

                <li>
                  <strong>Gestão de Condomínio:</strong> normas e procedimentos
                  que devem ser adotados para a administração do condomínio,
                  como eleição de síndico, assembleias, prestação de contas,
                  entre outros.
                </li>
                <br></br>

                <li>
                  <strong>Escritura:</strong> formalização do contrato de compra
                  e venda do imóvel entre o vendedor e o comprador.
                </li>
                <br></br>

                <li>
                  <strong>Atas:</strong> registro das decisões e deliberações
                  tomadas em assembleias de condomínio ou reuniões de
                  proprietários de imóveis.
                </li>
                <br></br>

                <li>
                  <strong>Regimentos Internos:</strong> normas e regras de
                  convivência entre os condôminos, como horários de uso das
                  áreas comuns, proibição de atividades que possam perturbar o
                  sossego, entre outras.
                </li>
                <br></br>

                <li>
                  <strong>Documentação Técnica:</strong> elaboração e registro
                  dos projetos arquitetônicos, estruturais e de instalações
                  elétricas e hidráulicas do imóvel.
                </li>
                <br></br>

                <li>
                  <strong>Regularização de Imóvel Urbano:</strong> processo de
                  legalização de imóveis construídos em áreas urbanas sem a
                  devida autorização dos órgãos competentes.
                </li>
                <br></br>

                <li>
                  <strong>Regularização de Imóvel Rural:</strong> processo de
                  legalização de imóveis construídos em áreas rurais sem a
                  devida autorização dos órgãos competentes.
                </li>
                <br></br>

                <li>
                  <strong>Regularização de Chácaras e Sítios:</strong> processo
                  de legalização de propriedades rurais com áreas menores que um
                  módulo fiscal, que é a medida usada para definir a área mínima
                  de uma propriedade rural.
                </li>
                <br></br>

                <li>
                  <strong>Regularização Fundiária REURB:</strong> processo de
                  legalização de áreas urbanas informais, com o objetivo de
                  garantir a segurança jurídica e a regularização das
                  propriedades.
                </li>
                <br></br>
              </div>
            </ul>
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
          <Typography id="panel1bh-header" sx={{ width: "33%", flexShrink: 0 }}>
            <strong>Planejamento</strong>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="regularizacao-imob">
              <ul>
                <li>
                  <strong>Due Diligence:</strong> processo de análise minuciosa
                  da situação jurídica e documental de um imóvel, com o objetivo
                  de identificar possíveis irregularidades e riscos que possam
                  impedir a sua regularização.
                </li>
                <br></br>

                <li>
                  <strong>Análise de Risco do Negócio Imobiliário:</strong>{" "}
                  avaliação dos riscos envolvidos em um empreendimento
                  imobiliário, considerando aspectos como a localização do
                  imóvel, a sua situação jurídica e documental, o mercado
                  imobiliário, entre outros fatores.
                </li>
                <br></br>

                <li>
                  <strong>Planejamento Patrimonial – Holding:</strong>{" "}
                  estratégia de planejamento patrimonial que consiste na criação
                  de uma empresa (holding) para gerenciar os bens e patrimônios
                  da família, incluindo imóveis, com o objetivo de proteger o
                  patrimônio e reduzir a carga tributária.
                </li>
                <br></br>
              </ul>
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
          <Typography id="panel1bh-header" sx={{ width: "33%", flexShrink: 0 }}>
            <strong>Contratos Imobiliários</strong>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="contratos-imob">
              <ul>
                <li>
                  <strong>Locação:</strong> contrato em que o proprietário de um
                  imóvel cede o direito de uso deste imóvel para outra pessoa ou
                  empresa, mediante pagamento de um valor pré-determinado e
                  respeitando as condições estipuladas em contrato, como prazo
                  de duração, forma de pagamento, entre outras cláusulas.
                </li>
                <br></br>

                <li>
                  <strong>Comodato:</strong> contrato em que o proprietário de
                  um imóvel cede o uso gratuito deste imóvel para outra pessoa
                  ou empresa, por um período determinado ou indeterminado, e em
                  que a pessoa ou empresa que recebe o imóvel se compromete a
                  utilizá-lo de forma responsável e a devolvê-lo no estado em
                  que recebeu.
                </li>
                <br></br>

                <li>
                  <strong>Compra e venda:</strong> contrato em que o
                  proprietário de um imóvel vende esse para outra pessoa ou
                  empresa, mediante pagamento de um valor pré-determinado e
                  respeitando as condições estipuladas em contrato, como forma
                  de pagamento, prazo de entrega, entre outras cláusulas.
                </li>
                <br></br>

                <li>
                  <strong>Arrendamento Rural:</strong> contrato em que o
                  proprietário de uma área rural cede o direito de uso desta
                  área para outra pessoa ou empresa, mediante pagamento de um
                  valor pré-determinado e respeitando as condições estipuladas
                  em contrato, como prazo de duração, forma de pagamento, entre
                  outras cláusulas.
                </li>
                <br></br>

                <li>
                  <strong>Parceria Rural:</strong> contrato em que o
                  proprietário de uma área rural e outra pessoa ou empresa se
                  unem para explorar esta área, dividindo os custos e os lucros
                  da atividade agrícola ou pecuária realizada nesta área, de
                  acordo com as condições estipuladas em contrato.
                </li>
                <br></br>
              </ul>
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
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography id="panel1bh-header" sx={{ width: "33%", flexShrink: 0 }}>
            <strong>Procedimentos extrajudiciais</strong>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="proc-extrajudiciais">
              <ul>
                <li>
                  <strong>Adjudicação compulsória:</strong> procedimento em que
                  o comprador de um imóvel busca obter no cartório a
                  transferência da propriedade do imóvel, quando o vendedor se
                  recusa a fazê-lo mesmo após ter recebido o pagamento do valor
                  acordado.
                </li>
                <br></br>

                <li>
                  <strong>Usucapião:</strong> procedimento em que uma pessoa que
                  ocupou um imóvel por determinado período de tempo, sem ser
                  proprietária, busca obter no cartório a propriedade deste
                  imóvel, desde que atendidos os requisitos legais para a
                  configuração da usucapião.
                </li>
                <br></br>

                <li>
                  <strong>Inventário:</strong> procedimento em que os herdeiros
                  de uma pessoa falecida realizam a partilha dos bens deixados
                  por ela, inclusive imóveis, de acordo com as regras
                  estabelecidas em lei.
                </li>
                <br></br>

                <li>
                  <strong>Retificação de Registro:</strong> procedimento
                  extrajudicial em que o proprietário de um imóvel busca
                  corrigir informações equivocadas ou desatualizadas presentes
                  no registro deste imóvel no cartório competente.
                </li>
                <br></br>

                <li>
                  <strong>Retificação de área:</strong> procedimento
                  extrajudicial em que o proprietário de um imóvel busca
                  corrigir a área deste imóvel constante no registro no cartório
                  competente, seja para aumentar ou diminuir a área registrada.
                </li>
                <br></br>

                <li>
                  <strong>Fusão:</strong> procedimento em que dois ou mais
                  imóveis são unidos para formar um único imóvel, mediante
                  aprovação dos órgãos competentes.
                </li>
                <br></br>

                <li>
                  <strong>Agregação:</strong> procedimento em que um imóvel é
                  ampliado pela aquisição de uma área contígua a ele, mediante
                  aprovação dos órgãos competentes.
                </li>
                <br></br>

                <li>
                  <strong>Agrupamento:</strong> procedimento em que dois ou mais
                  imóveis são agrupados para formar uma única unidade
                  imobiliária, mediante aprovação dos órgãos competentes.
                </li>
                <br></br>

                <li>
                  <strong>Desmembramento:</strong> O imóvel objeto da matrícula
                  é dividido em dois ou mais novos imóveis. Para cada novo
                  imóvel será aberta uma matrícula cancelando-se a primitiva.
                </li>
                <br></br>

                <li>
                  <strong>Desdobro:</strong> Uma parte da gleba maior pode ser
                  desdobrada ou segregada para formar um ou mais imóveis novos.
                  Será aberta uma nova matrícula, sem encerrar a do imóvel
                  primitivo.
                </li>
                <br></br>

                <li>
                  <strong>Divisão:</strong> procedimento em que um imóvel é
                  dividido em partes ideais, sem a sua efetiva divisão física,
                  para que cada proprietário possa exercer seu direito sobre sua
                  parte ideal do imóvel.
                </li>
                <li>
                  <strong>Loteamento:</strong> Processo de divisão de uma área
                  em lotes, destinados à venda, locação ou edificação.
                </li>
                <li>
                  <strong>Gleba: </strong>é uma porção de terra sem delimitação
                  precisa ou uso específico, que pode ser objeto de um processo
                  de regularização fundiária.
                </li>
                <br></br>
              </ul>
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
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography id="panel1bh-header" sx={{ width: "33%", flexShrink: 0 }}>
            <strong>Procedimentos judiciais</strong>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="procedimentos-judiciais">
              <ul>
                <li>
                  <strong>Adjudicação compulsória:</strong> procedimento
                  judicial em que o interessado em adquirir um imóvel busca
                  obter a propriedade por meio de sentença judicial, quando o
                  proprietário se recusa a realizar a transferência da
                  propriedade, mesmo tendo recebido o pagamento.
                </li>
                <br></br>

                <li>
                  <strong>Usucapião:</strong> procedimento judicial em que uma
                  pessoa que ocupa um imóvel de forma mansa, pacífica e
                  ininterrupta por um determinado período de tempo, sem oposição
                  do proprietário, busca obter a propriedade do imóvel.
                </li>
                <br></br>

                <li>
                  <strong>Inventário:</strong> procedimento judicial que tem
                  como objetivo fazer a partilha dos bens de uma pessoa que
                  faleceu entre seus herdeiros, incluindo imóveis que fazem
                  parte do patrimônio da pessoa falecida.
                </li>
                <br></br>

                <li>
                  <strong>Retificação de Registro:</strong> procedimento
                  judicial em que se busca corrigir informações incorretas em um
                  registro de imóvel, como dados de proprietários, descrição do
                  imóvel, entre outras informações.
                </li>
                <br></br>

                <li>
                  <strong>Retificação de área:</strong> procedimento judicial em
                  que se busca corrigir a metragem incorreta de um imóvel em seu
                  registro.
                </li>
                <br></br>

                <li>
                  <strong>Ação de despejo:</strong> procedimento judicial em que
                  o proprietário de um imóvel busca reaver a posse deste imóvel,
                  quando o locatário ou ocupante do imóvel não cumpre as
                  condições estabelecidas em contrato ou não paga o aluguel.
                </li>
                <br></br>

                <li>
                  <strong>Ação de cobrança:</strong> procedimento judicial em
                  que o proprietário de um imóvel busca receber o pagamento de
                  dívidas relacionadas ao imóvel, como aluguel, condomínio ou
                  taxas.
                </li>
                <br></br>

                <li>
                  <strong>Ação renovatória:</strong> procedimento judicial em
                  que o locatário de um imóvel comercial busca renovar o
                  contrato de locação por um novo prazo, garantindo assim o
                  direito de continuar ocupando o imóvel.
                </li>
                <br></br>

                <li>
                  <strong>Ação revisional:</strong> procedimento judicial em que
                  o proprietário de um imóvel busca rever as condições de um
                  contrato de financiamento imobiliário, quando acredita estar
                  pagando valores abusivos.
                </li>
                <br></br>

                <li>
                  <strong>Ação de extinção de condomínio:</strong> procedimento
                  judicial em que um dos condôminos de um imóvel busca a venda
                  do imóvel para dividir o valor da venda entre os
                  proprietários, quando não há acordo para a venda do imóvel ou
                  a divisão do uso do imóvel não é mais possível.
                </li>
                <br></br>
              </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography id="panel1bh-header" sx={{ width: "33%", flexShrink: 0 }}>
            <strong>Engenharia</strong>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}> </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div id="regularizacao-imoveis-engenharia">
              <ul>
                <li>
                  <strong>Laudos Técnicos:</strong> documento emitido por um
                  profissional da engenharia que avalia as condições estruturais
                  de um imóvel e indica as medidas necessárias para regularizar
                  a situação, como reparos, reforços ou adequações técnicas.
                </li>
                <br></br>

                <li>
                  <strong>Vistorias:</strong> inspeções realizadas por um
                  profissional da engenharia para verificar as condições de um
                  imóvel, identificar possíveis irregularidades e orientar
                  quanto às medidas necessárias para regularização, como
                  correções de falhas de construção ou reformas em desacordo com
                  as normas vigentes.
                </li>

                <li>
                  <strong>Projeto de Engenharia Civil:</strong> conjunto de
                  documentos que detalham o projeto de construção ou reforma de
                  um imóvel, com todas as informações necessárias para a
                  execução da obra, desde a definição de materiais e técnicas
                  construtivas até as normas técnicas e regulamentações legais a
                  serem seguidas.
                </li>
                <br></br>

                <li>
                  <strong>Topografia:</strong> técnica de medição e
                  representação em planta do terreno onde se localiza o imóvel,
                  que permite a definição de limites, níveis e características
                  do terreno, bem como a elaboração de projetos de construção ou
                  reforma em conformidade com as normas vigentes.
                </li>
                <br></br>

                <li>
                  <strong>Projeto de Segurança em Edificações:</strong>{" "}
                  documento elaborado por um profissional da engenharia que
                  estabelece as medidas de segurança necessárias para garantir a
                  integridade física dos usuários do imóvel, como instalações
                  elétricas e hidráulicas, sistemas de combate a incêndio e
                  saídas de emergência.
                </li>
                <br></br>

                <li>
                  <strong>Georreferenciamento:</strong> técnica de representação
                  cartográfica que permite a localização precisa do imóvel em
                  relação a pontos de referência geográficos, como coordenadas
                  geográficas, altura e profundidade, necessários para a
                  elaboração de projetos de construção e reforma em conformidade
                  com as normas técnicas e regulamentações legais.
                </li>
                <br></br>

                <li>
                  <strong>Perícias:</strong> avaliações técnicas realizadas por
                  um profissional da engenharia para identificar e analisar
                  possíveis irregularidades em um imóvel, e que são utilizadas
                  como base para a elaboração de laudos técnicos e projetos de
                  regularização.
                </li>
                <br></br>

                <li>
                  <strong>Projeto de Arquitetura e Urbanismo:</strong> conjunto
                  de documentos que detalham o projeto de construção ou reforma
                  de um imóvel, com todas as informações necessárias para a
                  execução da obra, desde a definição de materiais e técnicas
                  construtivas até as normas técnicas e regulamentações legais a
                  serem seguidas, com foco na concepção estética e funcional do
                  imóvel.
                </li>
                <br></br>

                <li>
                  <strong>Projeto de Segurança do Trabalho:</strong> projetos de
                  Segurança do trabalho são ações planejadas para prevenir
                  acidentes e doenças ocupacionais em um ambiente de trabalho.
                  Esses projetos visam identificar e avaliar riscos e perigos,
                  definir medidas preventivas, capacitar os trabalhadores,
                  monitorar e avaliar a eficácia das ações implementadas. Em
                  suma, projetos de segurança do trabalho têm como objetivo
                  garantir a saúde, segurança e bem-estar dos trabalhadores,
                  além de promover um ambiente de trabalho mais seguro e
                  saudável.
                </li>
                <br></br>
                <li>
                  <strong>Projeto de incêndio:</strong> conjunto de medidas de
                  prevenção e combate a incêndios elaboradas por um profissional
                  da área de engenharia que tem como objetivo garantir a
                  segurança das pessoas e do patrimônio em caso de emergência.
                </li>
                <br></br>

                <li>
                  <strong>ART:</strong> Anotação de Responsabilidade Técnica,
                  documento emitido pelo Conselho Regional de Engenharia e
                  Agronomia (CREA) que comprova a responsabilidade técnica de um
                  profissional pela execução de serviços ou elaboração de
                  projetos
                </li>
              </ul>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
