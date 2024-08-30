import CategoryForm from "../../components/CategoryForm";
import CategoryList from "../../components/CategoryList";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center">
        <ProductForm />
      </div>
      <div className="flex justify-center">
        <CategoryForm />
      </div>

      <div className="flex justify-center">
        <ProductList />

        <CategoryList />
      </div>
    </div>
  );
}
