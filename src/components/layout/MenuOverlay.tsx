'use client'

import { useState, useCallback } from 'react'
import styles from './MenuOverlay.module.css'
import Image from 'next/image'

type MenuButton = { label: string; href: string; style?: string | null }
type MenuLink = { label: string; href: string; style?: string | null }
type MenuColumn = { title: string; links?: MenuLink[] }

type MenuData = {
  ctaTitle?: string
  buttons?: MenuButton[]
  columns?: MenuColumn[]
  bigText?: string
}

const FALLBACK: MenuData = {
  ctaTitle: 'Escolha como quer ser atendido:',
  buttons: [
    { label: 'Ligue para a Unifacisa', href: 'tel:+558321018877', style: 'outline' },
    { label: 'Inscreva-se no Vestibular', href: '#', style: 'green' },
  ],
  columns: [
    { title: 'Visão & Essência', links: [{ label: 'Sobre nós', href: '#' }, { label: 'Como pensamos', href: '#' }, { label: 'O que já construímos', href: '#' }] },
    { title: 'Institucional', links: [{ label: 'Secretaria Acadêmica', href: '#' }, { label: 'Repositório Acadêmico', href: '#' }, { label: 'CPA', href: '#' }, { label: 'Cepros', href: '#' }, { label: 'Ouvidoria', href: '#' }] },
    { title: 'Para o estudante', links: [{ label: 'Graduação', href: '#' }, { label: 'Pós Graduação', href: '#' }, { label: 'Fellowship', href: '#' }, { label: 'Residência', href: '#' }] },
    { title: 'Para a sociedade', links: [{ label: 'Saúde/', href: '#', style: 'bold' }, { label: 'Hospital Help', href: '#' }, { label: 'Esporte/', href: '#', style: 'bold' }, { label: 'Basquete', href: '#' }, { label: 'Social/', href: '#', style: 'bold' }, { label: 'Projetos Sociais', href: '#' }, { label: 'Eventos', href: '#' }, { label: 'Notícias', href: '#' }, { label: 'Museu', href: '#' }, { label: 'Vagas de voluntariado', href: '#' }, { label: 'Comunidade ex-alunos', href: '#' }, { label: 'Núcleos de Pesquisa', href: '#' }, { label: 'Vagas Emprego', href: '#' }] },
    { title: 'Vivência', links: [{ label: 'Abordagem Acadêmica', href: '#' }, { label: 'Ecossistema de Ensino', href: '#' }, { label: 'Experiência Unifacisa', href: '#' }] },
    { title: 'Faça parte', links: [{ label: 'Ingresso/', href: '#', style: 'bold' }, { label: 'Vestibular', href: '#' }, { label: 'Enem', href: '#' }, { label: 'Transferência', href: '#' }, { label: '2ª Graduação', href: '#' }, { label: 'Bolsas/', href: '#', style: 'bold' }, { label: 'ProBem', href: '#' }, { label: 'ProUni', href: '#' }, { label: 'Descontos/', href: '#', style: 'bold' }, { label: 'Vestibular', href: '#' }, { label: 'Enem', href: '#' }, { label: 'Transferência', href: '#' }, { label: '2ª Graduação', href: '#' }, { label: 'Convênios', href: '#' }, { label: 'Família', href: '#' }, { label: 'Ex-alunos', href: '#' }, { label: 'Financiamentos/', href: '#', style: 'bold' }, { label: 'Leme', href: '#' }, { label: 'Fies', href: '#' }] },
  ],
  bigText: 'UNIFACISA: NÃO DÁ PARA COMPARAR.',
}

export function MenuOverlay({ data }: { data?: MenuData }) {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  const menu = data && data.columns && data.columns.length > 0 ? data : FALLBACK
  const ctaTitle = menu.ctaTitle || FALLBACK.ctaTitle
  const buttons = menu.buttons && menu.buttons.length > 0 ? menu.buttons : FALLBACK.buttons!
  const columns = menu.columns && menu.columns.length > 0 ? menu.columns : FALLBACK.columns!
  const bigText = menu.bigText || FALLBACK.bigText

  const handleClose = useCallback(() => {
    setClosing(true)
    setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 300)
  }, [])

  // Layout: first 2 columns stack (like footer), rest are individual
  const firstCol = columns[0]
  const secondCol = columns[1]
  const restCols = columns.slice(2)

  return (
    <>
      <button className={styles.menuTrigger} onClick={() => setOpen(true)}>
        MENU
      </button>

      {open && (
        <div className={`${styles.overlay} ${closing ? styles.closing : ''}`}>
          <div className={styles.inner}>
            {/* Top */}
            <div className={styles.top}>
              <Image src="/images/logo-unifacisa-white.png" alt="Unifacisa" width={323} height={72} />
              <div className={styles.topRight}>
                <h3 className={styles.topTitle}>{ctaTitle}</h3>
                <div className={styles.buttons}>
                  {buttons.map((btn, i) => (
                    <a key={i} href={btn.href} className={btn.style === 'outline' ? styles.btnOutline : styles.btnGreen}>
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
              <button className={styles.closeBtn} onClick={handleClose} aria-label="Fechar menu">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1" y1="1" x2="16" y2="16" stroke="#FFFFFF" strokeWidth="2" />
                  <line x1="16" y1="1" x2="1" y2="16" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </button>
            </div>

            <hr className={styles.divider} />

            {/* Columns */}
            <div className={styles.columns}>
              {/* Col 1: stacked (Visão & Essência + Institucional) */}
              <div>
                {firstCol && (
                  <>
                    <h3 className={styles.columnTitle}>{firstCol.title}</h3>
                    <div className={styles.columnLinks}>
                      {firstCol.links?.map((l, i) => !l.href || l.href === '#' ? <span key={i}>{l.label}</span> : <a key={i} href={l.href}>{l.label}</a>)}
                    </div>
                  </>
                )}
                {secondCol && (
                  <>
                    <div className={styles.columnSpacer} />
                    <h3 className={styles.columnTitle}>{secondCol.title}</h3>
                    <div className={styles.columnLinks}>
                      {secondCol.links?.map((l, i) => !l.href || l.href === '#' ? <span key={i}>{l.label}</span> : <a key={i} href={l.href}>{l.label}</a>)}
                    </div>
                  </>
                )}
              </div>

              {/* Remaining columns */}
              {restCols.map((col, i) => (
                <div key={i}>
                  <h3 className={styles.columnTitle}>{col.title}</h3>
                  <div className={styles.columnLinks}>
                    {col.links?.map((l, j) => (
                      {!l.href || l.href === '#' ? <span key={j} className={l.style === 'bold' ? styles.linkBold : undefined}>{l.label}</span> : <a key={j} href={l.href} className={l.style === 'bold' ? styles.linkBold : undefined}>{l.label}</a>}
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
          {/* Bottom - outside inner to avoid overflow:hidden */}
          <p className={styles.bigText}>{bigText}</p>
        </div>
      )}
    </>
  )
}
