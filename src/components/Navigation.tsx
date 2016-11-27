import * as React from 'react'
import { Link } from 'react-router'
import * as _ from 'lodash'

export interface NavigationProps {
  children?: any[]
  pathname: string
}

export const onHeaderClick = (window: Window, hash: string) => () => _.set(window.location, 'hash', hash)

export const maybeHeaderLink = (pathname: string, hash: string, window: Window): JSX.Element => {
  return  pathname === '/'
      ? <h1>cory noonan</h1>
      : <h1 className="header-link" onClick={onHeaderClick(window, hash)}>cory noonan</h1>
}

export function Navigation(props: NavigationProps): JSX.Element {
  const { pathname } = props

  return (
    <div className="navigation-container">
      <div className={'full-name-header-container'}>
      {maybeHeaderLink(pathname, '#/', window)}
      </div>
      <div className="navigation">
        <Link className={pathname === '/projects' ? 'active' : null} to="projects">projects</Link>
        <div className="bar" />
        <Link className={pathname === '/blog' ? 'active' : null} to="blog">blog</Link>
        <div className="bar" />
        <Link className={pathname === '/about' ? 'active' : null} to="about">about</Link>
        {props.children}
      </div>
    </div>
  )
}


