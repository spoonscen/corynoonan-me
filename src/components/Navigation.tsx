import * as React from "react";
import { Link, browserHistory } from 'react-router'

export interface NavigationProps {
  children?: any[]
  classNames: {
    container: string
    headerContainer: string
    navigation: string
    bar: string
  }
  pathname: string
}

export function Navigation(props: NavigationProps): JSX.Element {
  const { pathname, classNames } = props
  const { container, headerContainer, navigation, bar } = classNames

  const maybeHeaderLink = (pathname: string): JSX.Element => (
    pathname === '/'
      ? <h1>cory noonan</h1>
      : <h1 style={{cursor: 'pointer'}} onClick={() => window.location.hash = '#/'}>cory noonan</h1>)

  return (
    <div className={container}>
      <div className={headerContainer}>
      { maybeHeaderLink(pathname) }
      </div>
      <div className={navigation}>
        <Link className={pathname === '/projects' ? 'active' : null} to="projects">projects</Link>
        <div className={bar} />
        <Link className={pathname === '/blog' ? 'active' : null} to="blog">blog</Link>
        <div className={bar} />
        <Link className={pathname === '/resume' ? 'active' : null} to="resume">resume</Link>
        { props.children }
      </div>
    </div>
  )
}


