import React = require('react')
import * as enzyme from 'enzyme'
import { expect } from 'chai'
import { AboutPage } from './AboutPage'
import { AboutPageProps } from './AboutPageTypes'
import * as sinon from 'sinon'
const CopyToClipboard: any = require('react-copy-to-clipboard')
const ReactTooltip: any = require('react-tooltip')

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
        languages: ['some language'],
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
    expect(wrapper.find('.about-details-technical-rolls')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-skills-languages')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-skills-frameworks')).to.have.length(1)
    expect(wrapper.find('.about-details-technical-skills-other-technologies')).to.have.length(1)
    expect(wrapper.find('.about-details-interests')).to.have.length(1)
  })

  it('renders the contact info', () => {
    expect(wrapper.find(CopyToClipboard)).to.have.length(1)
    expect(wrapper.find(CopyToClipboard).prop('text')).to.equal(mockAboutPageProps.about.email)
    expect(wrapper.find(ReactTooltip)).to.have.length(1)
    expect(wrapper.find('.about-link')).to.have.length(3)
    expect(wrapper.find('.github')).to.have.length(1)
    expect(wrapper.find('.linkedin')).to.have.length(1)
  })
})
