
// "use client";

// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { COLORS } from "@/app/lib/colors";
// import { APPAREL_CONFIG, Apparel } from "@/app/lib/apparelconfig";

// type Props = {
//   apparel: Apparel;
//   setApparel: (a: Apparel) => void;
//   apparelSelectMode: boolean;
//   colorIndex: number;
//   setColorIndex: (fn: any) => void;
//   colorMode: boolean;
// };

// export default function Tshirt({
//   apparel,
//   setApparel,
//   apparelSelectMode,
//   colorIndex,
//   setColorIndex,
//   colorMode,
// }: Props) {
//   const config = APPAREL_CONFIG[apparel];
//   const { scene } = useGLTF(config.modelPath);

//   const groupRef = useRef<THREE.Group>(null);
//   const frameRef = useRef<THREE.Mesh>(null);

//   const start = useRef<{ x: number; y: number } | null>(null);
//   const lastInteraction = useRef(Date.now());
//   const frameRotationTarget = useRef(0);

//   const floatAmp = 0.035;
//   const floatSpeed = 0.9;

//   const targetColor = new THREE.Color(COLORS[colorIndex].value);

//   /* ---------------- APPLY BASE TRANSFORMS ---------------- */
//   useEffect(() => {
//     if (!groupRef.current) return;

//     groupRef.current.position.copy(config.basePosition);
//     groupRef.current.rotation.copy(config.baseRotation);
//     groupRef.current.scale.setScalar(config.scale);
//   }, [apparel, config]);

//   /* ---------------- FRAME LOOP ---------------- */
//   useFrame(({ clock }) => {
//     // 🎨 color
//     scene.traverse((obj: any) => {
//       if (obj.isMesh && obj.material?.color) {
//         obj.material.color.lerp(targetColor, 0.15);
//       }
//     });

//     if (!groupRef.current) return;

//     const idleTime = Date.now() - lastInteraction.current;

//     // 🌊 idle float
//     if (!colorMode && !apparelSelectMode && idleTime > 1200) {
//       groupRef.current.position.y =
//         config.basePosition.y +
//         Math.sin(clock.elapsedTime * floatSpeed) * floatAmp;
//     } else {
//       groupRef.current.position.y = config.basePosition.y;
//     }

//     // 🎠 frame animation
//     if (frameRef.current) {
//       frameRef.current.rotation.y = THREE.MathUtils.lerp(
//         frameRef.current.rotation.y,
//         frameRotationTarget.current,
//         0.18
//       );
//     }
//   });

//   /* ---------------- INTERACTION ---------------- */
//   const onPointerDown = (e: any) => {
//     start.current = { x: e.clientX, y: e.clientY };
//     lastInteraction.current = Date.now();
//   };

//   const onPointerUp = (e: any) => {
//     if (!start.current) return;

//     const dx = e.clientX - start.current.x;
//     const dy = e.clientY - start.current.y;

//     // 🎨 color change
//     if (colorMode && Math.abs(dy) > 40) {
//       setColorIndex((p: number) =>
//         dy < 0
//           ? Math.min(p + 1, COLORS.length - 1)
//           : Math.max(p - 1, 0)
//       );
//     }

//     // 👕 apparel change
//     if (apparelSelectMode && Math.abs(dx) > 40) {
//       frameRotationTarget.current +=
//         dx > 0 ? -Math.PI / 2 : Math.PI / 2;

//       setTimeout(() => {
//         setApparel(dx > 0 ? "hoodie" : "tee");
//       }, 120);
//     }

//     start.current = null;
//   };

//   return (
//     <group
//       ref={groupRef}
//       onPointerDown={onPointerDown}
//       onPointerUp={onPointerUp}
//     >
//       <primitive object={scene} />

//       {apparelSelectMode && (
//         <mesh ref={frameRef}>
//           <boxGeometry args={[1.5, 2.1, 0.9]} />
//           <meshBasicMaterial
//             wireframe
//             transparent
//             opacity={0.25}
//             color="white"
//           />
//         </mesh>
//       )}
//     </group>
//   );
// }




// "use client";

// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// import { COLORS } from "@/app/lib/colors";
// import { APPAREL_CONFIG, Apparel } from "@/app/lib/apparelconfig";

// type Props = {
//   apparel: Apparel;
//   colorIndex: number;
//   setColorIndex: (fn: any) => void;
//   colorMode: boolean;
//   apparelMode: boolean;
//   onApparelChange: (a: any) => void;
// };


// const ORDER: Apparel[] = ["tee", "hoodie"];

// export default function Tshirt({
//   apparel,
//   onApparelChange,
//   colorIndex,
//   setColorIndex,
//   colorMode,
//   apparelMode,
// }: Props) {
//   const config = APPAREL_CONFIG[apparel];
//   const { scene } = useGLTF(config.modelPath);

//   const group = useRef<THREE.Group>(null);
//   const start = useRef<{ x: number; y: number } | null>(null);
//   const last = useRef(Date.now());

//   const targetColor = new THREE.Color(COLORS[colorIndex].value);

//   useEffect(() => {
//     if (!group.current) return;
//     group.current.position.copy(config.basePosition);
//     group.current.rotation.copy(config.baseRotation);
//     group.current.scale.setScalar(config.scale);
//   }, [apparel, config]);

//   useFrame(({ clock }) => {
//     scene.traverse((o: any) => {
//       if (o.isMesh && o.material?.color) {
//         o.material.color.lerp(targetColor, 0.15);
//       }
//     });

//     if (!group.current) return;

//     const idle = Date.now() - last.current;

//     if (!colorMode && !apparelMode && idle > 1200) {
//       group.current.position.y =
//         config.basePosition.y +
//         Math.sin(clock.elapsedTime * 0.9) * 0.035;
//     } else {
//       group.current.position.y = config.basePosition.y;
//     }
//   });

