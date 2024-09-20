import { useEffect, useState } from 'react';
import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';
import PropTypes from 'prop-types';
import FormatDate from '../../utils/FormatDate';

export default function ProductForm({ onSubmit }) {
    const [productName, setProductName] = useState('');
    const [productDateBuy, setProductDateBuy] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productCategoryId, setProductCategoryId] = useState('');
    const [categories, setCategories] = useState([]);

    const { setError, removeError, getErrorMessageByFieldName, errors } =
        useErrors();

    useEffect(() => {
        async function loadCategories() {
            try {
                const categoriesList = await CategoriesService.listCategories();
                setCategories(categoriesList);
            } catch (error) {
                console.log('erro loadcategories', error);
            }
        }
        loadCategories();
    }, []);

    function handleDateChange(event) {
        if (!event.target.value) {
            console.log('Data é obrigatiorio');
        } else {
            setProductDateBuy(event.target.value);
        }
    }

    async function handleAddProduct(event) {
        event.preventDefault();

        await onSubmit({
            productDateBuy,
            productQuantity,
            productName,
            productCategoryId,
        });
    }

    return (
        <main className="p-2">
            <form onSubmit={handleAddProduct} className="space-x-1 text-black">
                <input
                    value={productDateBuy}
                    onChange={handleDateChange}
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
                    value={productCategoryId}
                    onChange={(event) =>
                        setProductCategoryId(event.target.value)
                    }
                    className="w-28 rounded-md border border-gray-900 py-2 sm:w-32"
                >
                    <option value="">Sem Categoria</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <button
                    className="mx-2 mt-1 w-full rounded-md border border-gray-950 p-2 hover:bg-gray-950 hover:text-gray-200 sm:mx-1 sm:w-40"
                    type="submit"
                >
                    Adicionar Compra
                </button>
            </form>
        </main>
    );
}

ProductForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
