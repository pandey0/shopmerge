// "use client";

// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { useRef, useState } from "react";
// import * as THREE from "three";
// import Tshirt from "./Tshirt";
// import ColorModeButton from "./ColorModeButton";
// import ColorModeHint from "./ColorModeHint";

// export default function Scene() {
//   const controlsRef = useRef<any>(null);

//   const [colorIndex, setColorIndex] = useState(1); // default Black
//   const [colorMode, setColorMode] = useState(false);

//   return (
//     <>
//       <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[2, 4, 3]} intensity={1} />

//         <Tshirt
//           colorIndex={colorIndex}
//           setColorIndex={setColorIndex}
//           colorMode={colorMode}
//           controlsRef={controlsRef}
//         />

//         <Environment preset="city" />

//         <OrbitControls
//           ref={controlsRef}
//           enableRotate={!colorMode}
//           enablePan={!colorMode}
//           enableZoom={!colorMode}
//           minPolarAngle={Math.PI / 3}
//           maxPolarAngle={Math.PI / 1.5}
//         />
//       </Canvas>

//       {/* UI OVERLAYS */}
//       <ColorModeButton
//         active={colorMode}
//         onToggle={() => setColorMode((v) => !v)}
//       />

//       {colorMode && <ColorModeHint />}
//     </>
//   );
// }


// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { useRef, useState } from "react";
// import * as THREE from "three";
// import Tshirt from "./Tshirt";
// import ColorModeButton from "./ColorModeButton";
// import ColorModeHint from "./ColorModeHint";

// /* ---------------- AUTO RESET AFTER IDLE ---------------- */

// function AutoReset({
//   controlsRef,
//   enabled,
// }: {
//   controlsRef: React.RefObject<any>;
//   enabled: boolean;
// }) {
//   const lastInteraction = useRef(Date.now());
  


//   useFrame(() => {
//     if (!enabled || !controlsRef.current) return;

//     const controls = controlsRef.current;

//     // ✅ pick up interaction timestamps from OrbitControls
//     if (controls._lastInteraction) {
//       lastInteraction.current = controls._lastInteraction;
//       controls._lastInteraction = null;
//     }

//     const idleTime = Date.now() - lastInteraction.current;

//     // wait before doing anything
//     if (idleTime < 3000) return;

//     /* --------- GENTLE RESET --------- */

//     // rotation
//     controls.setAzimuthalAngle(
//       THREE.MathUtils.lerp(controls.getAzimuthalAngle(), 0, 0.03)
//     );

//     controls.setPolarAngle(
//       THREE.MathUtils.lerp(
//         controls.getPolarAngle(),
//         Math.PI / 2,
//         0.03
//       )
//     );

//     // zoom
//     const camera = controls.object;
//     const target = controls.target;
//     const desiredDistance = 3;

//     const dir = new THREE.Vector3()
//       .subVectors(camera.position, target)
//       .normalize();

//     const desiredPos = target
//       .clone()
//       .add(dir.multiplyScalar(desiredDistance));

//     camera.position.lerp(desiredPos, 0.03);

//     // pan
//     controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.03);

//     controls.update();
//   });

//   return null;
// }
// function EnterColorModeReset({
//   controlsRef,
//   active,
//   onDone,
// }: {
//   controlsRef: React.RefObject<any>;
//   active: boolean;
//   onDone: () => void;
// }) {
//   const stableFrames = useRef(0);

//   useFrame(() => {
//     if (!active || !controlsRef.current) return;

//     const controls = controlsRef.current;

//     const targetAzimuth = 0;
//     const targetPolar = Math.PI / 2;
//     const desiredDistance = 3;
//     const targetCenter = new THREE.Vector3(0, 0, 0);

//     // --- ROTATION ---
//     controls.setAzimuthalAngle(
//       THREE.MathUtils.lerp(
//         controls.getAzimuthalAngle(),
//         targetAzimuth,
//         0.16
//       )
//     );

//     controls.setPolarAngle(
//       THREE.MathUtils.lerp(
//         controls.getPolarAngle(),
//         targetPolar,
//         0.16
//       )
//     );

//     // --- ZOOM ---
//     const camera = controls.object;
//     const dir = new THREE.Vector3()
//       .subVectors(camera.position, controls.target)
//       .normalize();

//     const desiredPos = targetCenter
//       .clone()
//       .add(dir.multiplyScalar(desiredDistance));

//     camera.position.lerp(desiredPos, 0.16);

