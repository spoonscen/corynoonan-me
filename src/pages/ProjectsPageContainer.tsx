import React = require('react')
import * as Promise from 'bluebird'
import apiCalls = require('../api-interactions')
import * as _ from 'lodash'
import { ProjectsPage, ProjectsPageProps, Project } from './ProjectsPage'

interface ProjectPageContainerProps extends ProjectsPageProps {
}

interface ProjectPageContainerState {
  projects?: Project[]
  err?: Error
}

interface ApiResponse {
  data: {
    projects: Project[]
  }
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
      .then((response: ApiResponse) => {
        this.setState({ projects: response.data.projects })
      })
      .catch((err: Error) => this.setState({ err }))
  }

  render(): JSX.Element {
    const { props } = this
    const newProps = _.extend(this.state, props)
    return <ProjectsPage {...newProps} />
  }

}
