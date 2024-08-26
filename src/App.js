import { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [productDateBuy, setProductDateBuy] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCategory, setProductCategory] = useState("");

  function handleAddProduct(event) {
    event.preventDefault();
    console.table({
      productDateBuy,
      productQuantity,
      productName,
      productCategory,
    });
  }

  return (
    <div className="">
      <header className="flex justify-center">
        <h1>Adicione sua compra</h1>
      </header>
      <main className="bg-slate-400 m-10 p-2">
        <form>
          <input
            value={productDateBuy}
            onChange={(event) => setProductDateBuy(event.target.value)}
            type="date"
          />
          <input
            value={productQuantity}
            onChange={(event) => setProductQuantity(event.target.value)}
            placeholder="Quantidade"
          />
          <input
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            placeholder="Nome"
          />
          <select
            value={productCategory}
            onChange={(event) => setProductCategory(event.target.value)}
          >
            <option value="">Categoria</option>
            <option value="frutas">Frutas</option>
            <option value="legumes">Legumes</option>
          </select>
          <button className="" type="submit" onClick={handleAddProduct}>
            Adicionar Compra
          </button>
        </form>
      </main>
      <aside className="bg-slate-400 m-10 p-2">
        <h1 className="text-center">Compras Listadas</h1>

        <div>
          <p>Data: {productDateBuy}</p>
          <p>Quantidade: {productQuantity}</p>
          <p>Nome: {productName}</p>
          <p>Categoria: {productCategory}</p>
        </div>
      </aside>
    </div>
  );
}

export default App;
