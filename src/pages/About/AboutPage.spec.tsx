import React = require('react')
import * as enzyme from 'enzyme'
import { expect } from 'chai'
import { AboutPage } from './AboutPage'
import { AboutPageProps } from './AboutPageTypes'
import * as sinon from 'sinon'


describe('<AboutPage />', () => {
  let wrapper: enzyme.CommonWrapper<any, any>
  let sandbox: sinon.SinonSandbox

  const mockAboutPageProps: AboutPageProps = {
    children: [{} as JSX.Element],
    location: {
      pathname: 'foobar'
    },
    about: {
      email: 'someemail@email.com',
      technicalRoles: ['foo'],
      technicalSkills: {
        languages: ['some less used language'],
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
    expect(wrapper.find('.about-details-technical-skills-languages')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-skills-frameworks')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-skills-other-technologies')).to.have.length(1)
    expect(wrapper.find('.about-details-interests')).to.have.length(1)
  })

  const { email } = mockAboutPageProps.about
  it('renders the email', () =>
    expect(wrapper.find('.about-details-email').text()).to.equal(email))

})
