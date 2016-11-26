import * as React from 'react'
import { Navigation } from '../components/Navigation'
import * as _ from 'lodash'
import { ProjectsPageProps } from './ProjectPageTypes'


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
      <Navigation {...navigationProps} />
      <div className="projects-content">
        <div className="project">
          <div className="project-image-container">
            <img className="project-image" src={_.get(props, 'projects[0].firstImage', '')} />
            <img className="project-image" src={_.get(props, 'projects[0].secondImage', '')} />
          </div>
          <div className="project-info-container">
            <h1>{_.get(props, 'projects[0].title', '')}</h1>
            <a href={_.get(props, 'projects[0].link', '')}><i className="fa fa-link" aria-hidden="true" /></a>
            <a href={_.get(props, 'projects[0].github', '')}>{_.get(props, 'projects[0].github', '')}</a>
            <h3>{_.get(props, 'projects[0].details', '')}</h3>
            <p>{_.get(props, 'projects[0].description', '')}</p>
          </div>

        </div>
      </div>
    </div>
  )
}


