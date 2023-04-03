import Header from "../src/components/Header";
import Home from "../src/components/pages/Home";
import QuemSomos from "../src/components/pages/QuemSomos";
import Estudos from "../src/components/pages/Estudos";
import Contato from "../src/components/pages/Contato";
import Initial from "../src/components/pages/Initial";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <div id="men">
        <Header></Header>
      </div>
      <br></br>

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
  );
}

export default App;
