import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LiberoA from "../../styles/image/avatar/Libero.png";
import AnaA from "../../styles/image/avatar/Ana.png";
import MarcoA from "../../styles/image/avatar/Marco.png";
import CvLibero from "../componentsMaterialUI/CvLibero";
import CvAna from "../componentsMaterialUI/CvAna";
import CvMarco from "../componentsMaterialUI/CvMarco";
import Instagram from "../../styles/image/redes/instagram.png";
import WhatsApp from "../../styles/image/redes/whatsapp.png";
import Linkedin from "../../styles/image/redes/linkedin.png";
import Facebook from "../../styles/image/redes/facebook.png";

export default function ActionAreaCard() {
  return (
    <div id="mvv">
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <div id="header_Basick"></div>
          <CardMedia
            component="img"
            height="270"
            image={LiberoA}
            alt="Missão Instituvional"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body2" color="text.secondary">
              <hr></hr>
              <div id="nome">
                {" "}
                Dr. Líbero Cristiano Leal Rocha - OABMG-61.965 - Advogado
              </div>
              libero@lvmregulariza.com.br - (34)-99149-9080<br></br>
              <hr></hr>
              <div id="cvw">
                <div>
                  <img
                    alt="Instagram"
                    src={Instagram}
                    height="30px"
                    onClick={() => {
                      window.open(
                        "https://instagram.com/liberocristianole?igshid=ZDdkNTZiNTM="
                      );
                    }}
                  ></img>
                </div>
                <div>
                  <img
                    alt="WhatsApp"
                    src={WhatsApp}
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send/?phone=5534991499080&text&type=phone_number&app_absent=0"
                      );
                    }}
                    height="30px"
                  ></img>
                </div>
                <div>
                  {" "}
                  <img
                    alt="Linkedin"
                    src={Linkedin}
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/libero-rocha-655328270/"
                      );
                    }}
                    height="30px"
                  ></img>
                </div>
                <div></div>
              </div>
              <hr></hr>
              <br></br>
              <CvLibero />
            </Typography>
          </CardContent>
        </CardActionArea>
        <div id="px50"></div>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <div id="header_Basick"></div>
          <CardMedia
            component="img"
            height="270"
            image={AnaA}
            alt="Valores Institucionais"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body2" color="text.secondary">
              <hr></hr>
              <div id="nome">
                {" "}
                Dra. Ana Valéria de Oliveira - OABMG-124.367 - Advogada
              </div>
              valeria@lvmregulariza.com.br - (34)-99108-3533<br></br>
              <hr></hr>
              <div id="cvw">
                <div>
                  <img
                    alt="Instagram"
                    src={Instagram}
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/invites/contact/?i=gbgmaqd67ow3&utm_content=8lp8eu"
                      );
                    }}
                    height="30px"
                  ></img>
                </div>
                <div>
                  <img
                    alt="WhatsApp"
                    src={WhatsApp}
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send?phone=5534991083533"
                      );
                    }}
                    height="30px"
                  ></img>
                </div>
                <div>
                  {" "}
                  <img
                    alt="Linkedin"
                    src={Linkedin}
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/ana-valeria-de-olive-oliveira-07629764"
                      );
                    }}
                    height="30px"
                  ></img>
                </div>
                <div>
                  <img
                    alt="Facebook"
                    src={Facebook}
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/valeriaoliveira.oliveira.94?mibextid=ZbWKwL"
                      );
                    }}
                    height="30px"
                  ></img>{" "}
                </div>
              </div>
              <hr></hr>
              <br></br>
              <CvAna />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <div id="header_Basick"></div>
          <CardMedia
            component="img"
            height="270"
            image={MarcoA}
            alt="Valores Institucionais"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body2" color="text.secondary">
              <hr></hr>
              <div id="nome">
                {" "}
                Dr.Marco Túlio Marques Machado - Crea-68630-D - Engenheiro Civil
              </div>
              marcotulio@lvmregulariza.com.br - (34)-988485150<br></br>
              <hr></hr>
              <div id="cvw">
                <div>
                  <img
                    alt="Instagram"
                    src={Instagram}
                    onClick={() => {
                      window.open(
                        "https://instagram.com/engenheiromarcotulio?igshid=YmMyMTA2M2Y="
                      );
                    }}
                    height="30px"
                  ></img>
                </div>
                <div>
                  <img
                    alt="WhatsApp"
                    src={WhatsApp}
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send?phone=5534988485150"
                      );
                    }}
                    height="30px"
                  ></img>
                </div>
                <div>
                  {" "}
                  <img
                    alt="Linkedin"
                    src={Linkedin}
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/marco-t%C3%BAlio-04a38b150/"
                      );
                    }}
                    height="30px"
                  ></img>
                </div>
                <div>
                  {" "}
                  <img
                    alt="Facebook"
                    src={Facebook}
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/profile.php?id=100063530499538&mibextid=LQQJ4d"
                      );
                    }}
                    height="30px"
                  ></img>
                </div>
              </div>
              <br></br>
              <br></br>
              <CvMarco></CvMarco>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
