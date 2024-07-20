import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '@/styles/components/Experience/Experience.module.scss'
import { Projects } from './Projects/Projects'
import { RealWork } from './RealWork/RealWork'

export const Experience = () => {
  const [isProjects, setIsProjects] = useState(true)

  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  }

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ ease: 'linear' }}
      className={styles.container}
    >
      <nav className={styles.nav}>
        <h2 className={styles.projects} onClick={() => setIsProjects(true)}>
          Projects
        </h2>
        <h2 className={styles.work} onClick={() => setIsProjects(false)}>
          Work Expirience
        </h2>
      </nav>
      {isProjects ? <Projects /> : <RealWork />}
    </motion.section>
  )
}
