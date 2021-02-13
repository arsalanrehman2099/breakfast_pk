import React, { useState } from "react";
import Modal from "react-modal";
import QtyModal from "../others/QtyModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("body");

function DealItem(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const boxStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imgUrl})`,
  };

  const [visibility, setVisibility] = useState("none");

  const buttonStyle = {
    display: visibility,
  };

  return (
    <div
      onMouseEnter={() => setVisibility("")}
      onMouseLeave={() => setVisibility("none")}
      className="deal-container"
      style={boxStyle}
    >
      <div>
        <p className="deal-container-title">{props.title}</p>
      </div>

      <hr />
      <div>
        <p className="deal-container-desc">{props.desc}</p>
      </div>
      <div>
        <span className="deal-container-price">Rs {props.price}.00 /-</span>
      </div>

      <button style={buttonStyle} onClick={openModal}>
        Add To Cart
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Quantity Modal"
      >
        <QtyModal
          padding="15px"
          id={props.id}
          name={props.title}
          imgUrl={props.imgUrl}
          quantity={props.desc}
          price={props.price}
          close={closeModal}
        />
      </Modal>
    </div>
  );
}

export default DealItem;
