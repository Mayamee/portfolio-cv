import { motion } from 'framer-motion'
import styles from '@/styles/components/Experience/RealWork/RealWork.module.scss'
import { RealWorkItem } from './RealWorkItem/RealWorkItem'
import { ConfigService } from '@/services/ConfigService'

export const RealWork = () => {
  const { workExpririenceData } = ConfigService.config

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
      {workExpririenceData.companies.map(
        ({ companyType, cutImage, date, image, label, workTasks, id }) => (
          <RealWorkItem
            key={id}
            companyType={companyType}
            label={label}
            date={date}
            image={image}
            cutImage={cutImage}
            workTasks={workTasks}
          />
        )
      )}
    </motion.section>
  )
}
