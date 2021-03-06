import 'isomorphic-unfetch' // eslint-disable-line import/no-unassigned-import

class HttpError extends Error {
  constructor(response) {
    super(response.statusText)

    this.name = 'HttpError'
    this.code = response.status
    this.url = response.url
  }
}

export async function _fetch(url) {
  const options = {
    headers: {
      Accept: 'application/json'
    },
    mode: 'cors',
    method: 'GET'
  }

  const response = await fetch(url, options)
  const contentType = response.headers.get('content-type')

  if (!response.ok) {
    throw new HttpError(response)
  }

  if (response.ok && contentType && contentType.includes('application/json')) {
    return response.json()
  }

  throw new Error('Une erreur est survenue')
}

export function _get(url) {
  return _fetch(url)
}
