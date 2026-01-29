"use client";

import { useState } from "react";
import { useCart } from "@/app/lib/cartStore";
import { useRouter } from 'next/navigation';
import { ShoppingBag, Info, X, Eye, EyeOff } from "lucide-react"; 

const sizes = ["S", "M", "L", "XL"];

type Props = {
  apparel: "tee" | "hoodie";
};

export default function UI({ apparel }: Props) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [minimalMode, setMinimalMode] = useState(true); // Controls text visibility
  const [infoTab, setInfoTab] = useState<"details" | "size">("details");
  const router = useRouter();

  const PRODUCT = {
    tee: {
      name: "CORE TEE",
      desc: "Heavyweight 240 GSM • All-season comfort",
    },
    hoodie: {
      name: "CORE HOODIE",
      desc: "Premium 320 GSM • Winter-ready warmth",
    },
  }[apparel];

  return (
    <>
      <div className="fixed bottom-0 w-full px-6 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] flex flex-col gap-6 pointer-events-auto z-20">
        
        {/* PRODUCT INFO - Fades out when minimalMode is active */}
        <div className={`text-center space-y-1 transition-all duration-700 ease-in-out transform ${minimalMode ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}`}>
          <h1 className="text-3xl font-black tracking-tighter uppercase italic">
            {PRODUCT.name}
          </h1>
          <p className="text-[11px] tracking-[0.2em] uppercase font-medium text-white/50">
            {PRODUCT.desc}
          </p>
          
          <div className="flex flex-col items-center mt-2">
            <p className="text-xl font-light text-white/90">$34.00</p>
            {/* Specs Button - Placed below price */}
            <button
              onClick={() => { setInfoTab("details"); setShowInfo(true); }}
              className="mt-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
            >
              <Info size={12} />
              Product Specs
            </button>
          </div>
        </div>

        {/* SIZE SELECTOR */}
        <div className="flex justify-center gap-4">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`
                w-12 h-12 rounded-full text-xs font-bold tracking-widest transition-all duration-300
                border flex items-center justify-center
                ${selectedSize === s
                  ? "bg-white border-white text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-white/5 border-white/10 text-white hover:border-white/40"}
              `}
            >
              {s}
            </button>
          ))}
        </div>

        {/* CTA ACTIONS */}
        <div className="flex items-center justify-center gap-3 w-full max-w-sm mx-auto">
          {/* CART BUTTON */}
          <button
            disabled={!selectedSize}
            onClick={() => selectedSize && addToCart({ apparel, size: selectedSize, qty: 1 })}
            className={`
              h-14 w-14 rounded-full flex items-center justify-center border transition-all duration-300
              ${selectedSize
                ? "border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
                : "border-white/5 text-white/20"}
            `}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>

          {/* BUY NOW BUTTON */}
          <button
            disabled={!selectedSize}
            onClick={() => selectedSize && router.push(`/checkout?apparel=${apparel}&size=${selectedSize}`)}
            className={`
              flex-1 h-14 rounded-full font-black text-xs tracking-[0.3em] transition-all duration-500
              ${selectedSize
                ? "bg-white text-black translate-y-0"
                : "bg-white/10 text-white/20 translate-y-1 opacity-50"}
            `}
          >
            BUY NOW
          </button>

          {/* EYE ICON (MINIMAL MODE) - Placed next to Buy button */}
          <button 
            onClick={() => setMinimalMode(!minimalMode)}
            className={`
              h-14 w-14 rounded-full flex items-center justify-center border transition-all duration-300
              ${minimalMode 
                ? "bg-white border-white text-black shadow-lg" 
                : "bg-white/5 border-white/10 text-white/40 hover:text-white"}
            `}
          >
            {minimalMode ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* DRAWER-STYLE INFO MODAL */}
      {showInfo && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end justify-center animate-in fade-in duration-300"
          onClick={() => setShowInfo(false)}
        >
          <div 
            className="bg-[#0A0A0A] w-full max-w-md rounded-t-[2.5rem] p-8 border-t border-white/10 shadow-2xl animate-in slide-in-from-bottom duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-8" />
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black italic tracking-tighter uppercase">Specs</h2>
              <button onClick={() => setShowInfo(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex p-1 bg-white/5 rounded-full mb-8">
              {["details", "size"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setInfoTab(tab as any)}
                  className={`flex-1 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all
                    ${infoTab === tab ? "bg-white text-black shadow-lg" : "text-white/40"}`}
                >
                  {tab === "details" ? "Details" : "Size Guide"}
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              {infoTab === "details" ? (
                <div className="space-y-6">
                  {[
                    { label: "Material", val: "100% Suprima Cotton" },
                    { label: "Weight", val: apparel === "tee" ? "240 GSM" : "320 GSM" },
                    { label: "Fit", val: "True to size / Boxy" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                      <span className="text-white/40 uppercase text-[10px] tracking-widest">{item.label}</span>
                      <span className="text-sm font-medium">{item.val}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-white/5">
                  <table className="w-full text-left text-xs tracking-widest uppercase">
                    <thead className="bg-white/5 text-white/40">
                      <tr>
                        <th className="p-4 font-normal">Size</th>
                        <th className="p-4 font-normal text-center">Chest</th>
                        <th className="p-4 font-normal text-right">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[["S", 38, 27], ["M", 40, 28], ["L", 42, 29], ["XL", 44, 30]].map(([s, c, l]) => (
                        <tr key={s as string} className="border-t border-white/5">
                          <td className="p-4 font-bold">{s}</td>
                          <td className="p-4 text-center text-white/60">{c}"</td>
                          <td className="p-4 text-right text-white/60">{l}"</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}