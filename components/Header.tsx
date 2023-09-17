import { TypeAnimation } from 'react-type-animation'
import styles from '@/styles/components/Header.module.scss'
import { ConfigService } from '@/services/ConfigService'

export const Header = () => {
  const { authorData } = ConfigService.config

  return (
    <header className={styles.container}>
      <h1 className={styles.text}>
        <TypeAnimation
          sequence={[authorData.name, 1000, 'CV', 1000, authorData.jobType, 15000]}
          speed={50}
          style={{
            fontSize: '2rem',
            color: '#fff',
          }}
          wrapper="span"
        />
      </h1>
    </header>
  )
}
