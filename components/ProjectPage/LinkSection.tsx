import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from '@/styles/components/ProjectPage/LinkSection.module.scss'

interface LinkSectionProps {
  title: string
  linkTitle: string
  link: string
  delay: number
}

const variants = {
  hidden: { opacity: 0, x: '100vw', y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -150 },
}

export const LinkSection: FC<LinkSectionProps> = ({ title, linkTitle, link, delay }) => {
  return (
    <motion.section
      className={styles.container}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 1, delay }}
    >
      <h2 className={styles.title}>{title}</h2>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        {linkTitle}
      </a>
    </motion.section>
  )
}
