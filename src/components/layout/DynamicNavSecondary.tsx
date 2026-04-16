'use client'

import { usePathname } from 'next/navigation'
import { NavSecondary } from './NavSecondary'

const typeLabels: Record<string, string> = {
  graduacao: 'GRADUAÇÃO',
  'pos-graduacao': 'PÓS GRADUAÇÃO',
}

export function DynamicNavSecondary() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  const breadcrumb: { label: string; href?: string }[] = [
    { label: 'HOME', href: '/' },
  ]

  if (segments[0] === 'cursos') {
    breadcrumb.push({ label: 'GRADUAÇÃO', href: '/cursos' })

    if (segments[1]) {
      const courseName = segments[1]
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
      breadcrumb.push({ label: courseName.toUpperCase() })
    }
  }

  return <NavSecondary breadcrumb={breadcrumb} />
}
