import styles from '../../styles/components/Resume/ResumeBody.module.scss'
import author from '../../localdb/author.json'
import Stack from '../Common/Stack/Stack'

export const ResumeBody = () => {
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
          href="https://github.com/Mayamee/react-quiz"
          target="_blank"
          rel="noreferrer"
        >
          Recent Work
        </a>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.title}>🎓My Skills</h3>
        <Stack items={author.skills} />
      </div>
      <div className={styles.about}>
        <h3 className={styles.title}>💁‍♂️About me</h3>
        <article className={styles.text}>
          {author.about.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </article>
      </div>
    </div>
  )
}
