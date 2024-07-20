import { configureStore,combineReducers } from '@reduxjs/toolkit'
import userReducer from './store/reducers/UserSlice.ts'

const rootReducer = combineReducers({
	userReducer,
})
export const store = ()=>{
	return configureStore({
		reducer: rootReducer,
	})
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']