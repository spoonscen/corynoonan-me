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
}
