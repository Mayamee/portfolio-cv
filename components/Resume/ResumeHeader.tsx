import styles from '../../styles/components/Resume/ResumeHeader.module.scss'
import Image from 'next/image'
import author from '../../localdb/author.json'

export const ResumeHeader = () => {
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
        <h2 className={styles.title}>{author.name}</h2>
        <h3 className={styles.subtitle}>{author.jobType}</h3>
        <div className={styles.location}>
          <Image width={15} height={15} src="/icons/location.svg" alt="location" />
          <h4 className={styles.description}>{author.city}</h4>
        </div>
        <div className={styles.availability}>
          <span className={author.isLookingForAJob ? styles.avaible : styles.busy} />
          <h4 className={styles.description}>
            {author.isLookingForAJob ? 'Open to work' : 'Hired'}
          </h4>
        </div>
      </div>
    </header>
  )
}
