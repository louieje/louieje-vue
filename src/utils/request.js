'use strict'

import 'whatwg-fetch'
import 'core-js/fn/promise'

const verbs = {
  GET (url, params, options) {
    return fetch(params ? `${url}?${params}` : url, {
      // method: 'GET',
      // credentials: 'same-origin',
      // ...options,
    })
  },

  POST (url, params, options) {
    /* istanbul ignore next */
    return fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        ...options,
      },
    })
  },
}

function RequestError (data) {
  this.code = data.code
  this.message = data.resultMessage || data.message || data.response_message || 'There seems to be a problem. Please try again.'
  this.status = data.status
  this.traceId = data.traceId || ''
}

function timeout (ms, promise) {
  /* istanbul ignore next */
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('Please check your internet connection and try again.'))
    }, ms)
    promise.then(resolve, reject)
  })
}

export function commonRequest (url, method = 'GET', params = {}, options = {}) {
  const fetch = verbs[method](url, params, options)
    .then(res => {
      const { status } = res
      if (status >= 500) {
      /* istanbul ignore next */
        throw new Error('Our system is currently busy. Please try again later.')
      }
      return res.json().then(data => {
      /* istanbul ignore next */
        if (status !== 200 && status > 399) {
        /* istanbul ignore next */
          // logApi(url, 'error', { message: data.message })
          throw new RequestError({...data, status})
        } else {
          // logApi(url, 'succ', { timecost: new Date().getTime() - start })
        }
        return data
      })
    }).catch(ex => {
      // logApi(url, 'error', { message: ex.message || 'network_error' })
      /* istanbul ignore next */
      throw new RequestError(ex)
    })

  return timeout(60000, fetch)
}
