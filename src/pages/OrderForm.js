import React, { useState } from "react";
import PageHeader from "../components/others/PageHeader";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import alert from "alert";

const axios = require("axios").default;

function OrderForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [house, setHouse] = useState("");
  const [area, setArea] = useState("");
  const [delivery_date, setDeliveryDate] = useState("");
  const [message, setMessage] = useState("");

  async function formSubmit(event) {
    event.preventDefault();

    let products = JSON.stringify(localStorage.getItem("myCart"));

    if (
      email === "" ||
      name === "" ||
      contact === "" ||
      house === "" ||
      area === "" ||
      delivery_date === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    // const res = await axios.post(`/api/orders/`, {
    //   email: email,
    //   name: name,
    //   contact: contact,
    //   address: `${house} - ${area}`,
    //   message: message,
    //   products: products,
    //   delivery_date: delivery_date,
    // });

    // if (res.data.error === 0) {
    //   history.push("/order-submit", "access");
    //   localStorage.clear();
    // } else {
    //   alert("Something Went Wrong");
    // }
    localStorage.clear();
    history.push("/order-submit", "access");
  }

  if (useLocation().state == null) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <PageHeader title="Order Information Form" />

        <div className="order-container">
          <form action="">
            <div>
              <label>Full Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label>Address | House No#</label>
              <input type="text" onChange={(e) => setHouse(e.target.value)} />
            </div>
            <div>
              <label>Area | State | City</label>
              <input type="text" onChange={(e) => setArea(e.target.value)} />
            </div>
            <div>
              <label>Delivery Date + Time</label>
              <input
                type="text"
                placeholder="Format (dd/mm/yyyy  hh:mm:ss am|pm)"
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>
            <div>
              <label>Email Address</label>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Contact Info</label>
              <input type="text" onChange={(e) => setContact(e.target.value)} />
            </div>
            <div>
              <label>Message | Description (optional)</label>
              <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button onClick={formSubmit}>Submit Order</button>
          </form>
        </div>
      </div>
    );
  }
}

export default OrderForm;
