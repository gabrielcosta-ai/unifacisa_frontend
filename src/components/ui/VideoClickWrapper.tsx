'use client'

import { useState, type ReactNode } from 'react'
import { VideoModal } from './VideoModal'

interface VideoClickWrapperProps {
  videoSrc: string
  children: ReactNode
  className?: string
}

export function VideoClickWrapper({ videoSrc, children, className }: VideoClickWrapperProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={className}
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setIsOpen(true) }}
      >
        {children}
      </div>
      <VideoModal src={videoSrc} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
