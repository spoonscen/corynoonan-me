import * as React from 'react'
import { ProjectProps } from './ProjectPageTypes'
import * as _ from 'lodash'

export default function Project(props: ProjectProps): JSX.Element {
  const { title, link, github, details, description, imageLinks } = props



  return (
    <div className="project">
      <div className="project-image-container">
        {_.map(imageLinks, (link: string) => <img key={link} className="project-image" src={link || ''} /> )}
      </div>
      <div className="project-info-container">
        <h1 className="project-title">{title || ''}</h1>
        <div className="project-link-container">
          <a className="project-link" href={github || ''}>
            <i className="fa fa-github" aria-hidden="true" />
          </a>
          <a className="project-link" href={link || ''}>
            <i className="fa fa-link" aria-hidden="true" />
          </a>
        </div>
        <h3 className="project-details">{details || ''}</h3>
        <p className="project-description">{description || ''}</p>
      </div>
    </div>
  )
}


