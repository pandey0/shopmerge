// "use client";

// type Props = {
//   active: boolean;
//   onToggle: () => void;
// };

// export default function ApparelModeButton({ active, onToggle }: Props) {
//   return (
//     <button
//       onClick={onToggle}
//       className={`
//         fixed left-4 bottom-28 z-20
//         w-12 h-12 rounded-full
//         bg-white/20 text-white
//         shadow-lg transition
//         ${active ? "scale-110 ring-2 ring-white" : "opacity-80"}
//       `}
//       aria-label="Change apparel"
//     >
//       👕
//     </button>
//   );
// }


// "use client";

// export default function ApparelModeButton({ active, onToggle }: any) {
//   return (
//    <button
//   onClick={onToggle}
//   className={`
//     fixed left-4 bottom-28 z-30
//     w-12 h-12 rounded-full
//     bg-white/20 text-white
//     shadow-lg transition
//     pointer-events-auto
//     ${active ? "scale-110 ring-2 ring-white" : "opacity-80"}
//   `}
// >
//   👕
// </button>
//   );
// }


// "use client";

// export default function ApparelModeButton({ active, onToggle }: any) {
//   return (
//     <div className="fixed left-4 bottom-28 z-30">
//       <button
//         onClick={onToggle}
//         // Increased touch target with padding and transition-all for tactile feedback
//         className={`
//           relative flex items-center gap-3 px-4 h-12 rounded-full
//           backdrop-blur-lg border transition-all duration-300 active:scale-95
//           ${active 
//             ? "bg-white border-white shadow-[0_8px_20px_rgba(255,255,255,0.15)]" 
//             : "bg-black/40 border-white/20 shadow-xl"
//           }
//         `}
//       >
//         {/* Minimalist Icon */}
//         <div className="flex flex-col items-center gap-[2.5px]">
//           <div className={`w-3.5 h-[1.5px] ${active ? 'bg-black' : 'bg-white'}`} />
//           <div className={`w-3.5 h-[1.5px] ${active ? 'bg-black' : 'bg-white'}`} />
//           <div className={`w-2 h-[1.5px] ${active ? 'bg-black' : 'bg-white'}`} />
//         </div>

//         {/* Text Label - Visible on mobile so user knows what it is */}
//         <span className={`
//           text-[9px] uppercase tracking-[0.2em] font-medium transition-colors
//           ${active ? 'text-black' : 'text-white/90'}
//         `}>
//           {active ? "Apparel On" : "Apparel"}
//         </span>
//       </button>
//     </div>
//   );
// }
// "use client";

// export default function ApparelModeButton({ active, onToggle }: any) {
//   return (
//     <div className="fixed left-6 bottom-32 z-30">
//       <button
//         onClick={onToggle}
//         aria-label="Toggle Apparel"
//         className={`flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-300 active:scale-90
//           ${active 
//             ? "bg-white border-white text-black" 
//             : "bg-black/60 border-white/20 text-white"
//           }`}
//       >
//         <div className="flex flex-col gap-[3px] items-center">
//           <div className={`w-4 h-[1.5px] rounded-full ${active ? 'bg-black' : 'bg-white'}`} />
//           <div className={`w-4 h-[1.5px] rounded-full ${active ? 'bg-black' : 'bg-white'}`} />
//           <div className={`w-2 h-[1.5px] rounded-full ${active ? 'bg-black' : 'bg-white'}`} />
//         </div>
//       </button>
//     </div>
//   );
// }
"use client";

import { Shirt } from "lucide-react";

export default function ApparelModeButton({ active, onToggle }: any) {
  return (
    /* Adjusted to left-2 and bottom-32 */
    <div className="fixed left-2 bottom-32 z-30 pointer-events-none">
      <div className="flex flex-col items-center gap-1.5 pointer-events-auto">
        {/* Toggle Switch */}
        <button 
          onClick={onToggle}
          className={`w-9 h-16 rounded-full border flex flex-col items-center p-1 transition-all duration-500 shadow-2xl backdrop-blur-md
            ${active ? 'bg-white border-white' : 'bg-black/60 border-white/10'}`}
        >
          <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out
            ${active 
              ? 'bg-black text-white translate-y-7 shadow-md' 
              : 'bg-white/10 text-white translate-y-0'}`}
          >
            <Shirt size={12} strokeWidth={active ? 2.5 : 1.5} />
          </div>
        </button>

        {/* Labels at Bottom */}
        <div className="flex flex-col items-center leading-tight">
          <span className={`text-[7px] uppercase tracking-[0.15em] font-black transition-colors duration-500 ${active ? 'text-white' : 'text-white/30'}`}>
            Apparel
          </span>
          <span className={`text-[7px] uppercase tracking-[0.15em] font-black transition-colors duration-500 ${active ? 'text-white' : 'text-white/30'}`}>
            Change
          </span>
        </div>
      </div>
    </div>
  );
}