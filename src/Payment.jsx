import React from "react";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

export default function Payment({
  hotelName,
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
  id,
  price,
}) {
  // let amt = price.basePrice + ();
  const service_id = "service_qhvjppp";
  const template_id = "template_sm32uj3";
  const key = "D1gB8IgBAGTDag9hA";

  let days = Math.round(
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );
  let amt =
    adults *
    (price.basePrice + (days <= 0 ? 0 : (days - 1) * price.perDayPrice));

  function handlePayment() {
    
    // createOrder()

    
  }

  function generateInvoice(){
    let obj = {
      name: name,
      email: email,
      hotelName: hotelName,
      startDate: startDate.toJSON().slice(0, 10),
      endDate: endDate.toJSON().slice(0, 10),
      adults: adults,
      price: amt,
    };
    emailjs
      .send(service_id, template_id, obj, key)
      .then(() => {
        setName("");
        setEmail(email);
        setAdults(1);
        setStartDate(new Date());
        setEndDate(new Date());
        toast.success('Booked Successfully!!');
      })
      .catch(() => {
        toast.error('Cannot send invoice!!');
      });
  }

  return (
    <div
      className="modal fade"
      id={`paymentBackdrop${id}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="paymentBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="paymentBackdropLabel">
              Invoice
            </h5>
          </div>
          <div className="modal-body">
            <div className="row">
              <label className="col-sm-4 col-form-label">
                <b>Hotel Name :</b>
              </label>
              <div className="col-sm-8">
                <label
                  className="col-form-label"
                  style={{ left: "0px", position: "absolute" }}
                >
                  {hotelName}
                </label>
              </div>
            </div>

            <div className="row">
              <label className="col-sm-4 col-form-label">
                <b>Billing Name :</b>
              </label>
              <div className="col-sm-8">
                <label
                  className="col-form-label"
                  style={{ left: "0px", position: "absolute" }}
                >
                  {name}
                </label>
              </div>
            </div>

            <div className="row">
              <label className="col-sm-4 col-form-label">
                <b>Email:</b>
              </label>
              <div className="col-sm-8">
                <label
                  className="col-form-label"
                  style={{ left: "0px", position: "absolute" }}
                >
                  {email}
                </label>
              </div>
            </div>

            <div className="row">
              <label className="col-sm-4 col-form-label">
                <b>Check-in:</b>
              </label>
              <div className="col-sm-8">
                <label
                  className="col-form-label"
                  style={{ left: "0px", position: "absolute" }}
                >
                  {startDate.toJSON().slice(0, 10)}
                </label>
              </div>
            </div>

            <div className="row">
              <label className="col-sm-4 col-form-label">
                <b>Check-out:</b>
              </label>
              <div className="col-sm-8">
                <label
                  className="col-form-label"
                  style={{ left: "0px", position: "absolute" }}
                >
                  {endDate.toJSON().slice(0, 10)}
                </label>
              </div>
            </div>

            <div className="row">
              <label className="col-sm-4 col-form-label">
                <b>Adults:</b>
              </label>
              <div className="col-sm-8">
                <label
                  className="col-form-label"
                  style={{ left: "0px", position: "absolute" }}
                >
                  {adults}
                </label>
              </div>
            </div>

            <div className="row">
              <label className="col-sm-4 col-form-label">
                <b>Amount:</b>
              </label>
              <div className="col-sm-8">
                <label
                  className="col-form-label"
                  style={{ left: "0px", position: "absolute" }}
                >
                  <b>₹{amt}</b>
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              className="btn"
              data-bs-dismiss="modal"
              onClick={handlePayment}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
