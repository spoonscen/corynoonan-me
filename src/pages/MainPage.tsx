import * as React from 'react'
import { Navigation } from '../components/Navigation'

interface MainPageProps {
  children: JSX.Element[]
  location: {
    pathname: string
  }
}

export function MainPage(props: MainPageProps): JSX.Element {
  const { children, location } = props
  const { pathname } = location
  const navigationProps = { children, pathname }

  return (
    <div className="main-page-container">
      <Navigation {...navigationProps} />
    </div>
  )
}


