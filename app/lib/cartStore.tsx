"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  apparel: "tee" | "hoodie";
  size: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQty: (apparel: string, size: string, newQty: number) => void;
  removeFromCart: (apparel: string, size: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Adds item or increases quantity if it already exists
  const addToCart = (newItem: CartItem) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.apparel === newItem.apparel && i.size === newItem.size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += newItem.qty;
        return updated;
      }
      return [...prev, newItem];
    });
  };

  // Updates quantity or removes if qty reaches 0
  const updateQty = (apparel: string, size: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(apparel, size);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.apparel === apparel && item.size === size
          ? { ...item, qty: newQty }
          : item
      )
    );
  };

  // Removes a specific variant from the cart
  const removeFromCart = (apparel: string, size: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.apparel === apparel && i.size === size))
    );
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, updateQty, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}