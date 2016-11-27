import * as _ from 'lodash'
import nock = require('nock')
import { expect } from 'chai'
import apiInteractions from './apiInteractions'

const location = 'http://corynoonan.me'

describe('apiInteractions module', () => {

  it('getProjects fetches projects data from the API', () => {
    const nocks: nock.Scope = nock(location)
      .get(`/api/projects`)
      .reply(200)

    return apiInteractions.getProjects(location)
      .then(() => expect(_.isEmpty(nocks.pendingMocks())).to.be.true )
  })

  it('getAbout fetches the about data from the API', () => {
    const nocks: nock.Scope = nock(location)
      .get(`/api/about`)
      .reply(200)

    return apiInteractions.getAbout(location)
      .then(() => expect(_.isEmpty(nocks.pendingMocks())).to.be.true )
  })

  it('getBlog fetches the blog data from the API', () => {
    const nocks: nock.Scope = nock(location)
      .get(`/api/blog`)
      .reply(200)

    return apiInteractions.getBlog(location)
      .then(() => expect(_.isEmpty(nocks.pendingMocks())).to.be.true )
  })
})
