import * as React from "react";
import { Link } from 'react-router'

export interface LayoutProps {
  children: JSX.Element[]
}

export function Layout(props: LayoutProps) {
    return (
      <div>
        <Link to="main"></Link>
        <Link to="projects"></Link>
        <Link to="blog"></Link>
        <Link to="resume"></Link>
        {props.children}
      </div>
    )
}


