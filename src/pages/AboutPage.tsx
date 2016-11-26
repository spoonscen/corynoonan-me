import * as React from 'react'
import { Navigation } from '../components/Navigation'


export interface AboutPageProps {
  location: {
    pathname: string
  }
}

export function AboutPage(props: AboutPageProps): JSX.Element {
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
    <div className="resume-page-container">
      <Navigation {...navigationProps} />
    </div>
  )
}

