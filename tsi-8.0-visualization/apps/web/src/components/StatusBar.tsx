'use client'

import { useEffect, useState } from 'react'

interface StatusData {
  timestamp: string
  apiStatus: 'connected' | 'disconnected'
  holographicField: number
  consciousnessLevel: number
  biologicalComplexity: number
}

export default function StatusBar() {
  const [status, setStatus] = useState<StatusData>({
    timestamp: new Date().toISOString(),
    apiStatus: 'connected',
    holographicField: 0.75,
    consciousnessLevel: 0.65,
    biologicalComplexity: 5.2
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(prev => ({
        ...prev,
        timestamp: new Date().toISOString(),
        holographicField: Math.sin(Date.now() / 1000) * 0.2 + 0.75,
        consciousnessLevel: Math.sin(Date.now() / 2000) * 0.1 + 0.65,
        biologicalComplexity: 5.2 + Math.sin(Date.now() / 3000) * 0.3
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-biological/30">
      <h3 className="text-lg font-semibold mb-4 text-biological">Status Systemu</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>API Status:</span>
          <span className={`font-medium ${status.apiStatus === 'connected' ? 'text-green-400' : 'text-red-400'}`}>
            {status.apiStatus}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Pole holograficzne:</span>
          <span className="text-quantum">{(status.holographicField * 100).toFixed(1)}%</span>
        </div>
        
        <div className="flex justify-between">
          <span>Poziom świadomości:</span>
          <span className="text-consciousness">{(status.consciousnessLevel * 100).toFixed(1)}%</span>
        </div>
        
        <div className="flex justify-between">
          <span>Złożoność biologiczna:</span>
          <span className="text-biological">{status.biologicalComplexity.toFixed(2)}</span>
        </div>
        
        <div className="text-xs text-gray-400 mt-2">
          {new Date(status.timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  )
}