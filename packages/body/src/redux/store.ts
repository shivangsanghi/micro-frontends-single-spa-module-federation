import { configureStore } from '@reduxjs/toolkit'
import resultReducer from './reducer'

export default configureStore({
  reducer: {
    result: resultReducer,
  },
})
