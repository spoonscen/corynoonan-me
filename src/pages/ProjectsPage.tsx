import * as React from "react";
import { Navigation } from '../components/Navigation'

export interface ProjectsPageProps {
  children: any[]
  location: {
    pathname: string
  }
}

export function ProjectsPage(props: ProjectsPageProps): JSX.Element {
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
    <div className="projects-page-container">
      <Navigation { ...navigationProps} />
      <div className="projects-content">

      </div>
    </div>
  )
}


