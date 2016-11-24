import * as React from "react";
import BackToHome from '../components/BackToHome'

export interface ProjectsPageProps {
}

export function ProjectsPage(props: ProjectsPageProps) {
  return (
    <div id="projects-page-container">
      <BackToHome />
      <h1>Projects Page</h1>
    </div>
  )
}


