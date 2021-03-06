import * as React from 'react'
import * as Promise from 'bluebird'
import apiInteractions from '../../apiInteractions/apiInteractions'
import * as _ from 'lodash'
import { AboutPage } from './AboutPage'
import { ApiResponse, AboutPageContainerState, AboutPageProps } from './AboutPageTypes'


export default class AboutPageContainer extends React.Component<AboutPageProps, AboutPageContainerState> {
  constructor(props: AboutPageProps) {
    super(props)

    this.state = {
      about: null,
      err: null
    }
  }

  componentDidMount(): Promise<void> {
    const location = _.get(window, 'location.origin') as string

    return apiInteractions.getAbout(location)
      .then((response: ApiResponse) => {
        this.setState({ about: response.data.about })
      })
      .catch((err: Error) => this.setState({ err }))
  }

  render(): JSX.Element {
    const { props } = this
    const aboutPageProps = _.extend(this.state, props)
    return <AboutPage {...aboutPageProps} />
  }

}
