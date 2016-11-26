import * as React from 'react'
import { Navigation } from '../components/Navigation'


export interface AboutPageProps {
  location: {
    pathname: string
  }
}

export function AboutPage(props: AboutPageProps): JSX.Element {
  const navigationProps = {
    pathname: props.location.pathname
  }

  return (
    <div className="resume-page-container">
      <Navigation {...navigationProps} />
    </div>
  )
}

