import { expect } from 'chai'
import utils from './index'
import { set } from 'lodash'


describe('utils', () => {
  let priorWindow: any = window
  before(() => window = { location: { origin: 'http://corynoonan.me'}} as Window )
  after(() => window = priorWindow)

  it('gets the whole url for static content given a partial url', () => {
    expect(utils.getStaticContentUrl('/images/projects/corynoonan-me.png', window.location.origin))
      .to.equal('http://corynoonan.me/public/images/projects/corynoonan-me.png')
    expect(utils.getStaticContentUrl('/images/projects/spoonsaunce.png', window.location.origin))
      .to.equal('http://corynoonan.me/public/images/projects/spoonsaunce.png')
  })
})

