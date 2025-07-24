// src/components/ProductGrid/ProductGrid.jsx
import style from "./Catolog.module.css";
import ProductCard from "../ProductCard/ProductCard";

const Catalog = ({ products }) => {
  return (
    <>
      <h1 className={style.catalog}>
        Catalog
      </h1>
      <div className={style.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Catalog;
