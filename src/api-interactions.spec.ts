import * as _ from 'lodash'
import nock = require('nock')
import { expect } from 'chai'
const apiCalls = require('./api-interactions')


const location = 'http://corynoonan.me'

describe('apiCalls module', () => {

  it('getProjects fetches projects from the API', () => {
    const nocks = nock(location)
      .get(`/api/projects`)
      .reply(200)

    return apiCalls.getProjects(location)
      .then(() => expect(_.isEmpty(nocks.pendingMocks())).to.be.true )
  })
})