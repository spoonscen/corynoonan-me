import { expect } from 'chai'
import * as React from 'react'
import * as enzyme from 'enzyme'
import { Navigation, NavigationProps, onHeaderClick } from './Navigation'
import { ProjectsPage } from '../pages/Projects/ProjectsPage'
import { Link } from 'react-router'
import * as _ from 'lodash'

describe('Navigation Component', () => {

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
    const priorWindow = _.get(global, 'window')
    const mockWindow = {
      location: {
        hash: '#/projects'
      }
    }

    beforeEach(() => _.set(global, 'window', mockWindow))
    afterEach(() => _.set(global, 'window', priorWindow))
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
      expect(links.find({to: 'about'}).html()).to.equal('<a>about</a>')

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

      wrapper = setup(_.set(props, 'pathname', '/about') as NavigationProps)
      links = wrapper.find(Link)
      expect(links.find({to: 'about'}).html()).to.equal('<a class="active">about</a>')
      expect(links.find({to: 'projects'}).html()).to.equal('<a>projects</a>')
    })

    it('send the user to the homepage on click of the header', () => {
      wrapper = setup(_.set(props, 'pathname', '/projects') as NavigationProps)
      expect(_.get(global, 'window.location.hash')).to.equal('#/projects')
      wrapper.find('.header-link').simulate('click')
      expect(_.get(global, 'window.location.hash')).to.equal('#/')
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
