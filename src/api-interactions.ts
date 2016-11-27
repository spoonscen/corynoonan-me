import * as requestQ from 'request-promise'

module apiCalls {
  export function getProjects(location: string): requestQ.RequestPromise {
    return requestQ(`${location}/api/projects`, { method: 'GET', json: true })
  }
}

export = apiCalls
