const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3000/api'
const BACKEND_URL = API_URL.replace(/\/api$/, '')

export async function payloadGet(endpoint: string) {
  const res = await fetch(`${API_URL}/${endpoint}`, { cache: 'no-store' })
  if (!res.ok) throw new Error(`Payload API error: ${res.status}`)
  return res.json()
}

export async function payloadFind(collection: string, query?: Record<string, string>) {
  const params = new URLSearchParams(query)
  return payloadGet(`${collection}?${params.toString()}`)
}

export async function payloadFindGlobal(slug: string) {
  return payloadGet(`globals/${slug}`)
}

export function mediaUrl(url: string | null | undefined): string {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${BACKEND_URL}${url}`
}
