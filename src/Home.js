import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import coachImg from "./coach.jpg";
import userImg from "./user.jpg";

const Home = () => {
  return (
    <>
      <Navbar>
        <div class="align-self-center ">
          <div class="card text-center">
            <div class="card-body">
              <h2 class="card-title">
                We are at the heart of appropriate WeCare
              </h2>
              <br />
              <br />

              <div class="row justify-content-center">
                <div class="col-3">
                  <div
                    class="card text-center  text-white"
                    style={{ width: "20rem", backgroundColor: "black" }}
                  >
                    <img src={coachImg} class="card-img-top" alt="..." />
                    <br />
                    <div class="card-body ">
                      <a
                        href="/coachlogin"
                        type="button"
                        class="btn btn-info btn-lg"
                        style={{ width: "200px" }}
                      >
                        Login as a Coach
                      </a>
                      <br />
                      <br />
                      <a
                        href="/coachsignup"
                        type="button"
                        class="btn btn-info btn-lg"
                        style={{ width: "200px" }}
                      >
                        Join as a Coach
                      </a>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div
                    class="card text-center  text-white"
                    style={{ width: "20rem", backgroundColor: "black" }}
                  >
                    <img src={userImg} class="card-img-top" alt="..." />
                    <br />
                    <div class="card-body ">
                      <a
                        href="/userlogin"
                        type="button"
                        class="btn btn-info btn-lg"
                        style={{ width: "200px" }}
                      >
                        Login as a User
                      </a>
                      <br />
                      <br />
                      <a
                        href="/usersignup"
                        type="button"
                        class="btn btn-info btn-lg"
                        style={{ width: "200px" }}
                      >
                        Join as a User
                      </a>
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Home;
