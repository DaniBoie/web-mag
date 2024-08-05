import { Canvas, useThree } from '@react-three/fiber'
import { MarchingCube, MarchingCubes, MarchingPlane, PresentationControls, Sphere, Text3D, Box, MeshDistortMaterial, MeshRefractionMaterial, AccumulativeShadows, RandomizedLight, MeshTransmissionMaterial } from '@react-three/drei'
import { Color, CubeTexture } from 'three'
import { useEffect, useState } from 'react';

export default function Home3D() {

  // Create a simple cube texture with a solid color
  const color = new Color(0xffffff); // white color
  const size = 1; // size of the texture
  const data = new Uint8Array([255, 255, 255, 255]); // RGBA values for white color

  const texture = new CubeTexture();
  texture.images = [data, data, data, data, data, data];
  texture.needsUpdate = true;

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[2, -2, 5]} intensity={1}/>
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
            <Sphere args={[1, 32, 32]} position={[0, 0, 0]} scale={1.5} >
              <MeshDistortMaterial transparent color={new Color("#ffffff")} speed={1.8} distort={0.5} opacity={0.35}/>
            </Sphere>
          </mesh>
        </PresentationControls>
      </Canvas>
    </div>
  )
}
