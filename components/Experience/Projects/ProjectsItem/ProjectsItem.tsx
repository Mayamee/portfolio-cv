import styles from '../../../../styles/components/Experience/Projects/ProjectsItem/ProjectsItem.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface ProjectsItemProps {
  width: number
  height: number
  image: string
  blurImage: string
  label: string
  id: string
}

export const ProjectsItem: React.FC<ProjectsItemProps> = ({
  width,
  height,
  image,
  blurImage,
  label,
  id,
}) => {
  const sizes = {
    width: `${width}px`,
    height: `${height}px`,
  }

  const router = useRouter()

  return (
    <div
      className={styles.container}
      style={sizes}
      onClick={() => {
        router.push('/project/' + id)
      }}
    >
      <figure>
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
        <figcaption className={styles.caption}>{label}</figcaption>
      </figure>
    </div>
  )
}
