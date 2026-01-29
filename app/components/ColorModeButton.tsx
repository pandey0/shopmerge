// "use client";

// type Props = {
//   active: boolean;
//   onToggle: () => void;
// };

// export default function ColorModeButton({ active, onToggle }: Props) {
//   return (
//     <button
//       onClick={onToggle}
//       className={`
//         fixed right-4 bottom-28 z-20
//         w-12 h-12 rounded-full
//         bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500
//         shadow-lg
//         transition
//         ${active ? "scale-110 ring-2 ring-white" : "opacity-80"}
//       `}
//       aria-label="Change color"
//     />
//   );
// }
// "use client";

// export default function ColorModeButton({ active, onToggle }: any) {
//   return (
//     <div className="fixed right-4 bottom-28 z-30">
//       <button
//         onClick={onToggle}
//         className={`
//           relative flex items-center gap-3 px-4 h-12 rounded-full
//           backdrop-blur-lg transition-all duration-300 active:scale-95
//           border
//           ${active 
//             ? "bg-white border-white shadow-[0_8px_20px_rgba(255,255,255,0.15)]" 
//             : "bg-black/40 border-white/20 shadow-xl"
//           }
//         `}
//       >
//         {/* Modern Color Indicator: A minimalist spectrum ring */}
//         <div className="relative w-4 h-4 rounded-full overflow-hidden flex items-center justify-center">
//           <div className="absolute inset-0 bg-gradient-to-tr from-[#ff3b3b] via-[#62efab] to-[#3b82f6] opacity-90 animate-spin-slow" />
//           {/* Inner hole to make it a ring if active, or solid if not */}
//           <div className={`z-10 w-[10px] h-[10px] rounded-full ${active ? 'bg-white' : 'bg-black'}`} />
//         </div>

//         {/* Text Label for Mobile UX */}
//         <span className={`
//           text-[9px] uppercase tracking-[0.2em] font-medium transition-colors
//           ${active ? 'text-black' : 'text-white/90'}
//         `}>
//           {active ? "Colors On" : "Color"}
//         </span>
//       </button>
//     </div>
//   );
// }

// "use client";

// export default function ColorModeButton({ active, onToggle }: any) {
//   return (
//     <div className="fixed right-6 bottom-32 z-30">
//       <button
//         onClick={onToggle}
//         aria-label="Toggle Color"
//         className={`flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-300 active:scale-90
//           ${active 
//             ? "bg-black border-white" 
//             : "bg-black/60 border-white/20"
//           }`}
//       >
//         <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-yellow-400 shadow-sm" />
//       </button>
//     </div>
//   );
// }

"use client";

export default function ColorModeButton({ active, onToggle }: any) {
  return (
    /* Adjusted to right-2 and bottom-32 */
    <div className="fixed right-2 bottom-32 z-30 pointer-events-none">
      <div className="flex flex-col items-center gap-1.5 pointer-events-auto">
        {/* Toggle Switch */}
        <button 
          onClick={onToggle}
          className={`w-9 h-16 rounded-full border flex flex-col items-center p-1 transition-all duration-500 shadow-2xl backdrop-blur-md
            ${active ? 'bg-white border-white' : 'bg-black/60 border-white/10'}`}
        >
          <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out
            ${active 
              ? 'bg-black translate-y-7 shadow-md' 
              : 'bg-white/10 translate-y-0'}`}
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-yellow-400" />
          </div>
        </button>

        {/* Labels at Bottom */}
        <div className="flex flex-col items-center leading-tight">
          <span className={`text-[7px] uppercase tracking-[0.15em] font-black transition-colors duration-500 ${active ? 'text-white' : 'text-white/30'}`}>
            Color
          </span>
          <span className={`text-[7px] uppercase tracking-[0.15em] font-black transition-colors duration-500 ${active ? 'text-white' : 'text-white/30'}`}>
            Change
          </span>
        </div>
      </div>
    </div>
  );
}