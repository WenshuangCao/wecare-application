const SignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case "COACH-SIGNUP":
      return { ...state, id: action.payload };
    case "USER-SIGNUP":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
export default SignUpReducer;
