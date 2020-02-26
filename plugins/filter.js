import Vue from 'vue'

export function truncate(value, limit) {
  value.substring(0, limit)
}

export function tailing(value, tail) {
  return value + tail
}

const filters = { truncate, tailing }

export default Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
