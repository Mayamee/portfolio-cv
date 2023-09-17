import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from '@/styles/components/ProjectPage/Description.module.scss'

interface DescriptionProps {
  title: string
  content: string
  delay: number
}

export const Description: FC<DescriptionProps> = ({ title, content, delay }) => {
  const variants = {
    hidden: { opacity: 0, x: '100vw', y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -150 },
  }

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
      <p className={styles.content}>{content}</p>
    </motion.section>
  )
}
