import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import * as createLogger from 'redux-logger'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';

const configureStore = (preloadedState?: any) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger()),
    )
  )

  return store
}

export default configureStore
