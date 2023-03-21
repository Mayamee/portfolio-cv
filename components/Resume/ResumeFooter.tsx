import styles from '../../styles/components/Resume/ResumeFooter.module.scss'
import Image from 'next/image'

export const ResumeFooter = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>📱Contact me</h3>
      <div className={styles.email}>
        <Image width={30} height={30} src="/icons/email.svg" alt="email" />
        <p className={styles.text}>ponyashcat228@gmail.com</p>
      </div>
      <div className={styles.links}>
        <a
          className={styles.icon}
          href="https://github.com/Mayamee"
          target="_blank"
          rel="noreferrer"
        >
          <Image width={30} height={30} src="/icons/github.svg" alt="github" />
        </a>
        <a
          className={styles.icon}
          href="https://www.linkedin.com/in/dmitry-belykh"
          target="_blank"
          rel="noreferrer"
        >
          <Image width={30} height={30} src="/icons/linkedin.svg" alt="linkedin" />
        </a>
        <a className={styles.icon} href="https://t.me/ymmwmm" target="_blank" rel="noreferrer">
          <Image width={30} height={30} src="/icons/telegram.svg" alt="linkedin" />
        </a>
      </div>
    </div>
  )
}
