import * as React from 'react'
import { Navigation } from '../../components/Navigation'
import { AboutPageProps } from './AboutPageTypes'
import * as _ from 'lodash'
const CopyToClipboard: any = require('react-copy-to-clipboard')
const ReactTooltip: any = require('react-tooltip')

export function AboutPage(props: AboutPageProps): JSX.Element {
  const navigationProps = {
    pathname: props.location.pathname
  }

  const email: string = _.get(props, 'about.email', '')
  const interests: string[] = _.get(props, 'about.interests', [])
  const technicalRoles: string[] = _.get(props, 'about.technicalRoles', [])
  const languages: string[] = _.get(props, 'about.technicalSkills.languages', [])
  const frameWorks: string[] = _.get(props, 'about.technicalSkills.frameWorks', [])
  const otherTechnologies: string[] = _.get(props, 'about.technicalSkills.otherTechnologies', [])

  return (
    <div className="about-page-container">
      <Navigation {...navigationProps} />
      <div className="about-content">
        <div className="about-header-container">
          <h1 className="about-header">Full Stack Engineer</h1>
          <CopyToClipboard text={email}>
            <h3 className="about-details-email">
              <span data-tip="Click to copy to the clipboard!">{email}</span>
            </h3>
          </CopyToClipboard>
          <ReactTooltip effect="solid" place="right" offset={{top: -10, right: 260}} />
        </div>

        <div className="about-details-container">

          <div className="about-details-technical-rolls">
            <h3 className="details-title">Roles</h3>
            <span className="details">{_.join(technicalRoles, ', ')}</span>
          </div>

            <div className="about-details-technical-skills-languages">
              <h3 className="details-title">Languages</h3>
              <span className="details">{_.join(languages, ', ')}</span>
            </div>

            <div className="about-details-technical-skills-frameworks">
              <h3 className="details-title">Frameworks</h3>
              <span className="details">{_.join(frameWorks, ', ')}</span>
            </div>

            <div className="about-details-technical-skills-other-technologies">
              <h3 className="details-title">Tools</h3>
              <span className="details">{_.join(otherTechnologies, ', ')}</span>
            </div>

            <div className="about-details-interests">
              <h3 className="details-title">Interests</h3>
              <span className="details">{_.join(interests, ', ')}</span>
            </div>

        </div>

      </div>
    </div>
  )
}
