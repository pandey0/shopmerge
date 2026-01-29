"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/app/lib/cartStore";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
