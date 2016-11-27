import * as requestQ from 'request-promise'

module apiInteractions {
  export function getProjects(location: string): requestQ.RequestPromise {
    return requestQ(`${location}/api/projects`, { method: 'GET', json: true })
  }
  export function getAbout(location: string): requestQ.RequestPromise {
    return requestQ(`${location}/api/about`, { method: 'GET', json: true })
  }
  export function getBlog(location: string): requestQ.RequestPromise {
    return requestQ(`${location}/api/blog`, { method: 'GET', json: true })
  }
}

export default apiInteractions
