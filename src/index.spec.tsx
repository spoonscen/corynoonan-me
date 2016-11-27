import { expect } from 'chai'
import * as enzyme from 'enzyme'
import { IndexPage } from './index'
import { Router, Route } from 'react-router'


describe('index.tsx', () => {
  let wrapper: enzyme.ShallowWrapper<any, any>
  beforeEach(() =>
    wrapper = enzyme.shallow(IndexPage)
  )

  it('has a router and routes', () => {
    expect(wrapper.find(Router)).to.have.length(1)
    expect(wrapper.find(Route)).to.have.length(4)
  })

})
