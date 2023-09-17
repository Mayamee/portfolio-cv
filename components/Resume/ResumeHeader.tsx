import { ConfigService } from '@/services/ConfigService'
import styles from '@/styles/components/Resume/ResumeHeader.module.scss'
import Image from 'next/image'

export const ResumeHeader = () => {
  const { authorData } = ConfigService.config

  return (
    <header className={styles.container}>
      <Image
        className={styles.avatar}
        width={110}
        height={110}
        placeholder="blur"
        objectFit="cover"
        blurDataURL="/avatar.jpg"
        src="/avatar.jpg"
        alt="avatar"
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{authorData.name}</h2>
        <h3 className={styles.subtitle}>{authorData.jobType}</h3>
        <div className={styles.location}>
          <Image width={15} height={15} src="/icons/location.svg" alt="location" />
          <h4 className={styles.description}>{authorData.city}</h4>
        </div>
        <div className={styles.availability}>
          <span className={authorData.isLookingForAJob ? styles.avaible : styles.busy} />
          <h4 className={styles.description}>
            {authorData.isLookingForAJob ? 'Open to work' : 'Hired'}
          </h4>
        </div>
      </div>
    </header>
  )
}
