import "./App.scss";
import Header from "./components/header/Header";
import CardEach from "./components/main/card/CardEach";
import CardContainer from "./components/main/cardContainer/CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer>
        <CardEach />
      </CardContainer>
    </div>
  );
}

export default App;
