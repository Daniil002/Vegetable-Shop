import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import AddToCartButton from "../AddToCartButton/AddToCartButton";


function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="" />

        <AddToCartButton />


    </header>
  );
}

// Экспортируем компонент по умолчанию, чтобы использовать его в App.tsx
export default Header;
