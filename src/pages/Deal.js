import React from "react";
import PageHeader from '../components/others/PageHeader'
import DealArray from "../models/deal";
import DealItem from "../components/deal/DealItem";

function Deal() {
  return (
    <div className="deal-page">
      <PageHeader title="Deals" />
      <div className="deal">
        {DealArray.map((d) => {
          return (
            <DealItem
              key={d.id}
              id={d.id}
              title={d.title}
              desc={d.desc}
              price={d.price}
              imgUrl={d.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Deal;
