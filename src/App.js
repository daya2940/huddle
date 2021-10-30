import Header from "./components/Header";
import "./App.css";
import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <>
      <Header />
      <Container className="App">Heelo world</Container>
    </>
  );
}

export default App;
