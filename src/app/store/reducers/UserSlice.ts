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

	export const userSlice = createSlice({
	name:'user',
	initialState,
	reducers:{
		addUser:(state,action:PayloadAction<iUser>) => {
			state.users.push({
				id:state.users.length,
				name: action.payload.name,
				email: action.payload.email,
			})
		},
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
export const { increment, decrement, increase,addUser } = userSlice.actions
export default userSlice.reducer