import authorData from '@/localdb/author.json'
import projectsData from '@/localdb/projects.json'
import workExpririenceData from '@/localdb/workExpirience.json'
import links from '@/localdb/links.json'

type Config = {
  authorData: typeof authorData
  projectsData: typeof projectsData
  workExpririenceData: typeof workExpririenceData
  links: typeof links
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
        links,
      }

      return this._config
    }

    return this._config
  }
}

const configService = new ConfigService()

export { configService as ConfigService }
