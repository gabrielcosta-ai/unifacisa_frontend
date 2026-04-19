'use client'

import { useEffect, useCallback } from 'react'
import styles from './VideoModal.module.css'

interface VideoModalProps {
  src: string
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ src, isOpen, onClose }: VideoModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.videoWrapper} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
          &times;
        </button>
        <video
          className={styles.video}
          src={src}
          controls
          autoPlay
        />
      </div>
    </div>
  )
}
