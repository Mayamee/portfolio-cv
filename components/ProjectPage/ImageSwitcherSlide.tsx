import Image from 'next/image'
import { FC } from 'react'
import styles from '../../styles/components/ProjectPage/ImageSwitcherSlide.module.scss'

interface ImageSwitcherSlideProps {
  imagePath: string
  blurImage: string
}

export const ImageSwitcherSlide: FC<ImageSwitcherSlideProps> = ({ imagePath, blurImage }) => {
  return (
    <div className={styles.container}>
      <Image
        layout="responsive"
        width={16}
        height={9}
        placeholder="blur"
        blurDataURL="/"
        objectFit="contain"
        src={imagePath}
      />
    </div>
  )
}
