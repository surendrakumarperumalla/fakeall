var initialstate={
    count:0
}
function counterreducer(state=initialstate,action){
    if(action.type==='INC'){
        return{...state,count:state.count+1}
    }
    if(action.type==='DEC'){
        return{...state,count:state.count-1}
    }
    if(action.type==='RES'){
        return{...state,count:state.count=0}
    }
    return state

}
export default counterreducer