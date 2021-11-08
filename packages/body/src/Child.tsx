import * as React from 'react'

export const Child = ({ value, multiplier = 1 }) => {
  return (
    <>
      <label htmlFor="result">Result</label>
      <div id="result">{value * multiplier}</div>
    </>
  )
}
