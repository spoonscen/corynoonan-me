import * as React from "react";
import { Link } from 'react-router'

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
  const activeTab = props.pathname
  const {container, headerContainer, navigation, bar} = props.classNames
  return (
    <div className={container}>
      <div className={headerContainer}>
        <h1>cory noonan</h1>
      </div>
      <div className={navigation}>
        <Link className={activeTab === '/projects' ? 'active' : null} to="projects">projects</Link>
        <div className={bar} />
        <Link className={activeTab === '/blog' ? 'active' : null} to="blog">blog</Link>
        <div className={bar} />
        <Link className={activeTab === '/resume' ? 'active' : null} to="resume">resume</Link>
        { props.children }
      </div>
    </div>
  )
}


