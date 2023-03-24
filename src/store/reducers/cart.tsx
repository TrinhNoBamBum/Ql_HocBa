export const ReCart =(state =[], action:any)=>{
    switch(action.type) {
      case "CART":
        return action.payload
      default:
        return state;  
    }
  }
  
  export default ReCart ;