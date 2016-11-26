import * as React from 'react'
import { Link } from 'react-router'
import * as _ from 'lodash'

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

export const maybeHeaderLink = (pathname: string, hash: string, window: Window): JSX.Element => {
  const onClick = (window: Window) => () => _.set(window.location, 'hash', hash)
  return  pathname === '/'
      ? <h1>cory noonan</h1>
      : <h1 className="header-link" onClick={onClick(window)}>cory noonan</h1>
}

export function Navigation(props: NavigationProps): JSX.Element {
  const classNames = {
      container: 'navigation-container',
      headerContainer: 'full-name-header-container',
      navigation: 'navigation',
      bar: 'bar',
    }
  const { pathname } = props
  const { container, headerContainer, navigation, bar } = classNames

  return (
    <div className={container}>
      <div className={headerContainer}>
      {maybeHeaderLink(pathname, '#/', window)}
      </div>
      <div className={navigation}>
        <Link className={pathname === '/projects' ? 'active' : null} to="projects">projects</Link>
        <div className={bar} />
        <Link className={pathname === '/blog' ? 'active' : null} to="blog">blog</Link>
        <div className={bar} />
        <Link className={pathname === '/resume' ? 'active' : null} to="about">about</Link>
        {props.children}
      </div>
    </div>
  )
}


