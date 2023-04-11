import styles from '../../styles/components/Resume/ResumeFooter.module.scss'
import author from '../../localdb/author.json'
import Image from 'next/image'

export const ResumeFooter = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>📱My contacts</h3>

      {author.contacts.phone && (
        <div
          className={styles.email}
          style={{
            marginBottom: '0.5rem',
          }}
        >
          <Image width={30} height={30} src={author.contacts.phone.img} alt="email" />
          <a href={`tel:${author.contacts.phone.value}`} className={styles.text}>
            +{author.contacts.phone.value}
          </a>
        </div>
      )}
      {author.contacts.email && (
        <div className={styles.email}>
          <Image width={30} height={30} src={author.contacts.email.img} alt="email" />
          <a href={`mailto:${author.contacts.email.value}`} className={styles.text}>
            {author.contacts.email.value}
          </a>
        </div>
      )}

      <div className={styles.links}>
        {author.contacts.links.map((link) => (
          <a
            key={link.id}
            className={styles.icon}
            href={link.value}
            target="_blank"
            rel="noreferrer"
          >
            <Image width={30} height={30} src={link.img} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
  )
}
