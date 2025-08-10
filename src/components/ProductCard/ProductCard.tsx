import { useState } from "react";
import style from "./ProductCard.module.css";
import { ActionIcon, Button } from "@mantine/core";
import { BsCart2 } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import type { Product } from "../../types/product";

const ProductCard = ({ product }: { product: Product }) => {

  const { addToCart } = useCart()
  const { name, price, image, id } = product;
  const [count, setCount] = useState<number>(1);

  const handleDecrease = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      quantity: count,
    })
  }

  return (
    <div className={style.cardContainer}>
      <img src={image} alt={name} className={style.cardImg} />

      <div className={style.cardCountItems}>
        <h3 className={style.cardTitle}>{name}</h3>

        <div className={style.cardControls}>
          <ActionIcon
            variant="filled"
            aria-label="Decrease"
            className={style.cardIcon}
            onClick={handleDecrease}
          >
            -
          </ActionIcon>

          <span className={style.counterValue}>{count}</span>

          <ActionIcon
            variant="filled"
            aria-label="Increase"
            className={style.cardIcon}
            onClick={handleIncrease}
          >
            +
          </ActionIcon>
        </div>
      </div>

      <div className={style.cardPriceButton}>
        <p className={style.cardPrice}>{price} ₽</p>
        <Button
          variant="filled"
          size="xs"
          radius="md"
          className={style.cardAddButton}
          onClick={handleAddToCart}
        >
          Add to Cart <BsCart2 className={style.buttonImg} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
