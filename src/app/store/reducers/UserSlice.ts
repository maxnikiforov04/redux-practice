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
		deleteUser:(state,action:PayloadAction<number|string>) => {
			state.users.splice(state.users[action.payload],1)
		}
	}
})
export const { deleteUser, addUser } = userSlice.actions
export default userSlice.reducer