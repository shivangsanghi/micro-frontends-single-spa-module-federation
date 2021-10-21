import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { ExtendedHeader } from './ExtendedHeader'

const Header: React.VFC = () => {
  return (
    <header
      style={{
        width: '100%',
        background: '#20232a',
        color: '#61dafb',
        padding: '2rem',
        fontWeight: 'bold',
      }}
    >
      Header from React &nbsp;
      <ExtendedHeader />
    </header>
  )
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
