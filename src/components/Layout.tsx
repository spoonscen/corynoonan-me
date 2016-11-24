import * as React from "react";
import { Link } from 'react-router'

export interface LayoutProps {
}

export class Layout extends React.Component<LayoutProps, {}> {
  render() {
    return (
      <div>
        <Link to="main">main</Link>
        <Link to="projects">projects</Link>
        <Link to="blog">blog</Link>
        <Link to="resume">resume</Link>
        {this.props.children}
      </div>
    )
  }
}


