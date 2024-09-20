import { useState } from 'react';

import ProductList from '../../components/ProductList';
import CategoryList from '../../components/CategoryList';

export default function Statistics() {
    const [searchDate, setSearchDate] = useState('01');
    const [isGroupedListOpen, setIsGroupedListOpen] = useState(false);

    function handleSearchDate(event) {
        setSearchDate(event.target.value);
    }

    function handleOpenGroupedList(event) {
        !isGroupedListOpen
            ? setIsGroupedListOpen(true)
            : setIsGroupedListOpen(false);
    }

    return (
        <div className="flex justify-center">
            <div className="flex w-full max-w-2xl flex-col items-center justify-center rounded-md p-2 shadow-md shadow-slate-600">
                <nav>
                    <select
                        value={searchDate}
                        onChange={handleSearchDate}
                        className="rounded-md border border-gray-900 p-1"
                    >
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>

                    <label
                        htmlFor="grouped"
                        className="ml-1 rounded-md border border-black p-1"
                    >
                        Agrupar Produtos?
                        <input
                            value={isGroupedListOpen}
                            onClick={handleOpenGroupedList}
                            type="checkbox"
                            name="grouped"
                            className="ml-1"
                        />
                    </label>
                </nav>

                <div className="w-full">
                    <ProductList
                        isGroupedListOpen={isGroupedListOpen}
                        searchDate={searchDate}
                    />
                </div>
                <CategoryList />
            </div>
        </div>
    );
}
