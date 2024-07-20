import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import UserReducer from './store/reducers/UserSlice.ts'



	export const store =  configureStore({
		reducer: {
			users: UserReducer,
		}
	})

export type RootState = ReturnType<typeof store.getState>
export const AppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector