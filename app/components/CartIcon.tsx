"use client";

import { useCart } from "@/app/lib/cartStore";

export default function CartIcon() {
  const { items } = useCart();

  return (
    <button className="relative">
      🛒
      {items.length > 0 && (
        <span
          className="
            absolute -top-2 -right-2
            w-5 h-5 rounded-full
            bg-red-500 text-white
            text-xs flex items-center justify-center
          "
        >
          {items.length}
        </span>
      )}
    </button>
  );
}
