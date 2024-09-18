import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
    return (
        <div className="sticky top-0 mb-10 bg-slate-300">
            <header className="flex justify-center p-4 shadow-md shadow-slate-600">
                <nav>
                    <ul className="mx-2">
                        <Link to="/" className="mr-1 font-bold hover:underline">
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className="mr-1 font-bold hover:underline"
                        >
                            Produtos
                        </Link>
                        <Link
                            to="/statistics"
                            className="mr-1 font-bold hover:underline"
                        >
                            Estatísticas
                        </Link>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
