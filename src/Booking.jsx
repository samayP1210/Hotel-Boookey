import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Booking({
  name,
  email,
  adults,
  startDate,
  endDate,
  setName,
  setEmail,
  setAdults,
  setStartDate,
  setEndDate,
  setBooked,
  id
}) {
  return (
    <div
      className="modal fade"
      id={`staticBackdrop${id}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title fs-5" id="staticBackdropLabel">
              Enter Following Details
            </h4>
          </div>
          <div className="modal-body">
            <div className="row mb-3">
              <label htmlFor="name" className="col-sm-3 col-form-label">
                Name :
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  style={{ left: "0px", position: "absolute", width: "300px" }}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-3 col-form-label">
                Email :
              </label>
              <div className="col-sm-9">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  style={{ left: "0px", position: "absolute", width: "300px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label
                htmlFor="num-of-persons"
                className="col-sm-3 col-form-label"
              >
                Adults :
              </label>
              <div className="col-sm-9">
                <input
                  type="number"
                  className="form-control"
                  id="num-of-persons"
                  onWheel={() => false}
                  min={1}
                  max={25}
                  onChange={(e) => setAdults(e.target.value)}
                  value={adults}
                  style={{ width: "46px", left: "0px", position: "absolute" }}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="check-in" className="col-sm-3 col-form-label">
                Check-in :
              </label>
              <DatePicker
                className="col-sm-9"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                // endDate={endDate}
                minDate={new Date()}
                id="check-in"
              />
            </div>

            <div className="row mb-3">
              <label htmlFor="check-out" className="col-sm-3 col-form-label">
                Check-out :
              </label>
              <DatePicker
                className="col-sm-9"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                // startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                id="check-out"
              />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            {(!endDate || !startDate || name === "" || !email) && (
              <button type="button" className="btn" disabled>
                Proceed To Pay
              </button>
            )}
            {endDate && startDate && name !== "" && email && (
              <button
                type="button"
                className="btn"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target= {`#paymentBackdrop${id}`}
              >
                Proceed To Pay
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
