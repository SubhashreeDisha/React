let initialvalue='black';
const colorReducer=(state=initialvalue,action)=>{
    switch(action.type){
        case 'blue':
            return 'blue';
        case 'red':
            return 'red';
        default:
            return state;
    
    }

}
export default colorReducer;