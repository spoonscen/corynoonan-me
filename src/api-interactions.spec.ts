import * as _ from 'lodash'
import nock = require('nock')
import { expect } from 'chai'
const projects = require('./api-interactions')


const location = 'http://corynoonan.me'

describe('projects module', () => {

  it('fetches projects from the API', () => {
    const nocks = nock(location)
      .get(`/api/projects`)
      .reply(200)

    return projects.getProjects(location)
      .then(() => {
        expect(_.isEmpty(nocks.pendingMocks())).to.be.true
      })
  })
})