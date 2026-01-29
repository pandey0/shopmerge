"use client";

import { Lock, ArrowRight } from "lucide-react";

export default function CheckoutForm() {
  const inputStyles = `
    w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 pt-6 pb-2 
    text-white text-sm outline-none transition-all duration-300
    focus:border-white/40 focus:bg-white/[0.06] placeholder:opacity-0 peer
  `;
  
  const labelStyles = `
    absolute left-4 top-4 text-[10px] uppercase tracking-widest text-white/40 
    transition-all duration-300 pointer-events-none
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm
    peer-focus:top-4 peer-focus:translate-y-0 peer-focus:text-[10px]
  `;

  return (
    <form className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="flex items-center gap-3 border-b border-white/5 pb-6">
        <div className="p-2 bg-white/5 rounded-lg text-white/40">
          <Lock size={18} />
        </div>
        <div>
          <h1 className="text-xl font-black italic tracking-tighter uppercase">Checkout</h1>
          <p className="text-[10px] text-white/30 tracking-widest uppercase">Secure Encrypted Transaction</p>
        </div>
      </div>

      {/* CONTACT */}
      <section className="space-y-4">
        <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-6">01. Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input id="fname" placeholder=" " className={inputStyles} />
            <label htmlFor="fname" className={labelStyles}>First Name</label>
          </div>
          <div className="relative">
            <input id="lname" placeholder=" " className={inputStyles} />
            <label htmlFor="lname" className={labelStyles}>Last Name</label>
          </div>
          <div className="relative md:col-span-2">
            <input id="email" type="email" placeholder=" " className={inputStyles} />
            <label htmlFor="email" className={labelStyles}>Email Address</label>
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="space-y-4">
        <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-6">02. Shipping</h2>
        <div className="space-y-4">
          <div className="relative">
            <input id="addr1" placeholder=" " className={inputStyles} />
            <label htmlFor="addr1" className={labelStyles}>Address Line 1</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative">
              <input id="city" placeholder=" " className={inputStyles} />
              <label htmlFor="city" className={labelStyles}>City</label>
            </div>
            <div className="relative">
              <input id="state" placeholder=" " className={inputStyles} />
              <label htmlFor="state" className={labelStyles}>State</label>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <input id="zip" placeholder=" " className={inputStyles} />
              <label htmlFor="zip" className={labelStyles}>Zip Code</label>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-4">
        <button
          type="submit"
          className="group w-full h-16 bg-white text-black rounded-full font-black text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-3 transition-all hover:gap-6 active:scale-95"
        >
          Continue to Payment
          <ArrowRight size={16} />
        </button>
        <p className="text-[9px] text-white/20 text-center mt-6 tracking-widest uppercase italic">
          Free worldwide shipping on all orders this week
        </p>
      </div>
    </form>
  );
}