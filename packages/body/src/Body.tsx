import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { Provider } from 'react-redux'
import { Parent } from './Parent'
import store from './redux/store'

const Body: React.VFC = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          width: '100%',
          padding: '1rem',
        }}
      >
        <Parent />
      </div>
    </Provider>
  )
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Body,
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
