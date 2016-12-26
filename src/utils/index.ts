module utils {
  export function getLink(partialUrl: string, origin: string): string {
    return partialUrl ? `http://${origin}/public${partialUrl}` : ''
  }
}

export default utils
