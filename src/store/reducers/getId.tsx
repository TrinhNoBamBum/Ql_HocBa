
export const getIdReducer = (state = 0, action:any) => {

    switch (action.type) {
      case "GETID":
        return action.payload;
      default:
        return state;
    }
  };

export default getIdReducer;
  