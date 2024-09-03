import CategoryForm from "../../components/CategoryForm";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="max-w-2xl mx-1 mb-3 shadow-md shadow-slate-600 rounded-md ">
          <ProductForm />
        </div>
        <div className="max-w-2xl mx-1 mb-3 shadow-md shadow-slate-600 rounded-md">
          <CategoryForm />
        </div>

        <div className=" max-w-2xl mx-1 mb-3 shadow-md shadow-slate-600 rounded-md">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
