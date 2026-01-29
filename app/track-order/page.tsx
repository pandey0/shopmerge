"use client";

import { useState } from "react";
import { Search, Package, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrackOrderPage() {
  const [orderID, setOrderID] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Mocking an API call
    setTimeout(() => {
      setOrderData({
        id: orderID,
        status: "shipped",
        date: "Jan 12, 2026",
        estimate: "Jan 18, 2026",
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">
            Track Order
          </h1>
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/40">
            Enter your order ID to see real-time updates
          </p>
        </div>

        {/* SEARCH FORM */}
        <form onSubmit={handleTrack} className="relative group mb-12">
          <input
            type="text"
            value={orderID}
            onChange={(e) => setOrderID(e.target.value)}
            placeholder="ORDER ID (e.g. #CORE-1234)"
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-sm outline-none transition-all focus:border-white/40 focus:bg-white/5 uppercase tracking-widest placeholder:text-white/20"
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white text-black rounded-xl hover:scale-105 active:scale-95 transition-all"
          >
            {isSearching ? <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : <Search size={20} />}
          </button>
        </form>

        {/* RESULTS AREA */}
        {orderData && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
            <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Status</p>
                  <p className="text-2xl font-black italic tracking-tighter uppercase text-emerald-400">In Transit</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Estimated Delivery</p>
                  <p className="text-lg font-light uppercase tracking-widest">{orderData.estimate}</p>
                </div>
              </div>

              {/* TRACKING STEPPER */}
              <div className="relative flex justify-between items-center px-2">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
                
                {/* Steps */}
                {[
                  { icon: <CheckCircle2 size={16} />, label: "Confirmed", active: true },
                  { icon: <Package size={16} />, label: "Packed", active: true },
                  { icon: <Truck size={16} />, label: "Shipped", active: true },
                  { icon: <ArrowRight size={16} />, label: "Arrived", active: false },
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${step.active ? 'bg-white border-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-black border-white/20 text-white/20'}`}>
                      {step.icon}
                    </div>
                    <span className={`text-[8px] font-bold uppercase tracking-widest ${step.active ? 'text-white' : 'text-white/20'}`}>{step.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ADDITIONAL INFO BOX */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                <p className="text-[8px] font-bold tracking-widest text-white/30 uppercase mb-2">Order Date</p>
                <p className="text-xs font-medium">{orderData.date}</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                <p className="text-[8px] font-bold tracking-widest text-white/30 uppercase mb-2">Carrier</p>
                <p className="text-xs font-medium">CORE-EXPRESS</p>
              </div>
            </div>
          </div>
        )}

        {/* HELP SECTION */}
        <div className="mt-20 text-center">
          <p className="text-white/30 text-[10px] tracking-widest uppercase mb-4">Need help with your order?</p>
          <Link href="/contact" className="text-[10px] font-black tracking-[0.3em] uppercase border-b border-white/20 pb-1 hover:border-white transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}