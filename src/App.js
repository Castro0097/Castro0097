import Header from "../src/components/Header";
import Home from "../src/components/pages/Home";
import QuemSomos from "../src/components/pages/QuemSomos";
import Estudos from "../src/components/pages/Estudos";
import Contato from "../src/components/pages/Contato";
import Initial from "../src/components/pages/Initial";
import "normalize.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import Century from "../src/styles/tipografia/century-gothic.ttf";
import Nav from "../src/components/Nav"




const theme = createTheme({

  Typography:{



  },

  palette: {
    primary: {
      main: "#1e8b27"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div id="men">
          <Header></Header>
        </div>

        <Initial />

        <div id="layer1">
          <div id="marginefect"></div>
        </div>
        <div id="top"></div>

        <div id="container">
          <Home></Home>
          <br></br>
          <QuemSomos></QuemSomos>
          <br></br>
          <Estudos></Estudos>
        </div>
        <Contato />
      </div>
    </ThemeProvider>
  );
}

export default App;
