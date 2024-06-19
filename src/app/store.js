import { configureStore } from '@reduxjs/toolkit'
import numberReducer from '../feature/number/numberSlice'

export default configureStore({
    reducer: {
        number: numberReducer,
    },
})