import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Routes from "./Routes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
