"use client";

import { useCart } from "@/app/lib/cartStore";
import { Package, ShoppingBag } from "lucide-react";
import Link from "next/link";
import CartDrawer from "./CartDrawer";
import { useState } from "react";

export default function Navbar() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
  
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism Container */}
      <div className="mx-auto mt-4 px-4 w-full max-w-7xl">
        <nav className="flex items-center justify-between h-14 px-6 rounded-full bg-black/40 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          
          {/* LOGO - Bold & Spaced */}
          <Link href="/" className="group flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform duration-500" />
            <span className="text-white font-black tracking-[0.3em] text-sm uppercase italic">
              CORE
            </span>
          </Link>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            
            {/* TRACK ORDER ICON */}
           <Link 
  href="/track-order" 
  className="relative p-2 text-white/50 hover:text-white transition-colors group"
  aria-label="Track Order"
>
  <Package size={18} strokeWidth={1.5} />
  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
    Track
  </span>
</Link>
            {/* CART ICON */}
<button onClick={() => setIsCartOpen(true)} className="relative p-2 group">              <ShoppingBag 
                size={18} 
                strokeWidth={1.5} 
                className="text-white/50 group-hover:text-white transition-colors" 
              />
              
              {count > 0 ? (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white text-[9px] font-black text-black items-center justify-center">
                    {count}
                  </span>
                </span>
              ) : (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/0 group-hover:bg-white transition-all duration-300" />
              )}
            </button>

          </div>
        </nav>
      </div>
    </header>
      </>
  );
}