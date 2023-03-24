

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

// start cart
  export const Countitem=(number:number)=>{
    return {
      type:"COUNTITEM",
      payload :number,
    }
  }
  
export const AcCart=(cart:any)=>{
  return {
    type:"CART",
    payload:cart
  }
}

//end cart
  export const GetIdProduct=(id:any)=>{
    return{
      type:"GETID",
      payload:id,
    }
  }

  export const getStateBlog=(blog:any)=>{
    return{
      type:"GETBLOG",
      payload:blog
    }

  }