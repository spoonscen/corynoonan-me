import { expect } from 'chai'
import * as React from 'react'
import * as enzyme from 'enzyme'
import { Navigation, NavigationProps } from './Navigation'
import { ProjectsPage } from '../pages/Projects/ProjectsPage'
import { Link } from 'react-router'
import * as _ from 'lodash'

describe('Navigation.tsx', () => {

  let wrapper: enzyme.ShallowWrapper<any, any>
  const props = {
    children: [
      ProjectsPage
    ],
    pathname: ''
  }
  const setup = (props: NavigationProps) => {
    return enzyme.shallow(<Navigation {...props} />)
  }

  describe('<Navigation />', () => {

    beforeEach(() => wrapper = setup(props))

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

  describe('maybeHeaderLink', () => {
    it('it has no link if the path is the homepage', () => {
      wrapper = setup(_.set(props, 'pathname', '/projects') as NavigationProps)
      expect(wrapper.find('h1')).to.have.length(1)
      expect(wrapper.find('.header-link')).to.have.length(1)
    })
    it('it has a link if the path is not the home page', () => {
      wrapper = setup(_.set(props, 'pathname', '/') as NavigationProps)
      expect(wrapper.find('h1')).to.have.length(1)
      expect(wrapper.find('.header-link')).to.have.length(0)
    })
  })

})
