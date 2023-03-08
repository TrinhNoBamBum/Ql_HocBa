export const countItemCart =(state =0, action:any)=>{
    switch(action.type) {
      case "COUNTITEM":
        return action.payload
      default:
        return state;  
    }
  }
  
  export default countItemCart ;