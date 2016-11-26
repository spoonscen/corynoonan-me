import * as React from 'react'
import { Navigation } from '../../components/Navigation'
import * as _ from 'lodash'
import { ProjectsPageProps, ProjectProps } from './ProjectPageTypes'
import Project from './Project'


export function ProjectsPage(props: ProjectsPageProps): JSX.Element {
  const navigationProps = {
    pathname: props.location.pathname
  }

  const projects = _.get(props, 'projects', []) as ProjectProps[]
  return (
    <div className="projects-page-container">
      <Navigation {...navigationProps} />
      <div className="projects-content">
        {_.map(projects, (project: ProjectProps) => <Project key={project.title} {...project} />)}
      </div>
    </div>
  )
}


