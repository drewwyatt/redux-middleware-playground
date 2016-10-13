import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import * as createLogger from 'redux-logger'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';

import fetchMiddleware from '../middleware/fetch-middleware';

const configureStore = (preloadedState?: any) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, fetchMiddleware as Middleware, createLogger()),
    )
  )

  return store
}

export default configureStore
