import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const CoachDetail = () => {
  const [profile, setProfile] = useState([]);
  const [appointment, setAppointment] = useState();
  const [isBooking, setIsBooking] = useState();
  let params = useParams();
  const id = useSelector((state) => state.LoginReducer.detail.id);

  useEffect(() => {
    axios.get("http://localhost:4000/coaches/" + id).then((res) => {
      console.log(res.data);
      setProfile([res.data]);
    });
    axios.get("http://localhost:4000/bookings/").then((res) => {
      let allBookings = res.data.filter((booking) => booking.coachId === id);
      if (allBookings.length === 0) {
        setIsBooking(false);
      } else {
        setAppointment(allBookings);
        setIsBooking(true);
      }
    });
  }, [id]);

  console.log(profile);
  console.log(appointment);

  if (params.topics === "viewprofile") {
    return profile.map((item) => (
      <div
        class="container "
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "30%",
        }}
      >
        <div class="card  bg-dark text-white">
          <div class="card-body">
            <h1 class="card-text">Coach Id : {item.id}</h1>
            <p class="card-text">Date of Birth : {item.dateOfBirth}</p>
            <p class="card-text">Mobile No : {item.mobileNumber}</p>
            <p class="card-text">Specialty : {item.specialty}</p>
          </div>
        </div>
      </div>
    ));
  } else if (params.topics === "schedules" || params.topics === "home") {
    return isBooking ? (
      <div class="container">
        <div class="row">
          {appointment.map((item) => (
            <div class="col-lg-4 mb-4">
              <div
                class="card  bg-dark text-white text-center card-columns"
                style={{ width: "18rem", marginTop: "10px" }}
              >
                <div class="card-body">
                  <h3 class="card-text">Appointment Date : </h3>
                  <h3>{item.appointmentDate}</h3>
                  <h4 class="card-text">Slot : {item.slot}</h4>
                  <br /> <br />
                  <p class="card-text">Booking Id : {item.id}</p>
                  <p class="card-text">User Id : {item.userId}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <h1>No planned schedules yet</h1>
    );
  }
};

export default CoachDetail;
