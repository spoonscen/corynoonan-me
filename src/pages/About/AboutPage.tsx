import * as React from 'react'
import { Navigation } from '../../components/Navigation'
import { AboutPageProps } from './AboutPageTypes'
import * as _ from 'lodash'


export function AboutPage(props: AboutPageProps): JSX.Element {
  const navigationProps = {
    pathname: props.location.pathname
  }

  const email: string = _.get(props, 'about.email', '')
  const interests: string[] = _.get(props, 'about.interests', [])
  const technicalRolls: string[] = _.get(props, 'about.technicalRolls', [])
  const strongLanguages: string[] = _.get(props, 'about.technicalSkills.languages.strong', [])
  const mediumLanguages: string[] = _.get(props, 'about.technicalSkills.languages.medium', [])
  const weakLanguages: string[] = _.get(props, 'about.technicalSkills.languages.weak', [])
  const frameWorks: string[] = _.get(props, 'about.technicalSkills.frameWorks', [])
  const otherTechnologies: string[] = _.get(props, 'about.technicalSkills.otherTechnologies', [])

  // console.log(props)

  return (
    <div className="about-page-container">
      <Navigation {...navigationProps} />
      <div className="about-content">
        <div className="about-header-container">
          <h1 className="about-header">About Me</h1>
          <h4 className="about-details-email">{email}</h4>
        </div>
        <div className="about-details-container">
          <div className="about-details-technical-rolls">
            <ul>
             {_.map(technicalRolls, (roll: string) => <li key={roll}>{roll}</li> )}
            </ul>
          </div>
          <div className="about-details-technical-skills">
            <div className="about-details-technical-skills-languages">
              <ul>
                {_.map(strongLanguages, (language: string) => <li key={language}>{language}</li> )}
              </ul>
              <ul>
                {_.map(mediumLanguages, (language: string) => <li key={language}>{language}</li> )}
              </ul>
              <ul>
                {_.map(weakLanguages, (language: string) => <li key={language}>{language}</li> )}
              </ul>
            </div>
            <div className="about-details-technical-skills-frameworks">
              <ul>
                {_.map(frameWorks, (framework: string) => <li key={framework}>{framework}</li> )}
              </ul>
            </div>
            <div className="about-details-technical-skills-other-technologies">
              <ul>
                {_.map(otherTechnologies, (otherTech: string) => <li key={otherTech}>{otherTech}</li> )}
              </ul>
            </div>
            <div className="about-details-interests">
              <ul>
                {_.map(interests, (interest: string) => <li key={interest}>{interest}</li> )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
