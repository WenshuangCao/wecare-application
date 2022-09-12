import coachImg from "../coach.jpg";
import { useSelector, useDispatch } from "react-redux";
import { SignupMiddleware } from "../Actions/Actions";
import { useState } from "react";
import Navbar from "../Navbar";

const CoachSignUp = () => {
  const dispatch = useDispatch();
  const coachId = useSelector((state) => state.SignUpReducer.id);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [validName, setValidName] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validDate, setValidDate] = useState(false);
  const [validGender, setValidGender] = useState(false);
  const [validMobile, setValidMobile] = useState(false);
  const [validSpecialty, setValidSpecialty] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [allValid, setAllValid] = useState(false);

  const submitHandler = (e) => {
    let profile;
    e.preventDefault();
    if (name.trim().length >= 3 && name.trim().length <= 50) {
      setValidName(true);
    }
    if (password.length >= 5 && password.length <= 10) {
      setValidPassword(true);
    }
    const currentDate = new Date();
    const birthYear = Number(date.slice(0, 4));
    if (
      currentDate.getFullYear() - birthYear >= 20 &&
      currentDate.getFullYear() - birthYear <= 100
    ) {
      setValidDate(true);
    }

    if (mobile.length === 10) {
      setValidMobile(true);
    }

    if (specialty.trim().length >= 10 && specialty.trim().length <= 50) {
      setValidSpecialty(true);
    }

    setIsTouched(true);

    if (
      validDate &&
      validGender &&
      validMobile &&
      validName &&
      validPassword &&
      validSpecialty
    ) {
      profile = {
        name: name,
        password: password,
        gender: gender[0],
        dateOfBirth: date,
        mobileNumber: mobile,
        specialty: specialty,
      };

      dispatch(SignupMiddleware({ profile: profile, type: "coach" }));

      setAllValid(true);
      setIsTouched(false);
      setName("");
      setPassword("");
      setDate("");
      setGender("");
      setMobile("");
      setSpecialty("");
      setValidName(false);
      setValidPassword(false);
      setValidDate(false);
      setValidGender(false);
      setValidMobile(false);
      setValidSpecialty(false);
    } else {
      setAllValid(false);
    }
  };

  if (allValid && !isTouched)
    return (
      <Navbar>
        <div
          class="container text-center"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
          }}
        >
          <img src={coachImg} alt="..." style={{ width: "60%" }} />
          <h1>You are a Coach now !</h1>
          <h3>Your Coach Id is {coachId}</h3>
          <a
            href="/coachlogin"
            type="button"
            class="btn btn-primary btn-lg"
            style={{ width: "200px" }}
          >
            Login Now
          </a>
        </div>
      </Navbar>
    );
  else
    return (
      <Navbar>
        <div
          class="container"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
          }}
        >
          <form
            class="row gy-2 gx-3 align-items-center text-white"
            style={{ backgroundColor: "black" }}
          >
            <h2 class="text-center">
              <img src={coachImg} alt="..." style={{ width: "20%" }} />
              Life Coach Profile
            </h2>

            <div class="col-md-6 ">
              <label htmlFor="Name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
              <p class="text-danger">
                {isTouched && !validName
                  ? "Name should have 3 to 50 characters"
                  : " "}
              </p>
            </div>
            <div class="col-md-6">
              <label htmlFor="Password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <p class="text-danger">
                {isTouched && !validPassword
                  ? "Password should have 5 to 10 characters"
                  : " "}
              </p>
            </div>
            <div class="col-6">
              <label htmlFor="Date of Birth" class="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                class="form-control"
                id="Date of Birth"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
              <p class="text-danger">
                {isTouched && !validDate
                  ? "Age should be between 20 to 100 years"
                  : " "}
              </p>
            </div>
            <div class="col-6">
              <label htmlFor="Gender" class="form-label">
                Gender
              </label>
              <br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                  onClick={() => {
                    setGender("Male");
                    setValidGender(true);
                  }}
                />
                <label class="form-check-label" htmlFor="inlineRadio1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                  onClick={() => {
                    setGender("Female");
                    setValidGender(true);
                  }}
                />
                <label class="form-check-label" htmlFor="inlineRadio2">
                  Female
                </label>
              </div>
              <br />
              <p class="text-danger">
                {isTouched && !validGender ? "Must select gender" : " "}
              </p>
            </div>

            <div class="col-md-6">
              <label htmlFor="Mobile Number" class="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                class="form-control"
                id="Mobile Number"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
              <p class="text-danger">
                {isTouched && !validMobile
                  ? "Mobile number should have 10 digits"
                  : " "}
              </p>
            </div>
            <div class="col-md-6">
              <label htmlFor="Specialty" class="form-label">
                Specialty
              </label>
              <input
                type="text"
                class="form-control"
                id="Specialty"
                onChange={(e) => {
                  setSpecialty(e.target.value);
                }}
              />
              <p class="text-danger">
                {isTouched && !validSpecialty
                  ? "Specialty should have 10 to 50 characters"
                  : " "}
              </p>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto">
              <br /> <br />
              <button
                type="button"
                class="btn btn-success text-center"
                onClick={submitHandler}
              >
                Register
              </button>
              <br /> <br /> <br />
            </div>
          </form>
        </div>
      </Navbar>
    );
};

export default CoachSignUp;
