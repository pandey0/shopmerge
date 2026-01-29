// "use client";

// import { useEffect, useState } from "react";

// export default function ColorModeHint() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//     const t = setTimeout(() => setVisible(false), 2000);
//     return () => clearTimeout(t);
//   }, []);

//   if (!visible) return null;

//   return (
//     <div className="fixed inset-0 z-20 pointer-events-none flex items-center justify-center">
//       <div className="text-white/70 text-sm tracking-wide">
//         Swipe ↑ ↓ to change color
//       </div>
//     </div>
//   );
// }

"use client";

export default function ColorModeHint({ text }: { text: string }) {
  // Check for direction based on common instruction symbols
  const isVertical = text.includes("↑") || text.includes("↓");

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none">
      {/* Container forced to center of screen */}
      <div className="flex flex-col items-center justify-center w-full max-w-[280px] gap-6 animate-in fade-in zoom-in-95 duration-500">
        
        {/* GESTURE GUIDE ICON */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Pulsing Glass Ring */}
          <div className="absolute inset-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-md animate-pulse" />
          
          {/* Centered Swipe Dot */}
          <div className={`w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)]
            ${isVertical ? 'animate-swipe-y' : 'animate-swipe-x'}`} 
          />
        </div>

        {/* MULTI-LINE TEXT TAG */}
        <div className="flex flex-col items-center text-center">
          <div className="px-6 py-3 rounded-2xl bg-white text-black shadow-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] italic leading-relaxed whitespace-pre-line">
              {text}
            </p>
          </div>
          
          <p className="mt-3 text-[8px] text-white/30 uppercase tracking-[0.4em] font-black animate-pulse">
            Active Mode
          </p>
        </div>
      </div>
    </div>
  );
}