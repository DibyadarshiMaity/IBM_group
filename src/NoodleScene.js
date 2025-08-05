import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function NoodleModel({ scrollY }) {
  const ref = useRef();
  useFrame(() => {
    const rotationAngle = (scrollY.current / window.innerHeight) * Math.PI * 2;
    if (ref.current) {
      ref.current.rotation.y = rotationAngle;
      ref.current.scale.setScalar(1 + scrollY.current / 2000);
    }
  });

  const gltf = useGLTF("/models/stylized_ramen_bowl.glb");

  return <primitive ref={ref} object={gltf.scene} />;
}

export default function NoodleScene() {
  const scrollY = useRef(0);

  const handleScroll = () => {
    scrollY.current = window.scrollY;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 1.5, 4] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} />
        <NoodleModel scrollY={scrollY} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
