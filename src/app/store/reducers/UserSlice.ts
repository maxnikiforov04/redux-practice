import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import iUser from '../models/iUser.ts'

interface UserState{
	users:iUser[],
	isLoading:boolean,
	error:string,
	count:number,
}
const initialState: UserState = {
	users:[],
	isLoading:false,
	error:'string',
	count:0
}
export const userSlice = createSlice<UserState>({
	name:'user',
	initialState,
	reducers:{
		increment(state,action:PayloadAction<number>){
			state.count += action.payload;
		},
		decrement(state,action:PayloadAction<number>){
			state.count -= action.payload;
		},
		increase(state){
			state.count *= 2;
		}
	}
})
export const { increment, decrement, increase } = userSlice.actions
export default userSlice.reducer