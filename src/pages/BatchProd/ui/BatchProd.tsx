import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks/redux.ts'
import { addUser, deleteUser } from '../../../app/store/reducers/UserSlice.ts'

export default function BatchProd() {
	//какая же я тупая мразь
	const users = useAppSelector(state=>state.users.users)
	const dispatch = useAppDispatch()
	console.log(users)
	return (
		<div>
			<div onClick={() => dispatch(addUser({ id: users.length, name: 'asd', email: 'asdas' }))}>Add User</div>
			<div>
				{users.map((user) => (
					<div>
						<div>
							{user.name}: {user.email}
						</div>
						<div onClick={() => dispatch(deleteUser(user.id))}>delete</div>
					</div>
				))}
			</div>
		</div>
	
	)
}