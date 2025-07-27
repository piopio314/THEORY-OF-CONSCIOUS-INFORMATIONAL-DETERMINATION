'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Sphere, Box, Line } from '@react-three/drei'
import * as THREE from 'three'

interface TSIVisualizationProps {
  nDimensions?: number
  biologicalComplexity?: number
  consciousnessLevel?: number
}

function HolographicField({ nDimensions = 8, biologicalComplexity = 5.0 }: TSIVisualizationProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [time, setTime] = useState(0)

  useFrame((state, delta) => {
    setTime(prev => prev + delta)
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1
      meshRef.current.rotation.x += delta * 0.05
    }
  })

  // Generuj punkty holograficzne w przestrzeni n-wymiarowej
  const generateHolographicPoints = () => {
    const points = []
    const radius = 2 + biologicalComplexity * 0.5
    
    for (let i = 0; i < 100; i++) {
      const theta = (i / 100) * Math.PI * 2
      const phi = (i / 100) * Math.PI
      
      // Symulacja projekcji z przestrzeni n-wymiarowej
      const x = radius * Math.sin(phi) * Math.cos(theta + time)
      const y = radius * Math.sin(phi) * Math.sin(theta + time)
      const z = radius * Math.cos(phi) * Math.cos(time * 0.5)
      
      points.push(new THREE.Vector3(x, y, z))
    }
    
    return points
  }

  const points = generateHolographicPoints()

  return (
    <group>
      {/* Główna sfera holograficzna */}
      <Sphere ref={meshRef} args={[1, 32, 32]}>
        <meshBasicMaterial 
          color="#00ffff" 
          transparent 
          opacity={0.3}
          wireframe
        />
      </Sphere>

      {/* Linie holograficzne */}
      <Line
        points={points}
        color="#00ffff"
        lineWidth={2}
        transparent
        opacity={0.6}
      />

      {/* Bioelektryczne impulsy */}
      {points.slice(0, 10).map((point, index) => (
        <Sphere key={index} args={[0.05, 8, 8]} position={point}>
          <meshBasicMaterial 
            color="#00ff00" 
            transparent 
            opacity={0.8}
          />
        </Sphere>
      ))}

      {/* Etykieta wymiarów */}
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {nDimensions}D → 4D Projection
      </Text>

      <Text
        position={[0, -2.5, 0]}
        fontSize={0.2}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
      >
        Biological Complexity: {biologicalComplexity.toFixed(2)}
      </Text>
    </group>
  )
}

function ConsciousnessIndicator({ consciousnessLevel = 0.5 }: TSIVisualizationProps) {
  const indicatorRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (indicatorRef.current) {
      const scale = 0.5 + consciousnessLevel * 1.5
      indicatorRef.current.scale.setScalar(scale)
      indicatorRef.current.rotation.z += 0.01
    }
  })

  return (
    <group position={[3, 0, 0]}>
      <Box ref={indicatorRef} args={[0.5, 0.5, 0.5]}>
        <meshBasicMaterial 
          color="#ff00ff" 
          transparent 
          opacity={0.7}
        />
      </Box>
      
      <Text
        position={[0, 1, 0]}
        fontSize={0.2}
        color="#ff00ff"
        anchorX="center"
        anchorY="middle"
      >
        Consciousness: {(consciousnessLevel * 100).toFixed(0)}%
      </Text>
    </group>
  )
}

export default function TSIVisualization(props: TSIVisualizationProps) {
  return (
    <div className="h-[600px] w-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <HolographicField {...props} />
        <ConsciousnessIndicator {...props} />
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
        
        <gridHelper args={[10, 10]} />
      </Canvas>
    </div>
  )
}