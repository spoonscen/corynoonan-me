import * as React from "react";
import { Link } from 'react-router'

interface NavigationProps {
  children: any[]
  classNames: {
    container: string
    headerContainer: string
    navigation: string
    bar: string
  }
}

export function Navigation(props: NavigationProps): JSX.Element {
  const {container, headerContainer, navigation, bar} = props.classNames
  return (
    <div className={container}>
      <div className={headerContainer}>
        <h1>cory noonan</h1>
      </div>
      <div className={navigation}>
        <Link to="projects">projects</Link>
        <div className={bar} />
        <Link to="blog">blog</Link>
        <div className={bar} />
        <Link to="resume">resume</Link>
        { props.children }
      </div>
    </div>
  )
}


