import * as React from "react";
import { Link } from 'react-router'

interface MainPageProps {
  children: JSX.Element[]
}

export function MainPage(props: MainPageProps) {
  return (
    <div>
      <div className="page-title">
        <h1>cory noonan</h1>
      </div>
      <div className="navigation">
        <Link to="projects">projects</Link>
        <div className="bar" />
        <Link to="blog">blog</Link>
        <div className="bar" />
        <Link to="resume">resume</Link>
        {props.children}
      </div>
    </div>
  )
}


