
export const GetBlogByStore=(state=[1],action:any)=>{
    switch (action.type) {
        case "GETBLOG":
          return action.payload;
        default:
          return state;
      }
}
export default GetBlogByStore

