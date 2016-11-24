import * as React from "react";
import { Link } from 'react-router'

export interface LayoutProps {
}

export class Layout extends React.Component<LayoutProps, {}> {
  render() {
    return (
      <div>
        <h1>corynoonan.me</h1>
        <Link to="main">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="blog">Blog</Link>
        <Link to="resume">Resume</Link>
        {this.props.children}
      </div>
    )
  }
}


