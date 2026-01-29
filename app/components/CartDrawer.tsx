"use client";

import { useCart } from "@/app/lib/cartStore";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, updateQty, removeFromCart } = useCart();
  const router = useRouter();
  
  const subtotal = items.reduce((acc, item) => acc + (item.apparel === 'tee' ? 34 : 54) * item.qty, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0A0A0A] border-l border-white/10 shadow-2xl pointer-events-auto animate-in slide-in-from-right duration-500 flex flex-col">
        
        {/* Header */}
        <div className="p-8 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-white/40" />
            <h2 className="text-xl font-black italic tracking-tighter uppercase">Your Bag</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-white/20 uppercase tracking-[0.3em] text-[10px] font-bold">Bag is empty</p>
              <button onClick={onClose} className="text-xs border-b border-white/20 pb-1 hover:border-white transition-colors">Continue Browsing</button>
            </div>
          ) : (
            items.map((item, i) => (
              <div key={`${item.apparel}-${item.size}-${i}`} className="flex gap-6 group">
                {/* Mock Image Placeholder */}
                <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 uppercase text-[10px] font-black italic text-white/20">
                  {item.apparel}
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-black italic tracking-tighter uppercase text-sm">{item.apparel === 'tee' ? 'Core Tee' : 'Core Hoodie'}</h3>
                      <p className="text-[10px] text-white/40 tracking-widest uppercase mt-1">Size {item.size}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.apparel, item.size)}
                      className="text-white/20 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    {/* Qty Controls */}
                    <div className="flex items-center gap-4 bg-white/5 rounded-full px-3 py-1 border border-white/5">
                      <button onClick={() => updateQty(item.apparel, item.size, item.qty - 1)} className="text-white/40 hover:text-white"><Minus size={12} /></button>
                      <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.apparel, item.size, item.qty + 1)} className="text-white/40 hover:text-white"><Plus size={12} /></button>
                    </div>
                    <p className="text-sm font-light">${(item.apparel === 'tee' ? 34 : 54) * item.qty}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-8 bg-white/[0.02] border-t border-white/5 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] tracking-widest uppercase text-white/40">
                <span>Subtotal</span>
                <span className="text-white">${subtotal}.00</span>
              </div>
              <div className="flex justify-between text-[10px] tracking-widest uppercase text-white/40">
                <span>Shipping</span>
                <span className="text-emerald-400">Complimentary</span>
              </div>
            </div>

            <div className="flex justify-between items-end pt-4 border-t border-white/10">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">Total</span>
              <span className="text-3xl font-black italic tracking-tighter">${subtotal}.00</span>
            </div>

            <button 
              onClick={() => router.push('/checkout')}
              className="w-full h-16 bg-white text-black rounded-full font-black text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}