import "./App.css";
import Navigation from "./components/Navigation";
import ImageWeb from "./components/ImageWeb3";
import New from "./components/New";
import Laptops from "./components/Laptops";
import Retro from "./components/RetroPSC";
import Growth from "./components/Growth";

function App() {
  return (
    <div>
      <div className="first-box">
        <Navigation />
        <div className="grid-container">
          <ImageWeb className="grid-child" />
          <New className="grid-child" />
        </div>
      </div>

      <div class="container third-box">
        <div class="row">
          <div class="col-lg">
            <Retro />
          </div>
          <div class="col-lg">
            <Laptops />
          </div>
          <div class="col-lg">
            <Growth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
