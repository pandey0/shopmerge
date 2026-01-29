// import Scene from "@/app/components/Scene";
// import UI from "@/app/components/UI";

// export default function Home() {
//   return (
//     <main className="w-screen h-screen bg-black overflow-hidden flex flex-col">
      
//       {/* 3D AREA */}
//       <div
//         className="
//           w-full
//           flex-1
//           md:h-[75vh]
//           h-[60vh]
//           relative
//         "
//       >
//         <Scene />
//       </div>

//       {/* UI AREA */}
//       <div className="w-full">
//         <UI />
//       </div>

//     </main>
//   );
// }


"use client";

import { useState } from "react";
import Scene from "@/app/components/Scene";
import UI from "@/app/components/UI";

export default function Home() {
  const [apparel, setApparel] = useState<"tee" | "hoodie">("tee");

  return (
    <main className="w-screen h-screen bg-black overflow-hidden flex flex-col">
      <div className="w-full flex-1 md:h-[75vh] h-[60vh] relative">
        <Scene
          apparel={apparel}
          onApparelChange={setApparel}
        />
      </div>

      <UI apparel={apparel} />
    </main>
  );
}
