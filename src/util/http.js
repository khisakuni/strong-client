import $ from 'jquery'

const formatRequest = (url, { method, body } = { body: {} }) => {
  const params = {
    method: method,
    headers: {
      'Origin': 'http://localhost:8080',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  }
  return new Request(url, params)
}

const methods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

const handleResponse = (res) => {
  return res.json().then((json) => {
    if (!res.ok) {
      const err = { status: res.status, body: json }
      throw err
    }
    return json
  })
}

export const get = (url, { params } = {}) => {
  const query = params ? `?${$.param(params)}` : ''
  const req = formatRequest(`${url}${query}`, { method: methods.GET })
  return fetch(req).then(handleResponse)
}

export const post = (url, { body } = {}) => {
  const req = formatRequest(url, { method: methods.POST, body })
  return fetch(req).then(handleResponse)
}

export const put = (url, { body }) => {
  const req = formatRequest(url, { method: methods.PUT, body })
  return fetch(req).then(handleResponse)
}

export const destroy = (url) => {
  const req = formatRequest(url, { method: methods.DELETE })
  return fetch(req).then(handleResponse)
}

export default {
  get: get,
  post: post,
  put: put,
  destroy: destroy
}
