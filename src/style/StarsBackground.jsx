import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";


const StarBackground = (props) => {
    const ref = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(1200 * 3), { radius: 1 })
    );

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#999999"
                    size={0.0012}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="hidden md:block w-full h-full fixed inset-0 z-1 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.25]}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
