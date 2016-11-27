import React = require('react')
import AboutPageContainer from './AboutPageContainer'
import * as enzyme from 'enzyme'
import { expect } from 'chai'
import { AboutPage } from './AboutPage'
import { AboutPageProps } from './AboutPageTypes'
import apiInteractions from '../../apiInteractions/apiInteractions'

import * as sinon from 'sinon'
import * as Promise from 'bluebird'


describe('<AboutPageContainer />', () => {
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

  } as AboutPageProps

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    wrapper = enzyme.mount(<AboutPageContainer {...mockAboutPageProps} />)

  })

  afterEach(() => sandbox.restore())

  it('mounts', () => {
    expect(wrapper).to.be.ok
  })

  it('has the dumb AboutPage component', () => {
    expect(wrapper.find(AboutPage)).to.have.length(1)
  })

  it('gets About data from the API', () => {
    const getAboutStub: sinon.SinonStub = sandbox.stub(apiInteractions, 'getAbout').returns(Promise.resolve({data: { about: {} }}))
    wrapper = enzyme.mount(<AboutPageContainer {...mockAboutPageProps} />)
    expect(getAboutStub.callCount).to.equal(1)
  })
})
