import React from "react";
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

function ProductItem(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="product-container">
      <div className="product-container-img">
        <img src={props.imgUrl} alt="" />
      </div>
      <p className="product-container-title">
        <span className="name">{props.name}</span> -{" "}
        <span className="qty">{props.quantity}</span>
      </p>
      <p className="product-container-price">Rs {props.price}.00 /-</p>
      <button onClick={openModal}>Add To Cart</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Quantity Modal"
      >
        <QtyModal
          padding="15px 35px"
          id={props.id}
          name={props.name}
          imgUrl={props.imgUrl}
          quantity={props.quantity}
          price={props.price}
          close={closeModal}
        />
      </Modal>
    </div>
  );
}

export default ProductItem;
