'use client'

import { useEffect } from 'react'

export function ViewportScale() {
  useEffect(() => {
    function updateScale() {
      document.documentElement.style.zoom = String(window.innerWidth / 1920)
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return null
}
