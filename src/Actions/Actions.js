import axios from "axios";

const SignupCoach = (id) => {
  return {
    type: "COACH-SIGNUP",
    payload: id,
  };
};

const SignupUser = (id) => {
  return {
    type: "USER-SIGNUP",
    payload: id,
  };
};

const SignupMiddleware = (data) => {
  return (dispatch) => {
    if (data.type === "coach") {
      axios.post("http://localhost:4000/coaches", data.profile).then((res) => {
        let id = res.data.id;
        dispatch(SignupCoach(id));
      });
    } else {
      axios.post("http://localhost:4000/users", data.profile).then((res) => {
        let id = res.data.id;
        dispatch(SignupUser(id));
      });
    }
  };
};

const LoginCoach = (data) => {
  return {
    type: "COACH-LOGIN",
    isAuthenticated: data.isAuthenticated,
    detail: data.detail,
  };
};

const LoginUser = (data) => {
  return {
    type: "USER-LOGIN",
    isAuthenticated: data.isAuthenticated,
    detail: data.detail,
  };
};

const LoginValidate = (info) => {
  return (dispatch) => {
    if (info.type === "coach") {
      axios.get("http://localhost:4000/coaches").then((res) => {
        let value = res.data;
        var result = value.find(
          (val) =>
            val.id.toString() === info.profile.id &&
            val.password === info.profile.password
        );
        if (result) {
          dispatch(LoginCoach({ isAuthenticated: true, detail: result }));
        } else {
          dispatch(LoginCoach(false));
        }
      });
    } else {
      axios.get("http://localhost:4000/users").then((res) => {
        let value = res.data;
        var result = value.find(
          (val) =>
            val.id.toString() === info.profile.id &&
            val.password === info.profile.password
        );
        if (result) {
          dispatch(LoginUser({ isAuthenticated: true, detail: result }));
        } else {
          dispatch(LoginUser(false));
        }
      });
    }
  };
};

const BookApp = () => {
  return {
    type: "BOOK",
  };
};
const RescheduleApp = () => {
  return {
    type: "RESCHEDULE",
  };
};
const CancelApp = () => {
  return {
    type: "CANCEL",
  };
};

export {
  SignupCoach,
  SignupUser,
  SignupMiddleware,
  LoginCoach,
  LoginUser,
  LoginValidate,
  BookApp,
  RescheduleApp,
  CancelApp,
};
