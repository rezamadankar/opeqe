import { ACTION_TYPE } from '../Actions/food';
const initialState = {
    toggleOpen: false
}


export const food = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.OPEN:
            return {
                toggleOpen: true
            }
        case ACTION_TYPE.CLOSE:
            return {
                toggleOpen: false
            }
        default:
            return state;
    }
}
