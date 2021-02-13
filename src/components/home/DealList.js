import React from "react";
import {useHistory} from 'react-router-dom'

function DealList() {

  const history = useHistory();
  function navToDeals(){
    history.push('/deals')
  }

  return (
    <div>
      <div className="heading">
        <div className="text">
          <h3>Deals</h3>
        </div>
        <div className="btn">
          <button onClick={navToDeals}>More</button>
        </div>
      </div>

      <div className="home-deals">
        <div>
          <div className="home-deals-daily" onClick={navToDeals}>
            <div>
              <p className="heading">Daily Deals</p>
            </div>
          </div>
          <div className="home-deals-weekly" onClick={navToDeals}>
            <div>
              <p className="heading">Weekly Deals</p>
            </div>
          </div>
        </div>
        <div className="home-deals-monthly" onClick={navToDeals}>
          <div>
            <p className="heading">Monthly Deals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealList;
