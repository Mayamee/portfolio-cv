import { motion } from 'framer-motion'
import styles from '../../../styles/components/Experience/RealWork/RealWork.module.scss'
import { RealWorkItem } from './RealWorkItem/RealWorkItem'

export const RealWork = () => {
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
      transition={{ type: 'linear' }}
      className={styles.work}
    >
      <RealWorkItem
        companyType="IT-company"
        label="Astral"
        date="June 2021 - Present"
        image="/companies/astral.png"
        cutImage={false}
        workTasks={[
          'Zabbix - configure and setup',
          'VMWare - make new virtual machines',
          'Rusiem - maintain and configure',
        ]}
      />
    </motion.section>
  )
}
