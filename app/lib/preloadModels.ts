import { useGLTF } from "@react-three/drei";

/**
 * Preload all apparel GLB models
 * Runs once per session
 */
export function preloadApparelModels() {
  useGLTF.preload("/models/t_shirt.glb");
  useGLTF.preload("/models/hoodie.glb");
}
