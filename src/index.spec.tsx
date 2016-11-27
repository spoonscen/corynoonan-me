import * as React from 'react'
import { expect } from 'chai'
import * as enzyme from 'enzyme'
import { IndexPage, RootApp, RootAppProps } from './index'
import { Router, Route, Link } from 'react-router'


describe('index', () => {
  let wrapper: enzyme.ShallowWrapper<any, any>

  it('has a router and routes', () => {
    wrapper = enzyme.shallow(IndexPage)
    expect(wrapper.find(Router)).to.have.length(1)
    expect(wrapper.find(Route)).to.have.length(4)
  })

  it('has the RootApp component', () => {
    const rootAppProps: RootAppProps = {
      children: [IndexPage]
    }
    wrapper = enzyme.shallow(<RootApp {...rootAppProps}/>)
    expect(wrapper.find('.root-app')).to.have.length(1)
    const links = wrapper.find(Link)
    expect(links).to.have.length(4)
    expect(links.find({to: 'main'})).to.have.length(1)
    expect(links.find({to: 'projects'})).to.have.length(1)
    expect(links.find({to: 'blog'})).to.have.length(1)
    expect(links.find({to: 'about'})).to.have.length(1)
  })
})
