import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Box, Billboard, Plane } from '@react-three/drei'
import { Color, Vector3 } from 'three'

export default function Home3D() {



  return (
    <div id="canvas-container">
      <Canvas camera={{ position: new Vector3(0, 0, 5) }}>
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[2, -2, 5]} intensity={1} />
        {/* <mesh> */}
        {/* <OrbitControls enableZoom={false} enablePan={true} /> */}

        {/* <Billboard position={[0, 0, 0]}> */}
          <Sphere args={[1, 32, 32]} scale={1.5} position={[0, 0, 0]}>
            <MeshDistortMaterial
              transparent
              color={new Color("#ffffff")}
              speed={1.8}
              distort={0.5}
              opacity={0.35}
            />
          </Sphere>
        {/* </Billboard> */}

        {/* <Billboard position={[0, 0, 2]}> */}
          <Box args={[2, 0.5, .3]} position={[0, 0, 2.5]}>
            <meshBasicMaterial
              transparent
              attach="material"
              color={new Color("#ffffff")}
              opacity={0.35}
            />
          </Box>
        {/* </Billboard> */}
        <OrbitControls enableZoom={false} enablePan={true} />

        {/* </mesh> */}
      </Canvas>
    </div>
  );
}
