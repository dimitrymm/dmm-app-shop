import { useProducts } from "../../Context/DataProvider";

export default function Statistics() {
  const products = useProducts();

  const meses = products.map((product) => {
    const data = product.date;
    const parte = data.split("/");
    return parseInt(parte[1], 10);
  });

  // const mes = Intl.DateTimeFormat("pt-BR", { month: "long" }).format(meses);

  console.log(meses);

  return (
    <div className="flex relative">
      <div className=" mx-5 backdrop-blur-lg p-2 shadow-lg rounded-md w-full min-w-96">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <p>{product.date}</p>
            </div>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
