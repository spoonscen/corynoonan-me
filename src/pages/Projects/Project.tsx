import * as React from 'react'
import { ProjectProps } from './ProjectPageTypes'
import * as _ from 'lodash'
import utils from '../../utils'

export default function Project(props: ProjectProps): JSX.Element {
  const { title, link, github, details, description, imageLinks } = props
  const images = _.map(imageLinks, (imageLink: string) => (
    <a key={utils.getLink(imageLink, window.location.host)} target="_blank" href={link}>
      <img  className="project-image" src={utils.getLink(imageLink, window.location.host) || ''} />
    </a> ))
  return (
    <div className="project" key={title}>
      <div className="project-image-container">
        {images}
      </div>
      <div className="project-info-container">
        <h1 className="project-title">{title || ''}</h1>
        <div className="project-link-container">
          <a target="_blank" className="project-link githib" href={github || ''}><i className="fa fa-github" aria-hidden="true" /></a>
          {link ? <a target="_blank" className="project-link website" href={link}><i className="fa fa-link" aria-hidden="true" /></a> : null}
        </div>
        <h3 className="project-details">{details || ''}</h3>
        <div className="project-description">{(description || '').split('\n').map((text: string) => <p className="project-description-paragraph" key={text}>{text}<br /></p>)}</div>
      </div>
    </div>
  )
}


