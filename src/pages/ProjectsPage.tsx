import * as React from 'react'
import { Navigation } from '../components/Navigation'
import * as _ from 'lodash'
import { ProjectsPageProps, ProjectProps } from './ProjectPageTypes'
import Project from './Project'


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
  const firstProject = _.get(props, 'projects[0]', {}) as ProjectProps
  return (
    <div className="projects-page-container">
      <Navigation {...navigationProps} />
      <div className="projects-content">
        <Project {...firstProject} />
      </div>
    </div>
  )
}


