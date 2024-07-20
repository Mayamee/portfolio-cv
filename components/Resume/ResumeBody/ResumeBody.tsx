import styles from '@/styles/components/Resume/ResumeBody.module.scss'
import { ConfigService } from '@/services/ConfigService'
import Stack from '../../Common/Stack/Stack'
import { TechnologyStackStore } from 'stores/TechnologyStackStore'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

const { authorData, links } = ConfigService.config

export const ResumeBody = observer(() => {
  const handleClick = (item: string) => () => {
    TechnologyStackStore.toggleStackItemActive(item)
    if (TechnologyStackStore.selectedStack.includes(item)) {
      TechnologyStackStore.removeSelectedStackItem(item)
    } else {
      TechnologyStackStore.addSelectedStackItem(item)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a
          className={styles.hire}
          href={links['cv-download-link']}
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
        <Link href="/project/flappy-chat">
          <a className={styles.works}>Recent Project</a>
        </Link>
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
