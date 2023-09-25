import React, { useDebugValue, useState } from "react";
import SlideShow from "./SlideShow";
import Comments from "./Comments";
import Payment from "./Payment";
import Booking from "./Booking";
import "./card.css";
import star from "./star.png";
import { app } from "./config";
import { getAuth } from "firebase/auth";

export default function Card(props) {
  const id = `collapse${props.id}`;
  const starElement = [];
  for (let i = props.data.star; i > 0; i--) {
    starElement.push(
      <img key={i} className="star" src={star} style={{ width: "20px" }} />
    );
  }

  const rateElement = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(props.data.rating))
      rateElement.push(<span key={i} className="fa fa-star checked"></span>);
    else rateElement.push(<span key={i} className="fa fa-star"></span>);
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [name, setName] = useState(getAuth(app).currentUser.displayName);
  const [email, setEmail] = useState(getAuth(app).currentUser.email);
  const [adults, setAdults] = useState(1);

  return (
    <div className="accordion container" id="accordionExample">
      <div className="accordion-item card">
        <SlideShow imgs={props.data.imgs} />
        <div className="card-info col-md-6">
          <div>
            <h4 className="hotel-name">{props.data.name}</h4>
            {starElement}
          </div>
          <p>
            <b>City : </b>
            {props.data.city}
            <br />
            <b>Rating : </b>
            {rateElement} ({props.data.count})
          </p>

          <span
            className="reviews row bs content accordion-button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="true"
            aria-controls={id}
          >
            View Reviews
          </span>

          <button
            className="book-btn"
            // id={`book-id${props.id}`}
            data-bs-toggle="modal"
            data-bs-target={`#staticBackdrop${props.id}`}
          >
            Book Now
          </button>

          <Booking
            name={name}
            email={email}
            adults={adults}
            startDate={startDate}
            endDate={endDate}
            setName={setName}
            setEmail={setEmail}
            setAdults={setAdults}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            // setBooked={setBooked}
            id={props.id}
          />
          <Payment
            hotelName={props.data.name}
            name={name}
            email={email}
            adults={adults}
            startDate={startDate}
            endDate={endDate}
            setName={setName}
            setEmail={setEmail}
            setAdults={setAdults}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            price = {props.data.price}
            id={props.id}
          />
        </div>
      </div>
      <div
        id={id}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body content ml-2 ">
          <Comments comments={props.data.comments} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
