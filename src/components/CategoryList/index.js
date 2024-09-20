import { useEffect, useState } from 'react';
import CategoriesService from '../../services/CategoriesService';

import trash from '../../assets/icons/trash (1).svg';

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            try {
                const categoriesList = await CategoriesService.listCategories();
                setCategories(categoriesList);
            } catch (error) {
                console.log('error', error);
            }
        }
        loadCategories();
    }, []);

    return (
        <aside className="h-full flex-col rounded-md p-2">
            <h1 className="text-center">Categorias</h1>
            <div className="m-1 flex justify-center">
                <div>
                    <span>Data:</span>
                    {categories.map((category) => (
                        <div key={category.id} className=" ">
                            <p className="rounded-md border border-gray-900 px-2 hover:border-b-2 hover:border-r-2">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>

                <div>
                    <span>Excluir</span>
                    {categories.map((category) => (
                        <div key={category.id} className="">
                            <button className=" ">
                                <img
                                    className="ml-4 h-5 fill-inherit text-red-600"
                                    src={trash}
                                    alt="X"
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
