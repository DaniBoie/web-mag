import { Canvas, useThree } from '@react-three/fiber'
import { MarchingCube, MarchingCubes, MarchingPlane, PresentationControls, Sphere, Text3D, Box } from '@react-three/drei'
import { Color } from 'three'
import { useEffect, useState } from 'react';

export default function Home3D() {

  const [size, setSize] = useState({size: 1, type: 'grow'})

  // Create a function that fires every 2 seconds to set the size of the sphere to a random value
  useEffect(() => {
    const interval = setInterval(() => {
      // Slowly increase the size of the sphere until it reaches 2 then slowly decrease it back to 1
      setSize((prev) => {
        switch (prev.type) {
          case "grow":
            if (prev.size < 2) {
              return {size: prev.size + 0.01, type: 'grow'}
            } else {
              return {size: prev.size, type: 'shrink'}
            }
            break;

          case "shrink":
            if (prev.size > 1) {
              return {size: prev.size - 0.01, type: 'shrink'}
            } else {
              return {size: prev.size, type: 'grow'}
            }
            break;
        
          default:
            return {size: prev.size, type: prev.type}
            break;
        }
      })
    }, 25)
    // Clear the interval when the component is removed
    return () => clearInterval(interval)
  }, [])

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
          // domElement={events.connected} // The DOM element events for this controller will attach to
        >
          <mesh>
                <Sphere args={[1, 32, 32]} position={[0, 0, 0]} scale={size.size} >
                  <meshStandardMaterial wireframe color={new Color("#23a6d5")} />
                </Sphere>
            {/* <Text3D>hello</Text3D> */}
          </mesh>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
