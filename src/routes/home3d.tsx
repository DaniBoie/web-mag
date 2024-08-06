import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Color } from 'three'

export default function Home3D() {



  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[2, -2, 5]} intensity={1}/>
        <OrbitControls  />
          <mesh>
            <Sphere args={[1, 32, 32]} position={[0, 0, 0]} scale={1.5} >
              <MeshDistortMaterial transparent color={new Color("#ffffff")} speed={1.8} distort={0.5} opacity={0.35}/>
            </Sphere>
          </mesh>
      </Canvas>
    </div>
  )
}
