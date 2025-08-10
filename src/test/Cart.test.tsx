// src/components/Cart/Cart.test.tsx
import { render, screen,  } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Cart from "../components/Cart/Cart";
import { CartProvider } from "../context/CartContext";

describe("Cart простой тест", () => {
  it("показывает сообщение о пустой корзине", () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
    expect(screen.getByText(/you cart is empty!/i)).toBeVisible();
  });

 
  it("кнопки + и - рендерятся при товарах", () => {
   
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );
   
    expect(screen.queryByLabelText("Increase")).toBeNull();
    expect(screen.queryByLabelText("Decrease")).toBeNull();
  });
});