//   const onDown = (e: any) => {
//     start.current = { x: e.clientX, y: e.clientY };
//     last.current = Date.now();
//   };

//   const onUp = (e: any) => {
//     if (!start.current) return;

//     const dx = e.clientX - start.current.x;
//     const dy = e.clientY - start.current.y;

//     // 🎨 COLOR MODE ONLY
//     if (colorMode && Math.abs(dy) > 40 && Math.abs(dy) > Math.abs(dx)) {
//       setColorIndex((p: number) =>
//         dy < 0 ? Math.min(p + 1, COLORS.length - 1) : Math.max(p - 1, 0)
//       );
//       start.current = null;
//       return;
//     }

//     // 👕 APPAREL MODE ONLY (STRICT)
//     if (
//       apparelMode &&
//       !colorMode &&
//       Math.abs(dx) > 50 &&
//       Math.abs(dx) > Math.abs(dy)
//     ) {
//       const dir = dx > 0 ? -1 : 1;
//       const i = ORDER.indexOf(apparel);
//       onApparelChange(
//         ORDER[(i + dir + ORDER.length) % ORDER.length]
//       );
//     }

//     start.current = null;
//   };

//   return (
//     <group
//       ref={group}
//       onPointerDown={onDown}
//       onPointerUp={onUp}
//     >
//       <primitive object={scene} />
//     </group>
//   );
// }



"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { COLORS } from "@/app/lib/colors";
import { APPAREL_CONFIG, Apparel } from "@/app/lib/apparelconfig";

type Props = {
  apparel: Apparel;
  onApparelChange: (a: Apparel) => void;

  colorIndex: number;
  setColorIndex: (fn: any) => void;

  colorMode: boolean;
  apparelMode: boolean;
};

const ORDER: Apparel[] = ["tee", "hoodie"];

export default function Tshirt({
  apparel,
  onApparelChange,
  colorIndex,
  setColorIndex,
  colorMode,
  apparelMode,
}: Props) {
  const config = APPAREL_CONFIG[apparel];
  const { scene } = useGLTF(config.modelPath);

  const groupRef = useRef<THREE.Group>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const lastInteraction = useRef(Date.now());

  /* ---- TRANSITION STATE ---- */
  const opacityRef = useRef(1);
  const opacityTarget = useRef(1);

  const spinRef = useRef(0);
  const spinTarget = useRef(0);

  const transitioning = useRef(false);

  const targetColor = new THREE.Color(COLORS[colorIndex].value);

  /* ---- BASE TRANSFORM ---- */
  useEffect(() => {
    if (!groupRef.current) return;

    groupRef.current.position.copy(config.basePosition);
    groupRef.current.rotation.copy(config.baseRotation);
    groupRef.current.scale.setScalar(config.scale);
  }, [apparel, config]);

  /* ---- FRAME LOOP ---- */
  useFrame(({ clock }) => {
    // 🎨 color + opacity
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        if (obj.material.color) {
          obj.material.color.lerp(targetColor, 0.15);
        }
        obj.material.transparent = true;
        obj.material.opacity = opacityRef.current;
      }
    });

    if (!groupRef.current) return;

    // 🌊 idle float (disabled during modes / transition)
    const idleTime = Date.now() - lastInteraction.current;
    if (
      !colorMode &&
      !apparelMode &&
      !transitioning.current &&
      idleTime > 1200
    ) {
      groupRef.current.position.y =
        config.basePosition.y +
        Math.sin(clock.elapsedTime * 0.9) * 0.035;
    } else {
      groupRef.current.position.y = config.basePosition.y;
    }

    // 🌀 spin + fade interpolation
    spinRef.current = THREE.MathUtils.lerp(
      spinRef.current,
      spinTarget.current,
      0.18
    );

    opacityRef.current = THREE.MathUtils.lerp(
      opacityRef.current,
      opacityTarget.current,
      0.15
    );

    groupRef.current.rotation.y =
      config.baseRotation.y + spinRef.current;
  });

  /* ---- INPUT ---- */
  const onPointerDown = (e: any) => {
    startRef.current = { x: e.clientX, y: e.clientY };
    lastInteraction.current = Date.now();
  };

  const onPointerUp = (e: any) => {
    if (!startRef.current || transitioning.current) return;

    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;

    /* 🎨 COLOR MODE (UP / DOWN ONLY) */
    if (
      colorMode &&
      Math.abs(dy) > Math.abs(dx) &&
      Math.abs(dy) > 40
    ) {
      setColorIndex((p: number) =>
        dy < 0
          ? Math.min(p + 1, COLORS.length - 1)
          : Math.max(p - 1, 0)
      );
      startRef.current = null;
      return;
    }

    /* 👕 APPAREL MODE (LEFT / RIGHT ONLY) */
    if (
      apparelMode &&
      !colorMode &&
      Math.abs(dx) > Math.abs(dy) &&
      Math.abs(dx) > 50
    ) {
      const dir = dx > 0 ? -1 : 1;
      const currentIndex = ORDER.indexOf(apparel);
      const next =
        ORDER[(currentIndex + dir + ORDER.length) % ORDER.length];

      transitioning.current = true;

      // animate OUT
      opacityTarget.current = 0;
      spinTarget.current += dir * Math.PI * 0.6;

      setTimeout(() => {
        // switch apparel (parent state)
        onApparelChange(next);

        // reset for IN animation
        spinRef.current = -dir * Math.PI * 0.6;
        spinTarget.current = 0;
        opacityRef.current = 0;
        opacityTarget.current = 1;

        setTimeout(() => {
          transitioning.current = false;
        }, 250);
      }, 220);
    }

    startRef.current = null;
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <primitive object={scene} />
    </group>
  );
}
