export const reducer = (state, action) => {
    if (action.type === "email") {
      if (action.payload === "") {
        setemailerror(true);
        setLoginLoading(false);
        return state;
      } else {
        setemailerror(false);
        state.email = action.payload;
        return state;
      }
    }
    if (action.type === "password") {
      if (action.payload === "") {
        setLoginLoading(false);
        setpasswordError(true);
        return state;
      } else {
        setpasswordError(false);
        state["password"] = action.payload;
        return state;
      }
    } else {
      return state;
    }
  };