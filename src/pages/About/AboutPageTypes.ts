export interface ApiResponse {
  data: {
    about: string
  }
}

export interface AboutPageContainerState {
  about?: string
  err?: Error
}

export interface AboutPageProps {
  children: JSX.Element[]
  location: {
    pathname: string
  }
  about: {
    email: string
    technicalRoles: string[]
    technicalSkills: {
      languages: string[]
      frameWorks: string[]
      otherTechnologies: string[]
    },
    interests: string[]
  }
}

