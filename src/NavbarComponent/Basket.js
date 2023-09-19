// Basket.js
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { Button, Grid } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { postItems,getOrder } from "../API/api";
import { useNavigate } from "react-router-dom";
const { v4: uuidv4 } = require('uuid');

export default function Basket() {
  const { cart, setCart, items, setItems, checkout, setCheckout, isLoggedIn ,userId,setID } =
    useContext(UserContext);
    const navigate = useNavigate();

  const handleDeleteItem = (index) => {
    const itemToRemove = cart[index];
    const itemPrice = parseFloat(itemToRemove.price);

    const sameItemTypeIndex = cart.findIndex(
      (cartItem) => cartItem.name === itemToRemove.name
    );

    if (sameItemTypeIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[sameItemTypeIndex].quantity > 1) {
        updatedCart[sameItemTypeIndex].quantity--;
      } else {
        updatedCart.splice(sameItemTypeIndex, 1);
      }
      setCart(updatedCart);
      setItems(items - 1);
    }

    setCheckout((prevCheckout) => prevCheckout - itemPrice);
    
  };

  const handleOrder = async () => {
    const ordersWithUser = cart.map((item) => ({
      ...item, userId:userId }));
    const res = await postItems({ order: cart,checkout:checkout ,userId:userId});
    navigate("/")

    await getOrder(checkout)
  };
  return (
    <div className="basket" style={{ height: "675px", color: "white" }}>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "50px" }}
      >
          <div>
            <Grid item xs={5}>
              {cart.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "1px solid black",
                    borderRadius: "5px",
                    width: "500px",
                    background: "rgba(149, 143, 143, 0.262) ",
                    marginBottom: "20px",
                    fontFamily: "Nothing You Could Do, cursive",
                    height: "128px",
                  }}
                  >
                  <img src={item.img} width="180px" alt=""></img>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: "20px",
                    }}
                  >
                    <h3 key={index} style={{ margin: "10px" }}>
                      {item.name}
                    </h3>
                    <h3
                      style={{
                        margin: "10px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {item.price}{" "}
                      <DeleteOutlineIcon
                        sx={{ marginLeft: "12px" }}
                        onClick={() => handleDeleteItem(index)}
                      ></DeleteOutlineIcon>
                    </h3>
                    <h3 style={{ margin: "0" }}>Quantity: {item.quantity}</h3>
                  </div>
                </div>
              ))}
            </Grid>
            <Grid
              item
              sx={{
                border: "1px solid black",
                borderRadius: "5px",
                background: "rgba(149, 143, 143, 0.262) ",
                width: "250px",
                paddingLeft: "20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <h3>
                    Check out: {checkout}
                    <span>$</span>
                  </h3>
                </div>
                <Button
                  onClick={handleOrder}
                  variant="outlined"
                  style={{
                    width: "30px",
                    color: "white",
                    border: "1px solid black",
                    marginBottom: "8px",
                  }}
                >
                  Order
                </Button>
              </div>
            </Grid>
          </div>
        
      </Grid>
    </div>
  );
}
