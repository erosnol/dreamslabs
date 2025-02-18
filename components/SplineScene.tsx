'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const SplineComponent = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-lg" />
})

interface SplineSceneProps {
  scene: string;
}

export default function SplineScene({ scene }: SplineSceneProps) {
  return (
    <Suspense fallback={<div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-lg" />}>
      <div className="w-full h-full">
        <SplineComponent scene={scene} />
      </div>
    </Suspense>
  )
}
