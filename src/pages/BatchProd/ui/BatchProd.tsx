import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks/redux.ts'
import { addUser } from '../../../app/store/reducers/UserSlice.ts'

export default function BatchProd() {
	//какая же я тупая мразь
	const users = useAppSelector(state=>state.users.users)
	const dispatch = useAppDispatch()
	return (
		<div>
			{users.map((user) => (
				<div>
					{user.name}: {user.email}
				</div>
			))}
			<div onClick={()=>dispatch(addUser({id:users.length,name:'asd',email:'asdas'}))}>123123</div>
		</div>
	
	)
}