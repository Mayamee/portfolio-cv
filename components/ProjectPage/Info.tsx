import { FC } from 'react'
import { Instruments } from './Instruments'
import styles from '../../styles/components/ProjectPage/Info.module.scss'
import { motion } from 'framer-motion'
import { Description } from './Description'
import { LinkSection } from './LinkSection'
import { ReturnButton } from './ReturnButton'

interface InfoProps {
  description: string
  stack: string[]
  deployLink: string
  responsibility: string
  github: string
  isDeploy: boolean
}

const variants = {
  hidden: { opacity: 0, x: '100vw', y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -150 },
}

export const Info: FC<InfoProps> = ({
  description,
  stack,
  deployLink,
  responsibility,
  github,
  isDeploy,
}) => {
  return (
    <motion.section
      className={styles.info}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 1.5 }}
    >
      <Instruments title="Stack" items={stack} delay={0.4} />
      <Description title="Responsibility" content={responsibility} delay={0.5} />
      <Description title="Description" content={description} delay={0.6} />
      {isDeploy && (
        <LinkSection
          title="Click to check it on your device:"
          linkTitle="Deploy"
          link={deployLink}
          delay={0.7}
        />
      )}
      <LinkSection title="Click to check code:" linkTitle="Code" link={github} delay={0.8} />
      <ReturnButton delay={0.9} />
    </motion.section>
  )
}