//     // --- PAN ---
//     controls.target.lerp(targetCenter, 0.16);
//     controls.update();

//     // --- COMPLETION CHECK ---
//     const rotationDone =
//       Math.abs(controls.getAzimuthalAngle()) < 0.015 &&
//       Math.abs(controls.getPolarAngle() - targetPolar) < 0.015;

//     const zoomDone =
//       camera.position.distanceTo(desiredPos) < 0.04;

//     if (rotationDone && zoomDone) {
//       stableFrames.current += 1;
//     } else {
//       stableFrames.current = 0;
//     }

//     // require stability for a few frames (prevents flicker)
//     if (stableFrames.current > 5) {
//       stableFrames.current = 0;
//       onDone();
//     }
//   });

//   return null;
// }


// /* ---------------- SCENE ---------------- */

// export default function Scene() {
//   const controlsRef = useRef<any>(null);
//   const [enteringColorMode, setEnteringColorMode] = useState(false);
//   const [colorIndex, setColorIndex] = useState(1); // default Black
//   const [colorMode, setColorMode] = useState(false);

//   return (
//     <>
//       <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[2, 4, 3]} intensity={1} />

//         <Tshirt
//           colorIndex={colorIndex}
//           setColorIndex={setColorIndex}
//           colorMode={colorMode}
//         />

//         <Environment preset="city" />

//         <OrbitControls
//   ref={controlsRef}
//   enableRotate={!colorMode && !enteringColorMode}
//   enablePan={!colorMode && !enteringColorMode}
//   enableZoom={!colorMode && !enteringColorMode}
//   minPolarAngle={Math.PI / 3}
//   maxPolarAngle={Math.PI / 1.5}
//   onStart={() => {
//     if (controlsRef.current) {
//       controlsRef.current._lastInteraction = Date.now();
//     }
//   }}
// />


//         {/* ✅ AUTO RESET (NORMAL MODE ONLY) */}
// <AutoReset
//   controlsRef={controlsRef}
//   enabled={!colorMode && !enteringColorMode}
// />
//         <EnterColorModeReset
//   controlsRef={controlsRef}
//   active={enteringColorMode}
//   onDone={() => {
//     setEnteringColorMode(false);
//     setColorMode(true);
//   }}
// />
//       </Canvas>

//       {/* UI OVERLAYS */}
//      <ColorModeButton
//   active={colorMode || enteringColorMode}
//   onToggle={() => {
//     if (colorMode || enteringColorMode) {
//       // exit color mode
//       setColorMode(false);
//       setEnteringColorMode(false);
//     } else {
//       // start controlled reset first
//       setEnteringColorMode(true);
//     }
//   }}
// />


//       {colorMode && <ColorModeHint />}
//     </>
//   );
// }





// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { useRef, useState } from "react";
// import * as THREE from "three";
// import Tshirt from "./Tshirt";
// import ColorModeButton from "./ColorModeButton";
// import ColorModeHint from "./ColorModeHint";

// /* ---------------- AUTO RESET AFTER IDLE ---------------- */

// function AutoReset({
//   controlsRef,
//   enabled,
// }: {
//   controlsRef: React.RefObject<any>;
//   enabled: boolean;
// }) {
//   const lastInteraction = useRef(Date.now());
  


//   useFrame(() => {
//     if (!enabled || !controlsRef.current) return;

//     const controls = controlsRef.current;

//     // ✅ pick up interaction timestamps from OrbitControls
//     if (controls._lastInteraction) {
//       lastInteraction.current = controls._lastInteraction;
//       controls._lastInteraction = null;
//     }

//     const idleTime = Date.now() - lastInteraction.current;

//     // wait before doing anything
//     if (idleTime < 3000) return;

//     /* --------- GENTLE RESET --------- */

//     // rotation
//     controls.setAzimuthalAngle(
//       THREE.MathUtils.lerp(controls.getAzimuthalAngle(), 0, 0.03)
//     );

//     controls.setPolarAngle(
//       THREE.MathUtils.lerp(
//         controls.getPolarAngle(),
//         Math.PI / 2,
//         0.03
//       )
//     );

//     // zoom
//     const camera = controls.object;
//     const target = controls.target;
//     const desiredDistance = 3;

//     const dir = new THREE.Vector3()
//       .subVectors(camera.position, target)
//       .normalize();

//     const desiredPos = target
//       .clone()
//       .add(dir.multiplyScalar(desiredDistance));

//     camera.position.lerp(desiredPos, 0.03);

