import styles from '../../styles/components/Resume/ResumeBody.module.scss'

export const ResumeBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a
          className={styles.hire}
          href="https://rxresu.me/ponyashcat228/dmitryenglish"
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
          <li className={styles.text}>Nodejs (Express)</li>
          <li className={styles.text}>Databases (PostgreSQL MongoDB)</li>
          <li className={styles.text}>Monitoring systems (Zabbix)</li>
          <li className={styles.text}>Command shells (Powershell/Bash/WSL)</li>
          <li className={styles.text}>Networking (understanding TCP/IP, OSI, Firewalls)</li>
          <li className={styles.text}>Containerization (Docker, Docker Compose)</li>
          <li className={styles.text}>Frontend static (HTML/CSS)</li>
          <li className={styles.text}>Frontend languages (Javascript/Typescript)</li>
          <li className={styles.text}>JS Frameworks (React/Redux)</li>
          <li className={styles.text}>Bundlers (Webpack/Gulp)</li>
          <li className={styles.text}>Design (Figma/Photoshop/AdobeXD)</li>
        </ul>
      </div>
      <div className={styles.about}>
        <h3 className={styles.title}>💁‍♂️About me</h3>
        <p className={styles.text}>
          Hobby: Assembling puzzles, cycling, sports.<br/>Personal qualities: Responsibility, diligence,
          innovation, purposefulness, ability to work in a team, ability to work under stress.<br/>
          Interests: Reading fiction and professional literature. Watching movies. Journeys.
        </p>
      </div>
    </div>
  )
}
