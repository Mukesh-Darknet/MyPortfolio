import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Globe = ({ position = [0, 0, 0], scale = 2, color = "#F97316", emissive = "#EA580C" }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.1;
        meshRef.current.rotation.y += delta * 0.15;
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
                color={color}
                wireframe={true}
                emissive={emissive}
                emissiveIntensity={0.5}
                transparent={true}
                opacity={0.8}
            />
        </mesh>
    );
};

export default Globe;
