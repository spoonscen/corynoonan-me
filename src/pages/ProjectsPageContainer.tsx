import React = require('react')
import * as Promise from 'bluebird'
import apiCalls = require('../api-interactions')
import * as _ from 'lodash'
import { ProjectsPage, ProjectsPageProps } from './ProjectsPage'

interface ProjectPageContainerProps extends ProjectsPageProps {
}

interface Project {
  title: string
  details: string
  description: string
  firstImage: string
  secondImage: string
}

interface ProjectPageContainerState {
  projects?: Project[]
  err?: Error
}

export default class ProjectPageContainer extends React.Component<ProjectPageContainerProps, ProjectPageContainerState> {
  constructor(props: ProjectPageContainerProps) {
    super(props)

    this.state = {
      projects: null,
      err: null
    }
  }
  componentDidMount(): Promise<void> {
    const location = _.get(window, 'location.origin') as string
    return apiCalls.getProjects(location)
      .then((projects: Project[]) => this.setState({ projects }))
      .catch((err: Error) => this.setState({ err }))

  }
  render(): JSX.Element {
    const { props } = this
    return <ProjectsPage {...props }/>
  }

}
