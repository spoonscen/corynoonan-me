import * as React from 'react'
import { Navigation } from '../../components/Navigation'
import { AboutPageProps } from './AboutPageTypes'



export function AboutPage(props: AboutPageProps): JSX.Element {
  const navigationProps = {
    pathname: props.location.pathname
  }

  return (
    <div className="about-page-container">
      <Navigation {...navigationProps} />
    </div>
  )
}

