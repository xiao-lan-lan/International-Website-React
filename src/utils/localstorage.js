export function getItem(k) {
  return JSON.parse(window.localStorage.getItem(k))
}

export function setItem(k,v) {
  window.localStorage.setItem(k,JSON.stringify(v))
}

export function removeItem(k) {
  window.localStorage.removeItem(k)
}