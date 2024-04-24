const initialState = {
    const: 0
}
export default function reducer(state=initialState,action){
    if (action.type === 'COUNTER'){
        if (state.count + action.payload>=0){
            return {count: state.count + action.payload}
        }
    }else if (action.type === 'DELETE'){
        return {count: 0}
    }
    return state
}