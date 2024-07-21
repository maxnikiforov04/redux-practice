import React from 'react'
import './HomePage.css'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks/redux.ts'
import { deleteUser } from '../../../app/store/reducers/UserSlice.ts'

export default function HomePage() {
	const users = useAppSelector(state => state.users.users)
	const dispatch = useAppDispatch()
	console.log(users)
	return (
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
	)
}
