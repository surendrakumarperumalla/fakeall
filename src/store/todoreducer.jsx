var initialstate={
    todo:['get kawasaki','get vw car','get villa']
}
function todoreducer(state=initialstate,action){
    if(action.type==='ADD'){
        return {...state,todo:[...state.todo,action.payload]}
    }
    return state

}
export default todoreducer