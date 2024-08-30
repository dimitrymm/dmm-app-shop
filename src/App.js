import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Routes from "./Routes";
import Header from "./components/Header";
import { CategoryProvider, ProductProvider } from "./Context/DataProvider";

function App() {
  return (
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
          <Header />
          <Routes />
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>
  );
}

export default App;
