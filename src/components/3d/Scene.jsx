import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { Suspense } from 'react';
import Globe from './Globe';

const Scene = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            className="absolute inset-0"
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#F4B27A" />
                <directionalLight position={[-10, 10, -5]} intensity={2} color="#EA580C" />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Float speed={1.5} rotationIntensity={1} floatIntensity={2} position={[-6, 0, -2]}>
                    <Globe color="#F97316" emissive="#EA580C" scale={1.5} />
                </Float>
                <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[6, 0, -2]}>
                    <Globe color="#F4B27A" emissive="#F97316" scale={1.2} />
                </Float>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Suspense>
        </Canvas>
    );
};

export default Scene;
