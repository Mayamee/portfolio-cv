import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../../styles/components/ProjectPage/ReturnButton.module.scss'

interface ReturnButtonProps {
  delay: number
}

const variants = {
  hidden: { opacity: 0, x: '100vw', y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -150 },
}

export const ReturnButton: FC<ReturnButtonProps> = ({ delay }) => {
  return (
    <motion.div
      className={styles.container}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 1, delay }}
    >
      <h2 className={styles.title}>Return to projects:</h2>
      <Link href="/">
        <div className={styles.link}>Projects</div>
      </Link>
    </motion.div>
  )
}
