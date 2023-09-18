import styles from '@/styles/components/Experience/Projects/ProjectsItem/ProjectsItem.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stack from '../../../Common/Stack/Stack'

interface ProjectsItemProps {
  width: number
  height: number
  image: string
  blurImage: string
  label: string
  id: string
  stack: string[]
}

export const ProjectsItem: React.FC<ProjectsItemProps> = ({
  width,
  height,
  image,
  blurImage,
  label,
  id,
  stack,
}) => {
  const router = useRouter()

  const stackItems = stack.map((item) => ({
    content: item,
    isActive: false,
  }))

  return (
    <div
      className={styles.container}
      onClick={() => {
        router.push('/project/' + id)
      }}
    >
      <div className={styles.spacer}>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL={blurImage}
            quality={70}
            objectFit="cover"
            alt={label}
          />
        </div>
        <h3 className={styles.label}>{label}</h3>
      </div>
      <div className={styles.divider} />
      <div className={styles.spacer}>
        <Stack items={stackItems} />
      </div>
    </div>
  )
}
