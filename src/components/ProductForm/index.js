import React, { useState } from 'react';

export default function ProductForm() {
    const [productName, setProductName] = useState('');
    const [productDateBuy, setProductDateBuy] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productCategory, setProductCategory] = useState('');

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
        <main className="p-2">
            <form className="space-x-1 text-black">
                <input
                    value={productDateBuy}
                    onChange={(event) => setProductDateBuy(event.target.value)}
                    type="date"
                    className="w-56 rounded-md border border-gray-900 py-2 sm:w-32"
                />
                <input
                    value={productQuantity}
                    onChange={(event) => setProductQuantity(event.target.value)}
                    placeholder="Qtd"
                    className="w-28 rounded-md border border-gray-900 py-2 sm:w-16"
                />
                <input
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                    placeholder="Nome"
                    className="w-56 rounded-md border border-gray-900 py-2 sm:w-32"
                />
                <select
                    value={productCategory}
                    onChange={(event) => setProductCategory(event.target.value)}
                    className="w-28 rounded-md border border-gray-900 py-2 sm:w-32"
                >
                    <option value="">Categoria</option>
                    <option value="frutas">Frutas</option>
                    <option value="legumes">Legumes</option>
                </select>
                <button
                    className="mx-2 mt-1 w-full rounded-md border border-gray-950 p-2 hover:bg-gray-950 hover:text-gray-200 sm:mx-1 sm:w-40"
                    type="submit"
                    onClick={handleAddProduct}
                >
                    Adicionar Compra
                </button>
            </form>
        </main>
    );
}
