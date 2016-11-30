import * as React from 'react'
import * as Promise from 'bluebird'
import apiInteractions from '../../apiInteractions/apiInteractions'
import * as _ from 'lodash'
import { BlogPage } from './BlogPage'
import { ApiResponse, BlogPageContainerState, BlogPageProps } from './BlogPageTypes'


export default class BlogPageContainer extends React.Component<BlogPageProps, BlogPageContainerState> {
  constructor(props: BlogPageProps) {
    super(props)

    this.state = {
      posts: null,
      err: null
    }
  }

  componentDidMount(): Promise<void> {
    const location = _.get(window, 'location.origin') as string

    return apiInteractions.getBlog(location)
      .then((response: ApiResponse) => {
        this.setState({ posts: response.data.posts } as any)
      })
      .catch((err: Error) => this.setState({ err }))
  }

  render(): JSX.Element {
    const { props } = this
    const blogPageProps = _.extend(this.state, props)
    return <BlogPage {...blogPageProps} />
  }

}
