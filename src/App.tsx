import { useProducts } from "./hooks/ProductsHook";
import "./App.css";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catolog";

function App() {
  const { products, isLoading } = useProducts();

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
