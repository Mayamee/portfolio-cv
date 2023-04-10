import { TypeAnimation } from 'react-type-animation'
import styles from '../styles/components/Header.module.scss'
import author from '../localdb/author.json'
export const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.text}>
        <TypeAnimation
          sequence={[author.name, 1000, 'CV', 1000, author.jobType, 15000]}
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
