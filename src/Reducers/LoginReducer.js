const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "COACH-LOGIN":
      return {
        ...state,
        isAuthed: action.isAuthenticated,
        detail: action.detail,
      };
    case "USER-LOGIN":
      return {
        ...state,
        isAuthed: action.isAuthenticated,
        detail: action.detail,
      };
    default:
      return state;
  }
};
export default LoginReducer;
