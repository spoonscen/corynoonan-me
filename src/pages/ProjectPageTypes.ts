export interface ProjectPageContainerState {
  projects?: Project[]
  err?: Error
}

export interface ApiResponse {
  data: {
    projects: Project[]
  }
}

export interface Project {
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
  projects?: Project[]
  err?: Error
}
