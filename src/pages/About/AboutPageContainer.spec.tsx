import React = require('react')
import AboutPageContainer from './AboutPageContainer'
import * as enzyme from 'enzyme'
import { expect } from 'chai'
import { AboutPage } from './AboutPage'
import apiInteractions from '../../apiInteractions'

import * as sinon from 'sinon'
import * as Promise from 'bluebird'


describe('<AboutPageContainer />', () => {
  let wrapper: enzyme.CommonWrapper<any, any>
  let sandbox: sinon.SinonSandbox

  const aboutPageProps = {
    children: [{}],
    location: {
      pathname: 'foobar'
    },
  }

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    wrapper = enzyme.mount(<AboutPageContainer {...aboutPageProps} />)

  })

  afterEach(() => sandbox.restore())

  it('mounts', () => {
    expect(wrapper).to.be.ok
  })

  it('has the dumb AboutPage component', () => {
    expect(wrapper.find(AboutPage)).to.have.length(1)
  })

  it('gets About data from the API', () => {
    const getAboutStub: sinon.SinonStub = sandbox.stub(apiInteractions, 'getAbout').returns(Promise.resolve({data: { about: 'foo' }}))
    wrapper = enzyme.mount(<AboutPageContainer {...aboutPageProps} />)
    expect(getAboutStub.callCount).to.equal(1)
  })
})
