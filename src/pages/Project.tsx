import * as React from 'react'
import * as _ from 'lodash'
import { ProjectProps } from './ProjectPageTypes'

export default function Project(props: ProjectProps): JSX.Element {
  const { title, link, github, details, description, firstImage, secondImage } = props

  return (
    <div className="project">
      <div className="project-image-container">
        <img className="project-image" src={firstImage || ''} />
        <img className="project-image" src={secondImage || ''} />
      </div>
      <div className="project-info-container">
        <h1 className="project-title">{title || ''}</h1>
        <a href={link || ''}>
          <i className="fa fa-link" aria-hidden="true" />
        </a>
        <a href={github || ''}>
          <i className="fa fa-github" aria-hidden="true" />
        </a>
        <h3 className="project-details">{details || ''}</h3>
        <p className="project-description">{description || ''}</p>
      </div>
    </div>
  )
}


