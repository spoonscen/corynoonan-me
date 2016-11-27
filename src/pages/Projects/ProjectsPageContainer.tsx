import React = require('react')
import * as Promise from 'bluebird'
import apiInteractions from '../../apiInteractions/apiInteractions'
import * as _ from 'lodash'
import { ProjectsPage } from './ProjectsPage'
import { ProjectsPageProps, ProjectPageContainerState, ApiResponse } from './ProjectPageTypes'


export default class ProjectPageContainer extends React.Component<ProjectsPageProps, ProjectPageContainerState> {
  constructor(props: ProjectsPageProps) {
    super(props)

    this.state = {
      projects: null,
      err: null
    }
  }

  componentDidMount(): Promise<void> {
    const location = _.get(window, 'location.origin') as string

    return apiInteractions.getProjects(location)
      .then((response: ApiResponse) => {
        this.setState({ projects: response.data.projects })
      })
      .catch((err: Error) => this.setState({ err }))
  }

  render(): JSX.Element {
    const { props } = this
    const projectPageProps = _.extend(this.state, props)
    return <ProjectsPage {...projectPageProps} />
  }

}
