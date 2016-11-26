import * as React from "react";
import { Link } from 'react-router'

export interface AppProps {
  children: JSX.Element[]
}

export function App(props: AppProps): JSX.Element {
    return (
      <div>
        <Link to="main" />
        <Link to="projects" />
        <Link to="blog" />
        <Link to="about" />
        {props.children}
      </div>
    )
}


