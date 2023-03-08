export const increment = (number:number) => {
    return {
      type: "INCREMENT",
      payload: number,
    };
  };
  export const decrement = (number:number) => {
    return {
      type: "DECREMENT",
      payload: number,
    };
  };


  export const Countitem=(number:number)=>{
    return {
      type:"COUNTITEM",
      payload :number,
    }
  }
  
  export const GetIdProduct=(id:any)=>{
    return{
      type:"GETID",
      payload:id,
    }
  }