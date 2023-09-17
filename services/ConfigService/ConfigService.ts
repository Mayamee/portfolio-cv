import authorData from '@/localdb/author.json'
import projectsData from '@/localdb/projects.json'
import workExpririenceData from '@/localdb/workExpirience.json'

type AuthorData = typeof authorData
type ProjectsData = typeof projectsData
type WorkExpririenceData = typeof workExpririenceData

type Config = {
  authorData: AuthorData
  projectsData: ProjectsData
  workExpririenceData: WorkExpririenceData
}

class ConfigService {
  private _config: Config | null = null

  constructor() {}

  get config(): Config {
    if (!this._config) {
      this._config = {
        authorData,
        projectsData,
        workExpririenceData,
      }

      return this._config
    }

    return this._config
  }
}

const configService = new ConfigService()

export { configService as ConfigService }
