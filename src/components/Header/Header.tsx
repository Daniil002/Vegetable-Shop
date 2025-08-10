import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { useState } from "react";
import Cart from "../Cart/Cart";

function Header() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  
  return (
    <header className={style.header}>
      <img src={logo} alt="" />

      <AddToCartButton onClick={() => setModalOpen(!modalOpen)} />
      {modalOpen && <Cart />}
    </header>
  );
}

export default Header;