import styles from '../../styles/components/Resume/ResumeBody.module.scss'

export const ResumeBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a
          className={styles.hire}
          href="https://www.upwork.com/freelancers/~01522bc67a7df01a66"
          target="_blank"
          rel="noreferrer"
        >
          Hire now
        </a>
        <a
          className={styles.works}
          href="https://www.upwork.com/freelancers/~01522bc67a7df01a66"
          target="_blank"
          rel="noreferrer"
        >
          Recent Work
        </a>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.title}>🎓My Skills</h3>
        <ul>
          <li className={styles.text}>HTML, CSS, SCSS</li>
          <li className={styles.text}>JavaScript, TypeScript</li>
          <li className={styles.text}>React, Redux</li>
          <li className={styles.text}>Node.js, Express</li>
          <li className={styles.text}>MongoDB</li>
          <li className={styles.text}>Webpack</li>
          <li className={styles.text}>Git</li>
        </ul>
      </div>
      <div className={styles.about}>
        <h3 className={styles.title}>💁‍♂️About me</h3>
        <p className={styles.text}>
          I&apos;m an experienced Frontend developer who loves what he does. I Can redesign, build
          websites, and fix bugs for you.
        </p>
      </div>
    </div>
  )
}
