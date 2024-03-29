import { motion } from 'framer-motion'
import React, { FC } from 'react'
import styles from '@/styles/components/ProjectPageLayout.module.scss'

export const ProjectPageLayout: FC<any> = ({ children, label }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -150 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -150 },
  }

  return (
    <>
      <header className={styles.header}>
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 1 }}
        >
          {label}
        </motion.h1>
      </header>
      <main className={styles.container}>{children}</main>
    </>
  )
}
