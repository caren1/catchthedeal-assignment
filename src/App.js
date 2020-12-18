import "./App.css";
import Offers from "./components/Offers/Offers";
import offerData from "./offers.json";

function App() {
  return (
    <div className="App">
      <Offers offers={offerData} />
    </div>
  );
}

export default App;
