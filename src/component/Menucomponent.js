// Menucomponent.js
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { UserContext } from "../App";

export default function Menucomponent({ img, name, price, info }) {
  const { setItems, cart, setCart, setCheckout, setQuantity } =
    useContext(UserContext);

  const existingCartItem = cart.find((item) => item.name === name);

  const numOfItem = async () => {
    setItems((prevItems) => prevItems + 1);
    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      const newItem = { img, name, price, quantity: 1 };
      setCart((prevCart) => [...prevCart, newItem]);
    }
    setQuantity((prevQuantity) => prevQuantity + 1);

    const newPrice = parseFloat(price);
    setCheckout((prevCheckout) => prevCheckout + newPrice);
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "90%",
        marginBottom: "15px",
        marginRight: "100px",
      }}
    >
      <img src={img} style={{ width: "200px", height: "200px" }} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          textAlign: "left",
          padding: "20px",
          background: "rgba(149, 143, 143, 0.262) ",
        }}
      >
        <h3 style={{ margin: 0 }}>{name}</h3>
        <p>{info}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p style={{ paddingRight: "15px", margin: 0 }}>{price}</p>
          <Button
            variant="outlined"
            onClick={numOfItem}
            style={{
              color: "rgb(243, 243, 94)",
              borderColor: "rgb(243, 243, 94)",
            }}
          >
            Order
          </Button>
          
        </div>
      </div>
    </div>
  );
}
