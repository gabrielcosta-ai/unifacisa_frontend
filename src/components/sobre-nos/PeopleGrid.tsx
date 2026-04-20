import styles from './PeopleGrid.module.css'

export interface TeamMember {
  name: string
  role?: string
  imageSrc?: string
}

interface PeopleGridProps {
  overline?: string
  title?: string
  members?: TeamMember[]
}

export function PeopleGrid({
  overline = 'REITORIA E DIRETORIA',
  title = 'Lorem ipsum dolor sit amet',
  members = [],
}: PeopleGridProps) {
  return (
    <section className={styles.section}>
      {overline && <p className={styles.overline}>{overline}</p>}
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.grid}>
        {members.map((member, i) => (
          <div
            key={i}
            className={styles.card}
            style={member.imageSrc ? {
              backgroundImage: `linear-gradient(180deg, rgba(1, 83, 255, 0) 58.21%, rgba(0, 0, 0, 0.8) 100%), url(${member.imageSrc})`
            } : undefined}
          >
            {member.role && <span className={styles.cardRole}>{member.role}</span>}
            <span className={styles.cardName}>{member.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
