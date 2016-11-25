import * as React from "react";
import { Navigation } from '../components/Navigation'


export interface ResumePageProps {
  location: {
    pathname: string
  }
}

export function ResumePage(props: ResumePageProps){
  const navigationProps = {
    classNames: {
      container: 'navigation-container',
      headerContainer: 'full-name-header-container',
      navigation: 'navigation',
      bar: 'bar',
    },
    pathname: props.location.pathname
  }

  return (
    <div className="resume-page-container">
      <Navigation { ...navigationProps} />
    </div>
  )
}

