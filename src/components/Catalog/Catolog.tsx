
import style from "./Catolog.module.css";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../types/product";

const Catalog = ({ products }: {products: Product[]}) => {
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
