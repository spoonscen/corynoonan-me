module utils {
  export function getStaticContentUrl(partialUrl: string, origin: string): string {
    return `${origin}/public${partialUrl}`
  }
}

export default utils
