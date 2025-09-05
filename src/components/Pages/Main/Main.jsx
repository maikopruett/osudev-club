import { useMemo } from 'react'
import './Main.css'

export default function Main({ beaverCount = 25 }) {
  const beavers = useMemo(() => {
    return Array.from({ length: beaverCount }).map((_, index) => {
      const left = Math.random() * 100
      const duration = 14 + Math.random() * 18
      const delay = -Math.random() * duration
      const drift = (Math.random() - 0.5) * 160
      const scale = 0.6 + Math.random() * 0.9
      const width = 48 + Math.floor(Math.random() * 120)
      const opacityMin = 0.08 + Math.random() * 0.18
      const opacityMax = Math.max(opacityMin + 0.15, 0.35 + Math.random() * 0.4)
      return { id: index, left, duration, delay, drift, scale, width, opacityMin, opacityMax }
    })
  }, [beaverCount])

  return (
    <div className='relative overflow-hidden w-screen h-screen flex flex-col justify-center place-items-center'>
      <div className='floating-beavers'>
        {beavers.map(b => (
          <img
            key={b.id}
            src='/beaver-logo.svg'
            alt='Beaver logo'
            className='beaver'
            style={{
              left: `${b.left}%`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              width: `${b.width}px`,
              '--drift': `${b.drift}px`,
              '--scale': b.scale,
              '--opacity-min': b.opacityMin,
              '--opacity-max': b.opacityMax,
            }}
          />
        ))}
      </div>
      <div className='relative z-10 text-center'>
        <h1 className='text-white text-8xl font-bold'>
          <span className='text-orange-500'>OSU</span> Dev Club
        </h1>
        <p className='text-white text-4xl font-medium'>
          Where development meets <span className='text-orange-500 font-bold'>orange</span>
        </p>
        <a className='mt-5 text-xl inline-block rounded-full px-7 py-2 text-white shadow-slate-50/40 shadow-xs inset-shadow-slate-50/50 inset-shadow-xs backdrop-blur' href="/join-us">Join Us</a>
      </div>
    </div>
  )
}
