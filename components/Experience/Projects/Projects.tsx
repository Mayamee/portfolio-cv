import { motion } from 'framer-motion'
import { ProjectsItem } from './ProjectsItem/ProjectsItem'
import styles from '@/styles/components/Experience/Projects/Projects.module.scss'
import { ConfigService } from '@/services/ConfigService'
import { observer } from 'mobx-react-lite'
import { TechnologyStackStore } from 'stores/TechnologyStackStore'

const { projectsData } = ConfigService.config

export const Projects = observer(function Projects() {
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
      className={styles.projects}
    >
      {projectsData.map((item) => {
        if (
          TechnologyStackStore.selectedStack.length !== 0 &&
          !TechnologyStackStore.selectedStack.some((stack) => item.stack.includes(stack))
        ) {
          return
        }

        return (
          <ProjectsItem
            width={350}
            height={300}
            label={item.label}
            image={item.image}
            blurImage={item.blurImage}
            stack={item.stack}
            id={item.id}
            key={item.id}
          />
        )
      })}
    </motion.section>
  )
})
