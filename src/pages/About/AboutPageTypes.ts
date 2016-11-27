export interface ApiResponse {
  data: {
    about: string
  }
}

export interface ProjectPageContainerState {
  about?: string
  err?: Error
}

export interface AboutPageProps {
  location: {
    pathname: string
  }
  about: {
    email: string
    technicalRolls: string[]
    technicalSkills: {
      languages: {
        strong: string[],
        medium: string[],
        weak: string[],
      },
      frameWorks: string[]
      otherTechnologies: string[]
    },
    interests: string[]
  }
}
