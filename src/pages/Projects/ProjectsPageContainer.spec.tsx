import React = require('react')
import ProjectsPageContainer from './ProjectsPageContainer'
import * as enzyme from 'enzyme'
import { ProjectProps } from './ProjectPageTypes'
import { expect } from 'chai'
import { ProjectsPage } from './ProjectsPage'
import apiCalls = require('../../api-interactions')
import * as sinon from 'sinon'
import * as Promise from 'bluebird'


describe('<ProjectsPageContainer />', () => {
  let wrapper: enzyme.CommonWrapper<any, any>
  let sandbox: sinon.SinonSandbox

  const projectsPageProps = {
    children: [{}],
    location: {
      pathname: 'foobar'
    },
    projects: [{}] as ProjectProps[],
  }

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    wrapper = enzyme.mount(<ProjectsPageContainer {...projectsPageProps} />)

  })

  afterEach(() => sandbox.restore())

  it('mounts', () => {
    expect(wrapper).to.be.ok
  })

  it('has the dumb ProjectsPage component', () => {
    expect(wrapper.find(ProjectsPage)).to.have.length(1)
  })

  it('gets projects from the API', () => {
    const getProjectsStub: sinon.SinonStub = sandbox.stub(apiCalls, 'getProjects').returns(Promise.resolve({data: { projects: [] }}))
    wrapper = enzyme.mount(<ProjectsPageContainer {...projectsPageProps} />)
    expect(getProjectsStub.callCount).to.equal(1)
  })
})
