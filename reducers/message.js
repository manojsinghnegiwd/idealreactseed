import { SET_MESSAGE } from '../types/message';

const initState = {
	message: ''
}

export default (state = initState, action) {

	switch(action.type) {
		case SET_MESSAGE :
			return {...state, message: action.message}
		default :
			return state
	}

}