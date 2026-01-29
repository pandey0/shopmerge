import * as THREE from "three";

export type Apparel = "tee" | "hoodie";

export const APPAREL_CONFIG: Record<
  Apparel,
  {
    modelPath: string;
    basePosition: THREE.Vector3;
    baseRotation: THREE.Euler;
    scale: number;
  }
> = {
  tee: {
    modelPath: "/models/t_shirt.glb",
    basePosition: new THREE.Vector3(0.098, -1.8, 0.1),
    baseRotation: new THREE.Euler(-0.1, 0.4, 0),
    scale: 1.6,
  },

  hoodie: {
    modelPath: "/models/hoodie.glb",
    basePosition: new THREE.Vector3(0, -2.0, -0.5),
    baseRotation: new THREE.Euler(0, -1.5, 0), // ✅ FIX ORIENTATION
    scale: 1.65,
  },
};
