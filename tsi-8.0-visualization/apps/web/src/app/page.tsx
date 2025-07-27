'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import ControlPanel from '@/components/ControlPanel'
import StatusBar from '@/components/StatusBar'

const TSIVisualization = dynamic(() => import('@/components/TSIVisualization'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-quantum"></div>
        <p className="mt-4 text-xl">Ładowanie wizualizacji TSI 8.0...</p>
      </div>
    </div>
  )
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-quantum via-biological to-consciousness">
            TSI 8.0 - Wizualizacja Holograficznej Świadomości
          </h1>
          <p className="text-gray-300 mt-2">
            Teoretyczna Integracja Systemów 8.0 - Projekt holograficznej projekcji świadomości
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-quantum/30">
              <Suspense fallback={<div>Ładowanie...</div>}>
                <TSIVisualization />
              </Suspense>
            </div>
          </div>
          
          <div className="space-y-4">
            <ControlPanel />
            <StatusBar />
          </div>
        </div>
      </div>
    </main>
  )
}