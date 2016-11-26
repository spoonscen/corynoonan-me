import * as _ from 'lodash'
import * as requestQ from 'request-promise'


module apiCalls {
  export function getProjects(location: string) {
    return requestQ(`${location}/api/projects`, { method: 'GET', json: true })
  }
}

export = apiCalls