import React, { useState } from "react";

export default function ProductForm() {
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
    <main className="mx-5 mb-5 p-5 backdrop-blur-2xl shadow-lg rounded-md max-w-3xl">
      <form className="text-black">
        <input
          value={productDateBuy}
          onChange={(event) => setProductDateBuy(event.target.value)}
          type="date"
          className="py-2 mx-1"
        />
        <input
          value={productQuantity}
          onChange={(event) => setProductQuantity(event.target.value)}
          placeholder="Qtd"
          className="py-2 mx-1 max-w-20"
        />
        <input
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          placeholder="Nome"
          className="py-2 mx-1"
        />
        <select
          value={productCategory}
          onChange={(event) => setProductCategory(event.target.value)}
          className="py-2 mx-1"
        >
          <option value="">Categoria</option>
          <option value="frutas">Frutas</option>
          <option value="legumes">Legumes</option>
        </select>
        <button
          className="p-2 rounded-md mt-1 border border-gray-950"
          type="submit"
          onClick={handleAddProduct}
        >
          Adicionar Compra
        </button>
      </form>
    </main>
  );
}
