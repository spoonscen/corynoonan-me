export interface ApiResponse {
  data: {
    posts: any[]
  }
}

export interface BlogPageContainerState {
  posts?: string
  err?: Error
}

export interface BlogPageProps {
  location: {
    pathname: string
  }
  posts: any[]
}
