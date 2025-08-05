import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useRef,useEffect } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';

function BowlModel({ scrollYProgress }) {
  const ref = useRef();
  const { scene } = useGLTF('/assets/stylized_ramen_bowl.glb');
  
  useEffect(() => {
  if (!ref.current) return;

  ref.current.position.set(0,30,0);
  ref.current.scale.setScalar(0);     
}, []);


  useFrame(() => {
    ref.current.rotation.y += 0.01; 
    const scroll = scrollYProgress.get();
    const zoomScale = 10 + scroll *1.5;
    ref.current.scale.setScalar(zoomScale); 
    ref.current.position.z = scroll * 3.5; 
    ref.current.position.y = -scroll * 2.5;   
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      position={[0, -1.5, 0]}
    />
  );
}

function BowlScene({ scrollYProgress }) {
  return (
    <Canvas style={{ height: '200vh',width:'100%' }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 3, 5]} />
      <BowlModel scrollYProgress={scrollYProgress} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative h-[200vh] bg-gradient-to-b from-yellow-100 to-red-200">
      <div className="sticky top-0 h-screen z-10">
        <BowlScene scrollYProgress={smoothScroll} />
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center p-12 z-0">
        <motion.div
          className="text-4xl font-bold text-white"
          style={{
            opacity: useTransform(smoothScroll, [0.5, 1], [0, 1]),
            y: useTransform(smoothScroll, [0.5, 1], [100, 0]),
          }}
        >
        </motion.div>
      </div>
    </div>
  );
}
