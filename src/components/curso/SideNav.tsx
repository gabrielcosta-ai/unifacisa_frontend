import styles from './SideNav.module.css'

const sections = [
  { id: 'experiencia', label: 'experiência unifacisa' },
  { id: 'abordagem', label: 'abordagem acadêmica' },
  { id: 'numeros', label: 'números do curso' },
  { id: 'matriz', label: 'matriz curricular' },
  { id: 'estrutura', label: 'estrutura' },
  { id: 'corpo-docente', label: 'corpo docente' },
]

export function SideNav() {
  return (
    <nav className={styles.nav}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={styles.link}
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}
