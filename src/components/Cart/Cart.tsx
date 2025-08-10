import style from "./Cart.module.css";
import { ActionIcon } from "@mantine/core";
import { useCart } from "../../context/CartContext";
import cartEmty from "../../assets/cart_empty.png";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const totalSum = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={style.cartContainer}>
      {cartItems.length === 0 ? (
        <div className={style.emptyCart}>
          <img className={style.emptyCartImg} src={cartEmty} alt="" />
          <p>You cart is empty!</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className={style.cartItem}>
              <img
                className={style.cartItemImg}
                src={item.image}
                alt={item.name}
              />
              <div className={style.cartItemContainer}>
                <h3 className={style.cardTitle}>{item.name}</h3>
                <p className={style.cardPrice}>$ {item.price}</p>
              </div>

              <div className={style.cardControls}>
                <ActionIcon
                  variant="filled"
                  aria-label="Decrease"
                  className={style.cardIcon}
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </ActionIcon>

                <span className={style.counterValue}>{item.quantity}</span>

                <ActionIcon
                  variant="filled"
                  aria-label="Increase"
                  className={style.cardIcon}
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </ActionIcon>
              </div>
            </div>
          ))}

          <div className={style.cartTotalSum}>
            <p>Total</p>
            <p>$ {totalSum}</p>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
