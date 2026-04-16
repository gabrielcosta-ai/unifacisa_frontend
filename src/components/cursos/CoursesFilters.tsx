'use client'

import { useState, useCallback } from 'react'
import styles from './CoursesFilters.module.css'

export type ActiveFilters = {
  modality: string[]
  period: string[]
  duration: string[]
}

type CoursesFiltersProps = {
  onFilterChange: (filters: ActiveFilters) => void
}

const MODALITY_OPTIONS = [
  { label: 'Presencial', value: 'presencial' },
  { label: 'Semipresencial', value: 'semipresencial' },
  { label: 'EAD', value: 'ead' },
]

const PERIOD_OPTIONS = [
  { label: 'Parcial', value: 'parcial' },
  { label: 'Integral', value: 'integral' },
]

const DURATION_OPTIONS = [
  { label: '4 anos', value: '4' },
  { label: '5 anos', value: '5' },
  { label: '6 anos', value: '6' },
]

export function CoursesFilters({ onFilterChange }: CoursesFiltersProps) {
  const [filters, setFilters] = useState<ActiveFilters>({
    modality: [],
    period: [],
    duration: [],
  })

  const toggleFilter = useCallback(
    (category: keyof ActiveFilters, value: string) => {
      setFilters((prev) => {
        const current = prev[category]
        const next = current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value]
        const updated = { ...prev, [category]: next }
        onFilterChange(updated)
        return updated
      })
    },
    [onFilterChange],
  )

  return (
    <>
      <section className={styles.section}>
        <div className={styles.card}>
          <span className={styles.label}>
            Clique abaixo ou use os filtros para selecionar
          </span>

          <div className={styles.columns}>
            <div className={styles.column}>
              <span className={styles.columnTitle}>Modalidade</span>
              {MODALITY_OPTIONS.map((opt) => (
                <label key={opt.value} className={styles.filterItem}>
                  <span className={styles.filterLabel}>{opt.label}</span>
                  <span className={styles.toggle}>
                    <input
                      type="checkbox"
                      className={styles.toggleInput}
                      checked={filters.modality.includes(opt.value)}
                      onChange={() => toggleFilter('modality', opt.value)}
                    />
                    <span className={styles.toggleSlider} />
                  </span>
                </label>
              ))}
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>Periodo</span>
              {PERIOD_OPTIONS.map((opt) => (
                <label key={opt.value} className={styles.filterItem}>
                  <span className={styles.filterLabel}>{opt.label}</span>
                  <span className={styles.toggle}>
                    <input
                      type="checkbox"
                      className={styles.toggleInput}
                      checked={filters.period.includes(opt.value)}
                      onChange={() => toggleFilter('period', opt.value)}
                    />
                    <span className={styles.toggleSlider} />
                  </span>
                </label>
              ))}
            </div>

            <div className={styles.column}>
              <span className={styles.columnTitle}>Tempo</span>
              {DURATION_OPTIONS.map((opt) => (
                <label key={opt.value} className={styles.filterItem}>
                  <span className={styles.filterLabel}>{opt.label}</span>
                  <span className={styles.toggle}>
                    <input
                      type="checkbox"
                      className={styles.toggleInput}
                      checked={filters.duration.includes(opt.value)}
                      onChange={() => toggleFilter('duration', opt.value)}
                    />
                    <span className={styles.toggleSlider} />
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aiSection}>
        <div className={styles.aiCard}>
          <div className={styles.aiLeft}>
            <span className={styles.aiIcon}>&#10022;</span>
            <span className={styles.aiText}>Encontre o melhor curso para você com IA</span>
          </div>
          <button className={styles.aiBtn} aria-label="Buscar com IA">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}
