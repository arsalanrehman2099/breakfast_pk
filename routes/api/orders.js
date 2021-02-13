const express = require("express");
const router = express.Router();

const Order = require("../../model/order");

function generateId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

// Place an order API
router.post("/", (req, res) => {
  if (
    req.body.name === "" ||
    req.body.email === "" ||
    req.body.address === "" ||
    req.body.contact === "" ||
    req.body.delivery_date === "" ||
    req.body.products === ""
  ) {
    res.send("Required Parameters not found");
    return;
  }

  const time = new Date().toLocaleString();
  const id = generateId(20);

  const newOrder = new Order({
    email: req.body.email,
    name: req.body.name,
    address: req.body.address,
    contact: req.body.contact,
    delivery_date: req.body.delivery_date,
    products:req.body.products,
    message: req.body.message,
    ordered_date: time,
    order_id: id,
  });

  newOrder
    .save()
    .then((response) => res.send({error:0,...response._doc}))
    .catch((err) => res.send({error:1,...err}));
});

module.exports = router;
