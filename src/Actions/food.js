export const ACTION_TYPE = {
    OPEN: 'OPEN',
    CLOSE: 'CLOSE'
}

export const open = () => dispatch => {
    dispatch({
        type: ACTION_TYPE.OPEN,
        payload: true
    })
}

export const close = () => dispatch => {
    dispatch({
        type: ACTION_TYPE.OPEN,
        payload: false
    })
}