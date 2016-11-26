export interface ProjectPageContainerState {
  projects?: ProjectProps[]
  err?: Error
}

export interface ApiResponse {
  data: {
    projects: ProjectProps[]
  }
}

export interface ProjectProps {
  title: string
  details: string
  link: string
  github: string
  description: string
  firstImage: string
  secondImage: string
}

export interface ProjectsPageProps {
  children: any[]
  location: {
    pathname: string
  }
  projects?: ProjectProps[]
  err?: Error
}
