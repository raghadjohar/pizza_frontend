import Grid from "@material-ui/core/Grid";
import React, { useContext, useEffect, useState } from "react";
import { deleteMenuAPI, getMenuAPI, postMenuAPI } from "../API/api";
import { UserContext } from "../App";
import Menucomponent from "../component/Menucomponent";
import { CircularProgress } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

export default function Menu() {
  // const { items, setItems,role} = useContext(UserContext);
  // const [selectedName, setSelectedName] = React.useState("");
  // let pizza = [];

  const { user, setUser } = useContext(UserContext);
  const [openForm, setOpenForm] = React.useState(false);
  const [item, setItem] = useState([]);

  const [pizza, setPizza] = useState([]);
  const [load, setLoad] = useState();

  const openDialog = () => {
    setOpenForm(true);
  };

  const handleCreateItem = async () => {
    const newItem = {
      img: item.img,
      name: item.name,
      info: item.info,
      price: item.price,
    };
    const res = await postMenuAPI(newItem);
    getData()
    setOpenForm(false);
  };

  const handleDeletePizza = async (index) => {
    const itemToRemove = pizza[index];
    const sameItemTypeIndex = pizza.findIndex(
      (pizzaItem) => pizzaItem.name === itemToRemove.name
    );
  console.log(itemToRemove,"itemToRemove");
    if (sameItemTypeIndex !== -1) {
      const updatedPizza = [...pizza];
      updatedPizza.splice(sameItemTypeIndex, 1);
      setPizza(updatedPizza);
      const res = await deleteMenuAPI(itemToRemove?._id);
      console.log(itemToRemove?._id)
    }
  };
  

  const getData = async () => {
    setLoad(true);
    const res = await getMenuAPI();
    setPizza(res?.data);
    setLoad(false);    
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="menu">
      <div>
        <h1 style={{ margin: 0 }}>OUR MENU</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        {user?.data?.role === "admin" && (
          <Button
            variant="outlined"
            style={{
              color: "rgb(243, 243, 94)",
              borderColor: "rgb(243, 243, 94)",
              marginBottom: "20px",
              marginRight: "70px",
            }}
            onClick={openDialog}
          >
            add item
          </Button>
        )}

        <Dialog
          open={openForm}
          onClose={() => setOpenForm(false)}
          PaperProps={{
            style: {
              width: "500px",
              maxWidth: "90%",
            },
          }}
         
        >
          <DialogTitle>Add New Item</DialogTitle>
          <DialogContent>
            <TextField
              label="Image URL"
              style={{ width: "100%" }} 
              value={item.img}
              onChange={(e) => setItem({ ...item, img: e.target.value })}
            />
            <br></br>
            <TextField
              label="Name"
              style={{ width: "100%" }} 
              value={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
            />
            <br></br>
            <TextField
              label="information"
              style={{ width: "100%"}} 
              value={item.info}
              onChange={(e) => setItem({ ...item, info: e.target.value })}
            />
            <br></br>
            <TextField
              style={{ width: "100%"}} 
              label="Price"
              value={item.price}
              onChange={(e) => setItem({ ...item, price: e.target.value })}
            />
            <br></br>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setOpenForm(false)}>Cancel</Button>
            <Button onClick={handleCreateItem}>Add</Button>
          </DialogActions>
        </Dialog>
        
      </div>
      {load ? (
        <CircularProgress
          style={{
            color: "rgb(243, 243, 94)",
            width: "200px",
            height: "200px",
            animationDuration: "2s",
          }}
        />
      ) : (
        <Grid container spacing={3}>
          {pizza.map((pizzaItem,index) => (
            
            <Grid item xs={12} sm={6} md={4} lg={6} key={pizzaItem.name}>
              <Menucomponent
                img={pizzaItem.img}
                name={pizzaItem.name}
                info={pizzaItem.info}
                price={pizzaItem.price}
                items={pizzaItem.items}
                setItems={pizzaItem.setItems}
              />
              {user?.data?.role === "admin" && (
          <DeleteOutlineIcon
            style={{
              cursor: "pointer",
              color: "red",
            }}
            onClick={() => handleDeletePizza(index)}
          />)}
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
