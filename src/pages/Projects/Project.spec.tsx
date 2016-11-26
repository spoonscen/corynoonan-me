import React = require('react')
import Project from './Project'
import * as enzyme from 'enzyme'
import { ProjectProps } from './ProjectPageTypes'
import { expect } from 'chai'

describe('<Project />', () => {
  let wrapper: enzyme.ShallowWrapper<any, any>

  const MockProjectsProps = {
    title: 'mock title',
    details: 'mock details',
    link: 'mock link',
    github: 'mock github',
    description: 'mock\ndescription',
    imageLinks: [
      'mockFirstImage.com',
      'mockSecondImage.com',
    ]
  } as ProjectProps

  beforeEach(() => {
    wrapper = enzyme.shallow(<Project {...MockProjectsProps} />)
  })

  it('has the project info', () => {
    expect(wrapper.find('.project')).to.have.length(1)
    expect(wrapper.find('.project-image-container')).to.have.length(1)
    expect(wrapper.find('.project-image')).to.have.length(2)
    expect(wrapper.find('.project-image').first().html()).to.equal(`<img class="project-image" src="mockFirstImage.com"/>`)
    expect(wrapper.find('.project-info-container')).to.have.length(1)
    expect(wrapper.find('.project-title').text()).to.equal(MockProjectsProps.title)
    expect(wrapper.find('.fa.fa-link')).to.have.length(1)
    expect(wrapper.find('.fa.fa-github')).to.have.length(1)
  })

  it('splits the project description', () => {
    expect(wrapper.find('.project-details').text()).to.equal(MockProjectsProps.details)
    expect(wrapper.find('.project-description')).to.have.length(1)
    expect(wrapper.find('.project-description-paragraph')).to.have.length(2)
    expect(wrapper.find('.project-description-paragraph').first().text()).to.equal('mock')
  })

})