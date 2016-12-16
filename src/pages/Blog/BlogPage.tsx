import * as React from 'react'
import { Navigation } from '../../components/Navigation'

export interface BlogPageProps {
  location: {
    pathname: string
  }
}

export function BlogPage(props: BlogPageProps): JSX.Element {
  const navigationProps = {
    pathname: props.location.pathname
  }

  return (
    <div className="blog-page-container">
      <Navigation {...navigationProps} />
      <div className="blog-page-content">
        <h1>Coming Soon!</h1>
      </div>
    </div>
  )
}

