import * as React from "react";
import { Navigation } from '../components/Navigation'

export interface BlogPageProps {
  location: {
    pathname: string
  }
}

export function BlogPage(props: BlogPageProps): JSX.Element {
  const navigationProps = {
    classNames: {
      container: 'navigation-container',
      headerContainer: 'full-name-header-container',
      navigation: 'navigation',
      bar: 'bar',
    },
    pathname: props.location.pathname
  }

  return (
    <div className="blog-page-container">
      <Navigation {...navigationProps} />
    </div>
  )
}

