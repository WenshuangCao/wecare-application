import Navbar from "../Navbar";
import coachImg from "../coach.jpg";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginValidate } from "../Actions/Actions";

const CoachLogin = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.LoginReducer.isAuthed);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [validId, setValidId] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (id.length !== 0) {
      setValidId(true);
    }
    if (password.length >= 10 && password.length <= 50) {
      setValidPassword(true);
    }
    setIsTouched(true);
    if (validId && validPassword) {
      dispatch(LoginValidate({ profile: { id, password }, type: "coach" }));
      setId("");
      setPassword("");
      setIsTouched(false);
      setValidId(false);
      setValidPassword(false);
    } else {
    }
  };

  return (
    <Navbar>
      <div
        class="container"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "30%",
        }}
      >
        <form
          class="row gy-2 gx-3 align-items-center text-white"
          style={{ backgroundColor: "black" }}
        >
          <br /> <br /> <br /> <br /> <br />
          <h2 class="text-center">
            <img src={coachImg} alt="..." style={{ width: "20%" }} />
            Login As Life Coach
          </h2>
          <div class="col-md-12 ">
            <input
              type="number"
              class="form-control"
              placeholder="Coach Id"
              onChange={(e) => {
                setId(e.target.value);
              }}
              value={id}
            />
            <p class="text-danger">
              {isTouched && !validId ? "Id Field is Required" : " "}
            </p>
          </div>
          <div class="col-md-12">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p class="text-danger">
              {isTouched && !validPassword
                ? "Password should have 10 to 50 characters"
                : " "}
            </p>
          </div>
          <div class="d-grid gap-2 col-md-12 mx-auto">
            <br></br>
            <button
              type="button"
              class="btn btn-primary text-center"
              onClick={submitHandler}
            >
              Login
            </button>
            <br /> <br />
          </div>
          {authenticated === false ? (
            <div className="text-danger">Invalid Credentials</div>
          ) : null}
          <br />
        </form>
        {authenticated === true ? <Navigate to="/coach/home" /> : null}
      </div>
    </Navbar>
  );
};

export default CoachLogin;
