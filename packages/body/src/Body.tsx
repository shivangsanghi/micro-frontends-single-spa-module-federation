import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { Parent } from './Parent'

const Body: React.VFC = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '1rem',
      }}
    >
      <Parent />
    </div>
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
