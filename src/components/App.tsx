import * as React from "react";
import { Link } from 'react-router'

export interface AppProps {
  children: JSX.Element[]
}

export function App(props: AppProps) {
    return (
      <div>
        <Link to="main"></Link>
        <Link to="projects"></Link>
        <Link to="blog"></Link>
        <Link to="about"></Link>
        {props.children}
      </div>
    )
}


