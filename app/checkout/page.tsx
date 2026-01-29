import { Suspense } from "react";
import CheckoutClient from "./CheckoutClient";

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen bg-black text-white flex items-center justify-center">
          <p className="text-xs tracking-widest uppercase text-white/40">
            Loading checkout…
          </p>
        </div>
      }
    >
      <CheckoutClient />
    </Suspense>
  );
}
