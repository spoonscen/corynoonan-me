import React = require('react')
import BlogPageContainer from './BlogPageContainer'
import * as enzyme from 'enzyme'
import { expect } from 'chai'
import { BlogPage } from './BlogPage'
import apiInteractions from '../../apiInteractions/apiInteractions'

import * as sinon from 'sinon'
import * as Promise from 'bluebird'


describe('<BlogPageContainer />', () => {
  let wrapper: enzyme.CommonWrapper<any, any>
  let sandbox: sinon.SinonSandbox

  const blogPageProps = {
    children: [{}],
    location: {
      pathname: 'foobar'
    },
    posts: [{}],
  }

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    wrapper = enzyme.mount(<BlogPageContainer {...blogPageProps} />)

  })

  afterEach(() => sandbox.restore())

  it('mounts', () => {
    expect(wrapper).to.be.ok
  })

  it('has the dumb BlogPage component', () => {
    expect(wrapper.find(BlogPage)).to.have.length(1)
  })

  it('gets blog posts from the API', () => {
    const getBlogStub: sinon.SinonStub = sandbox.stub(apiInteractions, 'getBlog').returns(Promise.resolve({data: { projects: [] }}))
    wrapper = enzyme.mount(<BlogPageContainer {...blogPageProps} />)
    expect(getBlogStub.callCount).to.equal(1)
  })
})
