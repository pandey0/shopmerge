"use client";

type Props = {
  apparel: "tee" | "hoodie";
  size: string;
};

export default function CheckoutSummary({ apparel, size }: Props) {
  const PRODUCT = {
    tee: { name: "CORE TEE", price: 34, gsm: "240 GSM" },
    hoodie: { name: "CORE HOODIE", price: 54, gsm: "320 GSM" },
  }[apparel];

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 h-fit sticky top-24 backdrop-blur-md">
      <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-8">Order Summary</h2>

      <div className="space-y-8">
        {/* ITEM DETAILS */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-lg font-black italic tracking-tighter uppercase">{PRODUCT.name}</p>
            <div className="flex gap-2">
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold tracking-widest uppercase">Size {size}</span>
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold tracking-widest uppercase">{PRODUCT.gsm}</span>
            </div>
          </div>
          <p className="text-xl font-light">${PRODUCT.price}.00</p>
        </div>

        {/* BILLING BREAKDOWN */}
        <div className="space-y-4 pt-8 border-t border-white/5">
          <div className="flex justify-between text-[11px] tracking-widest uppercase text-white/40">
            <span>Subtotal</span>
            <span className="text-white">${PRODUCT.price}.00</span>
          </div>

          <div className="flex justify-between text-[11px] tracking-widest uppercase text-white/40">
            <span>Shipping</span>
            <span className="text-emerald-400 font-bold">Complimentary</span>
          </div>

          <div className="flex justify-between items-end pt-4 border-t border-white/10">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase">Total Amount</span>
            <span className="text-3xl font-black italic tracking-tighter">${PRODUCT.price}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}