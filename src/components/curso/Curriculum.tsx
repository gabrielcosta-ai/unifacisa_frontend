'use client'

import { useState } from 'react'
import styles from './Curriculum.module.css'

type Subject = {
  name: string
  hours: string
}

type Semester = {
  name: string
  subjects: Subject[]
}

type CurriculumProps = {
  title: string
  semesters: Semester[]
}

export function Curriculum({ title, semesters }: CurriculumProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set())

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  function expandAll() {
    if (openIndexes.size === semesters.length) {
      setOpenIndexes(new Set())
    } else {
      setOpenIndexes(new Set(semesters.map((_, i) => i)))
    }
  }

  const [showAll, setShowAll] = useState(false)
  const allOpen = openIndexes.size === semesters.length
  const visibleSemesters = showAll ? semesters : semesters.slice(0, 3)

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {visibleSemesters.map((sem, i) => {
          const isOpen = openIndexes.has(i)
          return (
            <div key={i} className={styles.item}>
              <button className={styles.itemHeader} onClick={() => toggle(i)} aria-expanded={isOpen}>
                <span className={styles.itemName}>{sem.name}</span>
                <span className={`${styles.expandBtn} ${isOpen ? styles.expandBtnOpen : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </span>
              </button>
              {isOpen && sem.subjects.length > 0 && (
                <div className={styles.subjects}>
                  {sem.subjects.map((sub, j) => (
                    <div key={j} className={styles.subject}>
                      <span className={styles.subjectName}>{sub.name}</span>
                      {sub.hours && <span className={styles.subjectHours}>{sub.hours}</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
      {!showAll && semesters.length > 3 && (
        <button className={styles.expandAll} onClick={() => { setShowAll(true); expandAll() }}>
          Expandir todos os semestres
        </button>
      )}
      {showAll && (
        <button className={styles.expandAll} onClick={() => { setShowAll(false); setOpenIndexes(new Set()) }}>
          Recolher semestres
        </button>
      )}
    </section>
  )
}
