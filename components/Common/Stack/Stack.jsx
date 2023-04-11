import styles from '../../../styles/components/Common/Stack/Stack.module.scss'

const Stack = ({ items }) => {
  if (items.length === 0) return null
  return (
    <ul className={styles.stack}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
Stack.defaultProps = {
  items: [],
}
export default Stack
