"use client";

import { useState } from "react";
import { Mail, MessageSquare, Globe, ArrowUpRight, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 pt-32 pb-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="fixed -bottom-24 -left-24 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-16">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
            Get in <br /> <span className="text-white/20">Touch</span>
          </h1>
          <p className="mt-6 text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">
            Average response time: &lt; 24 Hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          
          {/* LEFT COLUMN: QUICK CHANNELS */}
          <div className="space-y-4">
            {[
              { icon: <Mail size={18} />, label: "Email Us", value: "support@core.studio", href: "mailto:support@core.studio" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="text-white/40 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[8px] font-bold tracking-widest uppercase text-white/30">{item.label}</p>
                    <p className="text-sm font-medium tracking-wide">{item.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input type="text" placeholder=" " className="peer w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white transition-colors" />
                  <label className="absolute left-0 top-3 text-[10px] uppercase tracking-widest text-white/30 transition-all peer-focus:-top-4 peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4">Name</label>
                </div>
                <div className="relative group">
                  <input type="email" placeholder=" " className="peer w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white transition-colors" />
                  <label className="absolute left-0 top-3 text-[10px] uppercase tracking-widest text-white/30 transition-all peer-focus:-top-4 peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4">Email</label>
                </div>
              </div>

              <div className="relative group pt-4">
                <textarea rows={4} placeholder=" " className="peer w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white transition-colors resize-none" />
                <label className="absolute left-0 top-7 text-[10px] uppercase tracking-widest text-white/30 transition-all peer-focus:top-0 peer-focus:text-white peer-[:not(:placeholder-shown)]:top-0">How can we help?</label>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-white text-black rounded-full font-black text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                <Send size={14} className={isSubmitting ? "animate-ping" : ""} />
              </button>
            </form>
          </div>

        </div>

        {/* FOOTER LINK */}
        <div className="mt-20 flex justify-center">
          <Link href="/" className="group flex items-center gap-3">
             <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-white transition-all" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">Back to Studio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}