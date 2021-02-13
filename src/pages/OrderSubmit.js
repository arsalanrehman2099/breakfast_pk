import React from "react";
import { useHistory, useLocation, Redirect } from "react-router-dom";

function OrderSubmit() {
  const history = useHistory();
  if (useLocation().state == null) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="order-submit-container">
        <div>
          <img src="/images/order-submit-2.png" alt="" />
          <p>Order Has Been Submitted Successfully</p>
          <button onClick={() => history.push("/home")}>Shop More</button>
        </div>
      </div>
    );
  }
}

export default OrderSubmit;
