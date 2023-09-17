import styles from '@/styles/components/Resume/ResumeBody.module.scss'
import { ConfigService } from '@/services/ConfigService'
import Stack from '../Common/Stack/Stack'

export const ResumeBody = () => {
  const { authorData } = ConfigService.config

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a
          className={styles.hire}
          href="https://rxresu.me/ponyashcat228/cv-frontend-eng"
          target="_blank"
          rel="noreferrer"
        >
          CV
        </a>
        <a
          className={styles.works}
          href="https://portfolio-cv-eight.vercel.app/project/flappy-chat"
          target="_blank"
          rel="noreferrer"
        >
          Recent Work
        </a>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.title}>🎓 Core Skills</h3>
        <Stack items={authorData.skills} />
      </div>
      <div className={styles.about}>
        <h3 className={styles.title}>💁‍♂️ About me</h3>
        <article className={styles.text}>
          {authorData.about.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </article>
      </div>
    </div>
  )
}
