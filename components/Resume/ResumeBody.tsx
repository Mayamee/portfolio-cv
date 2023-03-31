import styles from '../../styles/components/Resume/ResumeBody.module.scss'

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
        <ul>
          <li className={styles.text}>React</li>
          <li className={styles.text}>Redux</li>
          <li className={styles.text}>JS/TS</li>
          <li className={styles.text}>Figma/AdobeXD/Avocode</li>
          <li className={styles.text}>Webpack/Vite/Gulp</li>
          <li className={styles.text}>Nodejs</li>
          <li className={styles.text}>Docker</li>
          <li className={styles.text}>Gitlab CI</li>
          <li className={styles.text}>Databases (MongoDB)</li>
          <li className={styles.text}>Powershell/Bash scripting</li>
          <li className={styles.text}>TCP/IP, OSI</li>
        </ul>
      </div>
      <div className={styles.about}>
        <h3 className={styles.title}>💁‍♂️About me</h3>
        <p className={styles.text}>I am interested in frontend development.</p>
        <br />
        <p className={styles.text}>
          Interests: Reading fiction and professional literature. Watching movies. Journeys.
        </p>
      </div>
    </div>
  )
}
