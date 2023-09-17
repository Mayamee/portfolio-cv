import { ConfigService } from '@/services/ConfigService'
import styles from '@/styles/components/Resume/ResumeFooter.module.scss'
import Image from 'next/image'

export const ResumeFooter = () => {
  const { authorData } = ConfigService.config

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>📱My contacts</h3>

      {authorData.contacts.phone && (
        <div
          className={styles.email}
          style={{
            marginBottom: '0.5rem',
          }}
        >
          <Image width={30} height={30} src={authorData.contacts.phone.img} alt="email" />
          <a href={`tel:${authorData.contacts.phone.value}`} className={styles.text}>
            +{authorData.contacts.phone.value}
          </a>
        </div>
      )}
      {authorData.contacts.email && (
        <div className={styles.email}>
          <Image width={30} height={30} src={authorData.contacts.email.img} alt="email" />
          <a href={`mailto:${authorData.contacts.email.value}`} className={styles.text}>
            {authorData.contacts.email.value}
          </a>
        </div>
      )}

      <div className={styles.links}>
        {authorData.contacts.links.map((link) => (
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
