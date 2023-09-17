import { ImageSwitcherSlide } from './ImageSwitcherSlide'
import { Carousel } from 'react-responsive-carousel'
import styles from '@/styles/components/ProjectPage/ImageSwitcher.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { motion } from 'framer-motion'
import { FC } from 'react'

interface ImageSwitcher {
  imagesPath: string[]
  blurImage: string
}

export const ImageSwitcher: FC<ImageSwitcher> = ({ imagesPath, blurImage }) => {
  const variants = {
    hidden: { opacity: 0, x: '-100vw', y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -150 },
  }

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <Carousel
        className={styles.carousel}
        infiniteLoop
        autoPlay
        stopOnHover
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        dynamicHeight
      >
        {imagesPath.map((img) => (
          <ImageSwitcherSlide key={img} imagePath={img} blurImage={blurImage} />
        ))}
      </Carousel>
    </motion.section>
  )
}
