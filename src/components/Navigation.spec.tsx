import { expect } from 'chai'
import * as React from "react";
import * as enzyme from 'enzyme'
import { Navigation, NavigationProps } from './Navigation'
import { ProjectsPage } from '../pages/ProjectsPage'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import * as _ from 'lodash'

describe('<Navigation />', () => {
  let wrapper: enzyme.ShallowWrapper<any, any>
  const props = {
    children: [
      ProjectsPage
    ],
    classNames: {
      container: 'navigation-container',
      headerContainer: 'full-name-header-container',
      navigation: 'navigation',
      bar: 'bar',
    },
    pathname: ''
  }
  const setup = (props: NavigationProps) => {
    return enzyme.shallow(<Navigation {...props} />)
  }

  beforeEach(() =>
    wrapper = setup(props)
  )

  it('has a header and links to the pages', () => {
    expect(wrapper.find('.navigation-container')).to.have.length(1)
    expect(wrapper.find('.full-name-header-container')).to.have.length(1)
    expect(wrapper.find('.full-name-header-container').text()).to.equal('cory noonan')
    expect(wrapper.find('.navigation')).to.have.length(1)
    expect(wrapper.find('.bar')).to.have.length(2)
    expect(wrapper.find(Link)).to.have.length(3)

    const links = wrapper.find(Link)
    expect(links.find({to: 'projects'}).html()).to.equal('<a>projects</a>')
    expect(links.find({to: 'blog'}).html()).to.equal('<a>blog</a>')
    expect(links.find({to: 'resume'}).html()).to.equal('<a>resume</a>')

  })

  it('sets the active tab to active', () => {
    wrapper = setup(_.set(props, 'pathname', '/projects') as NavigationProps)
    let links = wrapper.find(Link)
    expect(links.find({to: 'blog'}).html()).to.equal('<a>blog</a>')
    expect(links.find({to: 'projects'}).html()).to.equal('<a class="active">projects</a>')

    wrapper = setup(_.set(props, 'pathname', '/blog') as NavigationProps)
    links = wrapper.find(Link)
    expect(links.find({to: 'blog'}).html()).to.equal('<a class="active">blog</a>')
    expect(links.find({to: 'projects'}).html()).to.equal('<a>projects</a>')
  })

})