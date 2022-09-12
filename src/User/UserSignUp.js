import userImg from "../user.jpg";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SignupMiddleware } from "../Actions/Actions";
import Navbar from "../Navbar";

const UserSignUp = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.SignUpReducer.id);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [validName, setValidName] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validMobile, setValidMobile] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validDate, setValidDate] = useState(false);
  const [validGender, setValidGender] = useState(false);
  const [validPincode, setValidPincode] = useState(false);
  const [validCity, setValidCity] = useState(false);
  const [validState, setValidState] = useState(false);
  const [validCountry, setValidCountry] = useState(false);
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
    if (mobile.length === 10) {
      setValidMobile(true);
    }

    if (
      email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setValidEmail(true);
    }

    const currentDate = new Date();
    const birthYear = Number(date.slice(0, 4));
    if (
      currentDate.getFullYear() - birthYear >= 20 &&
      currentDate.getFullYear() - birthYear <= 100
    ) {
      setValidDate(true);
    }
    if (pincode.length === 6) {
      setValidPincode(true);
    }
    if (city.trim().length >= 6 && city.trim().length <= 20) {
      setValidCity(true);
    }
    if (state.trim().length >= 6 && state.trim().length <= 20) {
      setValidState(true);
    }
    if (country.trim().length >= 6 && country.trim().length <= 20) {
      setValidCountry(true);
    }
    setIsTouched(true);
    if (
      validCity &&
      validCountry &&
      validDate &&
      validEmail &&
      validGender &&
      validMobile &&
      validPassword &&
      validPincode &&
      validState &&
      validName
    ) {
      profile = {
        name: name,
        password: password,
        gender: gender[0],
        dateOfBirth: date,
        mobileNumber: mobile,
        email: email,
        pincode: pincode,
        city: city,
        state: state,
        country: country,
      };

      dispatch(SignupMiddleware({ profile: profile, type: "user" }));
      setAllValid(true);
      setIsTouched(false);
      setName("");
      setPassword("");
      setMobile("");
      setEmail("");
      setDate("");
      setGender("");
      setPincode("");
      setCity("");
      setState("");
      setCountry("");
      setValidName(false);
      setValidPassword(false);
      setValidMobile(false);
      setValidEmail(false);
      setValidDate(false);
      setValidGender(false);
      setValidPincode(false);
      setValidCity(false);
      setValidState(false);
      setValidCountry(false);
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
          <img src={userImg} alt="..." style={{ width: "60%" }} />
          <h1>Account created successfully</h1>
          <h3>Your UserLogin Id is {userId}</h3>
          <a
            href="/userlogin"
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
              <img src={userImg} alt="..." style={{ width: "20%" }} />
              User Profile
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

            <div class="col-md-6 ">
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
                value={mobile}
              />
              <p class="text-danger">
                {isTouched && !validMobile
                  ? "Mobile Number should have 10 digits"
                  : " "}
              </p>
            </div>
            <div class="col-md-6">
              <label htmlFor="Email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <p class="text-danger">
                {isTouched && !validEmail ? "Required" : " "}
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
                {isTouched && !validGender ? "Required" : " "}
              </p>
            </div>

            <div class="col-md-6">
              <label htmlFor="Pincode" class="form-label">
                Pincode
              </label>
              <input
                type="number"
                class="form-control"
                id="Pincode"
                onChange={(e) => {
                  setPincode(e.target.value);
                }}
                value={pincode}
              />
              <p class="text-danger">
                {isTouched && !validPincode
                  ? "Pincode should have 6 digits"
                  : " "}
              </p>
            </div>
            <div class="col-md-6">
              <label htmlFor="City" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                value={city}
              />
              <p class="text-danger">
                {isTouched && !validCity
                  ? "City should have 6 to 20 characters"
                  : " "}
              </p>
            </div>

            <div class="col-md-6">
              <label htmlFor="State" class="form-label">
                State
              </label>
              <input
                type="text"
                class="form-control"
                id="State"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                value={state}
              />
              <p class="text-danger">
                {isTouched && !validMobile
                  ? "State should have 6 to 20 characters"
                  : " "}
              </p>
            </div>
            <div class="col-md-6">
              <label htmlFor="Country" class="form-label">
                Country
              </label>
              <input
                type="text"
                class="form-control"
                id="Country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                value={country}
              />
              <p class="text-danger">
                {isTouched && !validCountry
                  ? "Country should have 6 to 20 characters"
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

export default UserSignUp;
