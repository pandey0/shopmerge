"use client";

import { useSearchParams, useRouter } from "next/navigation";
import CheckoutForm from "@/app/components/CheckoutForm";
import CheckoutSummary from "@/app/components/CheckoutSummary";
import { ChevronLeft } from "lucide-react";

export default function CheckoutClient() {
  const params = useSearchParams();
  const router = useRouter();

  const apparel = params.get("apparel") as "tee" | "hoodie" | null;
  const size = params.get("size");

  if (!apparel || !size) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
          <span className="text-2xl">!</span>
        </div>
        <h1 className="text-xl font-black italic tracking-tighter uppercase mb-2">
          Session Expired
        </h1>
        <p className="text-xs tracking-widest uppercase text-white/40 mb-8">
          The checkout link is no longer valid
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-10 py-4 rounded-full bg-white text-black font-black text-[10px] tracking-[0.3em] uppercase transition-transform active:scale-95"
        >
          Return to Store
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* Background orb */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 mb-12 text-white/40 hover:text-white transition-colors"
        >
          <ChevronLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
            Back to Studio
          </span>
        </button>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 xl:gap-24 items-start">
          {/* Form */}
          <div className="order-2 lg:order-1">
            <CheckoutForm />
          </div>

          {/* Summary */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-32">
            <div className="hidden lg:block">
              <CheckoutSummary apparel={apparel} size={size} />
            </div>

            {/* Mobile summary */}
            <div className="lg:hidden mb-12 p-6 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">
                  Your Selection
                </p>
                <p className="text-lg font-black italic tracking-tighter uppercase">
                  {apparel} / {size}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-light">
                  ${apparel === "tee" ? "34" : "54"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
