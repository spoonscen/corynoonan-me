import * as React from "react";
import { Link } from 'react-router'
import { Navigation } from '../components/Navigation'

interface MainPageProps {
  children: JSX.Element[]
  location: {
    pathname: string
  }
}

export function MainPage(props: MainPageProps): JSX.Element {
  const navigationProps = {
    children: props.children,
    pathname: props.location.pathname
  }
  return (
    <div className="main-page-container">
      <Navigation {...navigationProps} />
    </div>
  )
}


