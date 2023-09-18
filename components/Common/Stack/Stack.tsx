import { FC, PropsWithChildren } from 'react'
import styles from '@/styles/components/Common/Stack/Stack.module.scss'
import { clsx } from 'clsx'
import { StackListItem } from 'types/StackListItem'

interface IStackProps {
  items: StackListItem[]
  isStatic?: boolean
  onClick?: (content: string) => (e: React.MouseEvent<HTMLLIElement>) => void
}

const Stack: FC<PropsWithChildren<IStackProps>> = ({ items, onClick }) => {
  if (items.length === 0) return null

  return (
    <ul className={styles.stack}>
      {items.map(({ content, isActive }) => (
        <li
          key={content}
          className={clsx(styles.item, {
            [styles.activeItem]: isActive,
          })}
          onClick={onClick?.(content)}
        >
          {content}
        </li>
      ))}
    </ul>
  )
}
Stack.defaultProps = {
  items: [],
}
export default Stack
