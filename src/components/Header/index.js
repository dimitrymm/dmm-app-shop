import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import CategoryForm from "../CategoryForm";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);
  }

  return (
    <div className="mb-10">
      <CategoryForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <header className="flex justify-center relative p-4 shadow-md shadow-slate-600">
        <h1>Adicione sua compra</h1>
        <nav>
          <ul className="mx-2">
            <Link to="/" className="hover:underline font-bold mr-1">
              Home
            </Link>
            <Link to="/statistics" className="hover:underline font-bold mr-1">
              Estatísticas
            </Link>
            <button
              onClick={handleOpenModal}
              className="hover:underline font-bold mr-1"
            >
              Adicionar Categoria
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}
