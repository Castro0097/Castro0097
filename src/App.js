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



const raleway = {
  fontFamily: "Century",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Century'),
    local('Century-Regular'),
    url(${Century}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};


const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Arial"
  },
  overrides: {
    CssBaseline: {
      "@global": {
        "@font-face": [raleway]
      }
    }
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
