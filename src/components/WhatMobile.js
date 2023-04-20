import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Modalc from "../components/componentsMaterialUI/Modalc"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WhatMobile() {


  

   function qS() {
     const element = document.getElementById("quemsomos");
     element.scrollIntoView();
   }

   function servicos() {
     const element = document.getElementById("servi");
     element.scrollIntoView();
   }

   function contato() {
     const element = document.getElementById("contact");
     element.scrollIntoView();
   }

      function home() {
        const element = document.getElementById("initial");
        element.scrollIntoView();
      }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

    const handleClose = () => {
      setOpen(false);
    };
  const handleCloseHome = () => {
    setOpen(false);
    home();
  };

  const handleCloseQuemsomos = () => {
    setOpen(false);
    qS();
    
  };


    const handleCloseServivos = () => {
      setOpen(false);
      servicos();
    };

    const handleCloseContato = () => {
      setOpen(false);
      contato();
    };

   

  return (
    <div id="sowp">
      <Button id="btn_m" variant="outlined" onClick={handleClickOpen}>
        ☰
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              LVM - Regulariza
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              voltar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText
              onClick={() => {
                handleCloseHome();
              }}
              primary="Home"
              secondary="Início"
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              onClick={() => {
                handleCloseQuemsomos();
              }}
              primary="Quem somos"
              secondary="Conheça nossa equipe"
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              onClick={() => {
                handleCloseServivos();
              }}
              primary="Serviços"
              secondary="Procedimentos"
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              onClick={() => {
                handleCloseContato();
              }}
              primary="Contato"
              secondary="Araxá e Regição"
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Fale conosco" secondary="whatsApp" />
            <Modalc></Modalc>
          </ListItem>
          <Divider />
          
        </List>
      </Dialog>
      
    </div>
  );
}
