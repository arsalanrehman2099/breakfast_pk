import React from "react";
import PageHeader from "../components/others/PageHeader";
import TeamItem from "../components/team/TeamItem";

function Aboutus() {
  const team = [
    {
      id: 1,
      name: "Mr & Mrs. Khalid",
      dsg: "CFO",
      img: "/images/members/cfo2.jpg",
    },
    {
      id: 2,
      name: "Arsalan ur Rehman",
      dsg: "CTO",
      img: "/images/members/cto.jpg",
    },
    {
      id: 3,
      name: "Saim Khalid Zamir",
      dsg: "Delivery boy",
      img: "/images/members/delivery-boy.jpg",
    },
  ];

  return (
    <div>
      <PageHeader title="About Us" />
      <div className="abt-us-container">
        <p className="detail">
          <span className="logo">breakfast.pk</span> Pvt Ltd is founded on July
          2020 by a Computer Software Architecture <span style={{fontWeight:'bold'}}>Mrs. Rohab Arsalan ur Rehman</span> and her
          family. The primary focus of this organization is to make the morning
          very first meal obligatory. Well, not just obligatory, but also deliver full of
          energetic meals at your home on time to help you and your family keep running the entire day
          with utmost energy.
        </p>

        <PageHeader title="CEO & Founder" />

        <div className="ceo-container">
          <div className="ceo-bio">
            <img src="/images/members/ceo.jpg" alt="" />
            <h4
              style={{
                marginTop: "5px",
              }}
            >
              Mrs. Rohab Arsalan
            </h4>
            <p
              style={{
                marginTop: "5px",
              }}
            >
              Founder & CEO - <span className="logo">breakfast.pk</span>
            </p>
            <p
              style={{
                marginTop: "5px",
              }}
            >
              Software Engineer - Uok
            </p>
          </div>
          <div className="ceo-msg">
            <h4
              style={{
                fontFamily: "Raleway, sans-serif",
                marginBottom: "18px",
                fontSize: "20px",
              }}
            >
              Message
            </h4>
            <p style={{ lineHeight: "2" }}>
              When I founded this company, I had only one goal in my mind, to
              solve the need and the ease together, to provide easy
              accessibility as well as mandatoriness to our morning meals. We
              not only offer tea or bread or egg, but instead, we provide and
              deliver a highly quality plus high protein breakfast at your
              doorstep that enables you to gain enough energy to make your day
              better.
            </p>
          </div>
        </div>


        <PageHeader title="Our Team" />

        <div className="team-container" style={{ marginBottom: "45px" }}>
          {team.map((t) => {
            return (
              <TeamItem key={t.id} img={t.img} name={t.name} dsg={t.dsg} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
