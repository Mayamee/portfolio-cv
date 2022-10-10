import { TypeAnimation } from 'react-type-animation'
import styles from '../styles/components/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.text}>
        <TypeAnimation
          sequence={['Hello', 1000, "I'm", 1000, 'Dmitry', 1000, 'Frontend dev', 15000]}
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
