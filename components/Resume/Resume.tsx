import styles from '@/styles/components/Resume/Resume.module.scss'
import { ResumeBody } from './ResumeBody'
import { ResumeFooter } from './ResumeFooter'
import { ResumeHeader } from './ResumeHeader'

export const Resume = () => {
  return (
    <section className={styles.container}>
      <div className={styles.layout}>
        <ResumeHeader />
        <ResumeBody />
        <ResumeFooter />
      </div>
    </section>
  )
}
