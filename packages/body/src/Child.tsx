import * as React from 'react'
import { BodyContext } from './Body.context'

export const Child = ({ value, multiplier = 1, reset }) => {
  const context = React.useContext(BodyContext)

  return (
    <>
      <label htmlFor="result">Result</label>
      <div id="result">{value * multiplier}</div>
      <br />
      <button onClick={reset}>{context.resetButtonName}</button>
    </>
  )
}