//     // pan
//     controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.03);

//     controls.update();
//   });

//   return null;
// }
// function EnterColorModeReset({
//   controlsRef,
//   active,
//   onDone,
// }: {
//   controlsRef: React.RefObject<any>;
//   active: boolean;
//   onDone: () => void;
// }) {
//   const stableFrames = useRef(0);

//   useFrame(() => {
//     if (!active || !controlsRef.current) return;

//     const controls = controlsRef.current;

//     const targetAzimuth = 0;
//     const targetPolar = Math.PI / 2;
//     const desiredDistance = 3;
//     const targetCenter = new THREE.Vector3(0, 0, 0);

//     // --- ROTATION ---
//     controls.setAzimuthalAngle(
//       THREE.MathUtils.lerp(
//         controls.getAzimuthalAngle(),
//         targetAzimuth,
//         0.16
//       )
//     );

//     controls.setPolarAngle(
//       THREE.MathUtils.lerp(
//         controls.getPolarAngle(),
//         targetPolar,
//         0.16
//       )
//     );

//     // --- ZOOM ---
//     const camera = controls.object;
//     const dir = new THREE.Vector3()
//       .subVectors(camera.position, controls.target)
//       .normalize();

//     const desiredPos = targetCenter
//       .clone()
//       .add(dir.multiplyScalar(desiredDistance));

//     camera.position.lerp(desiredPos, 0.16);

//     // --- PAN ---
//     controls.target.lerp(targetCenter, 0.16);
//     controls.update();

//     // --- COMPLETION CHECK ---
//     const rotationDone =
//       Math.abs(controls.getAzimuthalAngle()) < 0.015 &&
//       Math.abs(controls.getPolarAngle() - targetPolar) < 0.015;

//     const zoomDone =
//       camera.position.distanceTo(desiredPos) < 0.04;

//     if (rotationDone && zoomDone) {
//       stableFrames.current += 1;
//     } else {
//       stableFrames.current = 0;
//     }

//     // require stability for a few frames (prevents flicker)
//     if (stableFrames.current > 5) {
//       stableFrames.current = 0;
//       onDone();
//     }
//   });

//   return null;
// }


// /* ---------------- SCENE ---------------- */

// export default function Scene() {
//   const controlsRef = useRef<any>(null);
//   const [enteringColorMode, setEnteringColorMode] = useState(false);
//   const [colorIndex, setColorIndex] = useState(1); // default Black
//   const [colorMode, setColorMode] = useState(false);

//   return (
//     <>
//       <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
//         <ambientLight intensity={0.6} />
//         <directionalLight position={[2, 4, 3]} intensity={1} />

//         <Tshirt
//           colorIndex={colorIndex}
//           setColorIndex={setColorIndex}
//           colorMode={colorMode}
//         />

//         <Environment preset="city" />

//         <OrbitControls
//   ref={controlsRef}
//   enableRotate={!colorMode && !enteringColorMode}
//   enablePan={!colorMode && !enteringColorMode}
//   enableZoom={!colorMode && !enteringColorMode}
//   minPolarAngle={Math.PI / 3}
//   maxPolarAngle={Math.PI / 1.5}
//   onStart={() => {
//     if (controlsRef.current) {
//       controlsRef.current._lastInteraction = Date.now();
//     }
//   }}
// />


//         {/* ✅ AUTO RESET (NORMAL MODE ONLY) */}
// <AutoReset
//   controlsRef={controlsRef}
//   enabled={!colorMode && !enteringColorMode}
// />
//         <EnterColorModeReset
//   controlsRef={controlsRef}
//   active={enteringColorMode}
//   onDone={() => {
//     setEnteringColorMode(false);
//     setColorMode(true);
//   }}
// />
//       </Canvas>

//       {/* UI OVERLAYS */}
//      <ColorModeButton
//   active={colorMode || enteringColorMode}
//   onToggle={() => {
//     if (colorMode || enteringColorMode) {
//       // exit color mode
//       setColorMode(false);
//       setEnteringColorMode(false);
//     } else {
//       // start controlled reset first
//       setEnteringColorMode(true);
//     }
//   }}
// />


//       {colorMode && <ColorModeHint />}
//     </>
//   );
// }


"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

import Tshirt from "./Tshirt";
import UI from "./UI";
import ColorModeButton from "./ColorModeButton";
import ApparelModeButton from "./ApparelModeButton";
import ColorModeHint from "./ColorModeHint";
import { Apparel } from "@/app/lib/apparelconfig";
import { preloadApparelModels } from "@/app/lib/preloadModels";

