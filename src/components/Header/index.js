import { Link } from "react-router-dom/cjs/react-router-dom.min";
import img from "../../assets/images/mercado.jpg";

export default function Header() {
  return (
    <div className="mb-10">
      <img
        src={img}
        alt="fundo-feira"
        className="absolute object-cover w-full h-full  "
      />
      <header className="flex justify-center relative backdrop-blur-lg p-4">
        <h1>Adicione sua compra</h1>
        <nav>
          <ul className=" mx-2">
            <Link to="/" className="hover:underline font-bold mr-1">
              Home
            </Link>
            <Link to="/statistics" className="hover:underline font-bold mr-1">
              Estatisticas
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
