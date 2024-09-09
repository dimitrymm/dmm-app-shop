import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
  return (
    <div className="mb-10 bg-slate-300 sticky top-0">
      <header className=" flex justify-center  p-4 shadow-md shadow-slate-600">
        <h1>Adicione sua compra</h1>
        <nav>
          <ul className="mx-2">
            <Link to="/" className="hover:underline font-bold mr-1">
              Home
            </Link>
            <Link to="/statistics" className="hover:underline font-bold mr-1">
              Estatísticas
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}
