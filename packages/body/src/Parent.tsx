import * as React from 'react'
import { Child } from './Child'

export const Parent = () => {
  const [value, setValue] = React.useState(1)
  const [multiplier, setMultiplier] = React.useState(2)

  const reset = React.useCallback(() => {
    setValue(1)
    setMultiplier(2)
  }, [])

  return (
    <div>
      <label htmlFor="number">Set Number</label>
      <br />
      <input
        id="number"
        type="number"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="multiplier">Set Multiplier</label>
      <br />
      <input
        id="multiplier"
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(+e.target.value)}
      />
      <br />
      <br />
      <br />
      <Child multiplier={multiplier} value={value} reset={reset} />
    </div>
  )
}
