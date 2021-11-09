import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Child } from './Child'
import { multiply } from './redux/reducer'

export const Parent = () => {
  const [value, setValue] = React.useState(1)
  const [multiplier, setMultiplier] = React.useState(2)
  const dispatch = useDispatch()
  const reset = React.useCallback(() => {
    setValue(1)
    setMultiplier(2)
    dispatch(multiply(value * multiplier))
  }, [dispatch, multiplier, value])

  const onNumberChange = (val: number) => {
    setValue(val)
    dispatch(multiply(val * multiplier))
  }

  const onMultiplierChange = (val: number) => {
    setMultiplier(val)
    dispatch(multiply(val * value))
  }

  React.useEffect(() => {
    dispatch(multiply(value * multiplier))
  }, [])

  return (
    <div>
      <label htmlFor="number">Set Number</label>
      <br />
      <input
        id="number"
        type="number"
        value={value}
        onChange={(e) => onNumberChange(+e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="multiplier">Set Multiplier</label>
      <br />
      <input
        id="multiplier"
        type="number"
        value={multiplier}
        onChange={(e) => onMultiplierChange(+e.target.value)}
      />
      <br />
      <br />
      <br />
      <Child reset={reset} />
    </div>
  )
}
