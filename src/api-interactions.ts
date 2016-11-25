import * as _ from 'lodash'
import * as requestQ from 'request-promise'


module projects {
  export function getProjects(location: string) {
    return requestQ(`${location}/api/projects`, { method: 'GET', json: true })
  }

}
export = projects