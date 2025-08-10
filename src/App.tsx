import { useProducts } from "./hooks/ProductsHook";
import "./App.css";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catolog";
import type { Product } from "./types/product";

function App() {
  const { products, isLoading } = useProducts() as {
    products: Product[];
    isLoading: boolean;
  };

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (!products || products.length === 0) {
    return <div>Нет доступных овощей</div>;
  }

  return (
      <div>
        <Header />
        <Catalog products={products} />
      </div>
  );
}

export default App;
