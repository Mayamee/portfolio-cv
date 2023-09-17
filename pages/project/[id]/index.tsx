import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ImageSwitcher } from '@/components/ProjectPage/ImageSwitcher'
import { ProjectPageLayout } from '@/components/ProjectPageLayout'
import { Info } from '@/components/ProjectPage/Info'
import { ConfigService } from '@/services/ConfigService'

interface TypeProject {
  id: string
  label: string
  image: string
  screenshots: string[]
  deployLink: string
  description: string
  stack: string[]
  responsibility: string
  github: string
  blurImage: string
  isDeploy: boolean
}

const ProjectPage = () => {
  const { projectsData } = ConfigService.config

  const [project, setProject] = useState<TypeProject>({
    screenshots: [''],
    stack: [''],
  } as TypeProject)
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query
      const project = projectsData.filter((i) => i.id === id)[0]
      setProject(project)
    }
  }, [router.isReady])

  const {
    screenshots,
    label,
    deployLink,
    description,
    stack,
    responsibility,
    github,
    blurImage,
    isDeploy,
  } = project

  return (
    <ProjectPageLayout label={label}>
      <ImageSwitcher imagesPath={screenshots} blurImage={blurImage} />
      <Info
        responsibility={responsibility}
        description={description}
        stack={stack}
        deployLink={deployLink}
        github={github}
        isDeploy={isDeploy}
      />
    </ProjectPageLayout>
  )
}

export default ProjectPage