/* ---------- AUTO RESET AFTER IDLE ---------- */
function AutoReset({ controlsRef, enabled }: any) {
  const last = useRef(Date.now());

  useFrame(() => {
    if (!enabled || !controlsRef.current) return;
    const c = controlsRef.current;

    if (c._lastInteraction) {
      last.current = c._lastInteraction;
      c._lastInteraction = null;
    }

    if (Date.now() - last.current < 3000) return;

    c.setAzimuthalAngle(
      THREE.MathUtils.lerp(c.getAzimuthalAngle(), 0, 0.03)
    );
    c.setPolarAngle(
      THREE.MathUtils.lerp(c.getPolarAngle(), Math.PI / 2, 0.03)
    );

    const cam = c.object;
    const dir = cam.position.clone().normalize();
    cam.position.lerp(dir.multiplyScalar(3), 0.03);
    c.target.lerp(new THREE.Vector3(), 0.03);
    c.update();
  });

  return null;
}

/* ---------- RESET ON ENTER MODE ---------- */
function EnterModeReset({ controlsRef, active, onDone }: any) {
  const stable = useRef(0);

  useFrame(() => {
    if (!active || !controlsRef.current) return;
    const c = controlsRef.current;

    c.setAzimuthalAngle(
      THREE.MathUtils.lerp(c.getAzimuthalAngle(), 0, 0.16)
    );
    c.setPolarAngle(
      THREE.MathUtils.lerp(c.getPolarAngle(), Math.PI / 2, 0.16)
    );

    const cam = c.object;
    cam.position.lerp(new THREE.Vector3(0, 0, 3), 0.16);
    c.target.lerp(new THREE.Vector3(), 0.16);
    c.update();

    if (
      Math.abs(c.getAzimuthalAngle()) < 0.02 &&
      Math.abs(c.getPolarAngle() - Math.PI / 2) < 0.02
    )
      stable.current++;
    else stable.current = 0;

    if (stable.current > 5) {
      stable.current = 0;
      onDone();
    }
  });

  return null;
}

/* ---------- SCENE ---------- */
type Props = {
  apparel: Apparel;
  onApparelChange: (a: Apparel) => void;
};

export default function Scene({ apparel, onApparelChange }: Props) {
    preloadApparelModels();
  const controlsRef = useRef<any>(null);

  const [colorIndex, setColorIndex] = useState(1);
  const [colorMode, setColorMode] = useState(false);
  const [apparelMode, setApparelMode] = useState(false);
  const [entering, setEntering] =
    useState<null | "color" | "apparel">(null);

  return (
    <>
    <div className="w-full h-full pt-14 relative">


      <Canvas
        camera={{ position: [0, 0, 3], fov: 40 }}
        className="pointer-events-none"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 4, 3]} intensity={1} />

        <Tshirt
          apparel={apparel}
          onApparelChange={onApparelChange}
          colorIndex={colorIndex}
          setColorIndex={setColorIndex}
          colorMode={colorMode}
          apparelMode={apparelMode}
        />

        <Environment preset="city" />

        <OrbitControls
          ref={controlsRef}
          enableRotate={!colorMode && !apparelMode && !entering}
          enablePan={!colorMode && !apparelMode && !entering}
          enableZoom={!colorMode && !apparelMode && !entering}
          onStart={() =>
            (controlsRef.current._lastInteraction = Date.now())
          }
        />

        <AutoReset
          controlsRef={controlsRef}
          enabled={!colorMode && !apparelMode && !entering}
        />

        <EnterModeReset
          controlsRef={controlsRef}
          active={entering !== null}
          onDone={() => {
            if (entering === "color") setColorMode(true);
            if (entering === "apparel") setApparelMode(true);
            setEntering(null);
          }}
        />
      </Canvas>

      <ColorModeButton
        active={colorMode || entering === "color"}
        onToggle={() => {
          setApparelMode(false);
          colorMode ? setColorMode(false) : setEntering("color");
        }}
      />

      <ApparelModeButton
        active={apparelMode || entering === "apparel"}
        onToggle={() => {
          setColorMode(false);
          apparelMode ? setApparelMode(false) : setEntering("apparel");
        }}
      />

      {colorMode && <ColorModeHint text="Swipe ↑ ↓ to change color" />}
      {apparelMode && (
        <ColorModeHint text="Swipe ← → to change apparel" />
      )}
      </div>
    </>
  );
}
