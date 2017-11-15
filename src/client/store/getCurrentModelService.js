import store from './store'

export function getHeaderModel() {
  return store.getState().headerReducer.model;
}

export function getHomeModel() {
  return store.getState().homeReducer.model;
}

