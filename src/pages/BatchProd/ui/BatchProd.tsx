import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks/redux.ts'
import { increment,decrement,increase } from '../../../app/store/reducers/UserSlice.ts'

export default function BatchProd() {
	const {count} =  useAppSelector(state => state.userReducer)
	const dispatch = useAppDispatch()
	return (
		<div>
			<h1>{count}</h1>
			<div className='btns'>
				<button onClick={() => dispatch(increment(1))}>
					increment
				</button>
				<button onClick={() => dispatch(decrement(1))}>
					decrement
				</button>
				<button onClick={() => dispatch(increase())}>
					increase
				</button>
			</div>
		
		</div>
	
	)
}
