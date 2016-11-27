import React = require('react')
import * as enzyme from 'enzyme'
import { expect } from 'chai'
import { AboutPage } from './AboutPage'
import { AboutPageProps } from './AboutPageTypes'

import * as sinon from 'sinon'
import * as Promise from 'bluebird'


describe('<AboutPage />', () => {
  let wrapper: enzyme.CommonWrapper<any, any>
  let sandbox: sinon.SinonSandbox

  const mockAboutPageProps = {
    children: [{}],
    location: {
      pathname: 'foobar'
    },
    about: {
      email: 'someemail@email.com',
      technicalRolls: ['foo'],
      technicalSkills: {
        languages: {
          strong: ['some language'],
          medium: ['some other language'],
          weak: ['some less used language'],
        },
        frameWorks: ['javascript stuff'],
        otherTechnologies: ['some software']
      },
      interests: ['hobbies']
    }
  }

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    wrapper = enzyme.mount(<AboutPage {...mockAboutPageProps} />)

  })

  afterEach(() => sandbox.restore())

  it('has the page content', () => {
    expect(wrapper.find('.about-header-container')).to.have.length(1)
    expect(wrapper.find('.about-header')).to.have.length(1)
    expect(wrapper.find('.about-details-container')).to.have.length(1)
    expect(wrapper.find('.about-details-email')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-rolls')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-skills')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-skills-languages')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-skills-frameworks')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-skills-other-technologies')).to.have.length(1)
    expect(wrapper.find('.about-details-interests')).to.have.length(1)
  })

  const { email, technicalRolls, technicalSkills, interests } = mockAboutPageProps.about
  const { languages, frameWorks, otherTechnologies } = technicalSkills
  it('renders the email', () =>
    expect(wrapper.find('.about-details-email').text()).to.equal(email))

  it('renders the technical rolls in a list', () =>
    expect(wrapper.find('.about-details-technical-rolls').find('li').first().text()).to.equal(technicalRolls[0]))

  it('renders the technical skills languages into 3 lists', () => {
    const languageWrapper = wrapper.find('.about-details-technical-skills-languages')
    expect(languageWrapper.find('ul')).to.have.length(3)
    expect(languageWrapper.find('ul').first().text()).to.equal(languages.strong[0])
  })

  it('renders the technical skills frameworks in a list', () =>
    expect(wrapper.find('.about-details-technical-skills-frameworks').find('li').first().text()).to.equal(frameWorks[0]))

  it('renders the technical skills otherTechnologies in a list', () =>
    expect(wrapper.find('.about-details-technical-skills-other-technologies').find('li').first().text()).to.equal(otherTechnologies[0]))


  it('renders the interests in a list', () =>
    expect(wrapper.find('.about-details-interests').find('li').first().text()).to.equal(interests[0]))


})
