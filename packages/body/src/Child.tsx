import * as React from 'react'
import { BodyContext } from './Body.context'
import { useSelector } from 'react-redux'

export const Child = ({ reset }) => {
  const context = React.useContext(BodyContext)
  const value = useSelector((state: any) => state.result.value)

  return (
    <>
      <label htmlFor="result">Result</label>
      <div id="result">{value}</div>
      <br />
      <button onClick={reset}>{context.resetButtonName}</button>
    </>
  )
}
