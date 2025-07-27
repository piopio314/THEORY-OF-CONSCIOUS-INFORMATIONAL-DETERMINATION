'use client'

import { useState } from 'react'

interface ControlPanelProps {
  onParametersChange?: (params: {
    nDimensions: number
    biologicalComplexity: number
    consciousnessLevel: number
  }) => void
}

export default function ControlPanel({ onParametersChange }: ControlPanelProps) {
  const [nDimensions, setNDimensions] = useState(8)
  const [biologicalComplexity, setBiologicalComplexity] = useState(5.0)
  const [consciousnessLevel, setConsciousnessLevel] = useState(0.5)

  const handleParameterChange = () => {
    onParametersChange?.({
      nDimensions,
      biologicalComplexity,
      consciousnessLevel
    })
  }

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-quantum/30">
      <h3 className="text-lg font-semibold mb-4 text-quantum">Panel Kontrolny</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Wymiary: {nDimensions}D
          </label>
          <input
            type="range"
            min="4"
            max="11"
            value={nDimensions}
            onChange={(e) => {
              setNDimensions(Number(e.target.value))
              handleParameterChange()
            }}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Złożoność biologiczna: {biologicalComplexity.toFixed(2)}
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={biologicalComplexity}
            onChange={(e) => {
              setBiologicalComplexity(Number(e.target.value))
              handleParameterChange()
            }}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Poziom świadomości: {(consciousnessLevel * 100).toFixed(0)}%
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={consciousnessLevel}
            onChange={(e) => {
              setConsciousnessLevel(Number(e.target.value))
              handleParameterChange()
            }}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <button
          onClick={handleParameterChange}
          className="w-full bg-quantum/20 hover:bg-quantum/30 text-quantum font-medium py-2 px-4 rounded transition-colors"
        >
          Aktualizuj parametry
        </button>
      </div>
    </div>
  )
}