import styles from '@/styles/components/Resume/ResumeBody.module.scss'
import { ConfigService } from '@/services/ConfigService'
import Stack from '../../Common/Stack/Stack'
import { TechnologyStackStore } from 'stores/TechnologyStackStore'
import { observer } from 'mobx-react-lite'

const { authorData } = ConfigService.config

export const ResumeBody = observer(() => {
  const handleClick = (item: string) => () => {
    TechnologyStackStore.toggleStackItemActive(item)
    if (TechnologyStackStore.selectedStack.includes(item)) {
      TechnologyStackStore.removeStackItem(item)
    } else {
      TechnologyStackStore.addStackItem(item)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a
          className={styles.hire}
          href="https://rxresu.me/ponyashcat228/cv-frontend-eng"
          target="_blank"
          rel="noreferrer"
        >
          CV
        </a>
        <a
          className={styles.works}
          href="https://portfolio-cv-eight.vercel.app/project/flappy-chat"
          target="_blank"
          rel="noreferrer"
        >
          Recent Work
        </a>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.title}>🎓 Core Skills</h3>
        <Stack items={TechnologyStackStore.stack} onClick={handleClick} />
      </div>
      <div className={styles.about}>
        <h3 className={styles.title}>💁‍♂️ About me</h3>
        <article className={styles.text}>
          {authorData.about.map((sentence) => (
            <p key={sentence}>{sentence}</p>
          ))}
        </article>
      </div>
    </div>
  )
})
