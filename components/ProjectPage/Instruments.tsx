import { motion } from 'framer-motion'
import { FC } from 'react'
import styles from '@/styles/components/ProjectPage/Instruments.module.scss'

interface InstrumentsProps {
  title: string
  items: string[]
  delay: number
}

const variants = {
  hidden: { opacity: 0, x: '100vw', y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -150 },
}

export const Instruments: FC<InstrumentsProps> = ({ title, items, delay }) => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 1, delay }}
    >
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {items.map((i) => (
          <li className={styles.item} key={i}>
            {i}
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
