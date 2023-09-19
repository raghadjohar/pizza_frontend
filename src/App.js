import "./App.css";
import * as React from "react";
import { Routes } from "./component/Routes";
import Navbar from "./NavbarComponent/Navbar";
import Footer from "./component/footer";
import  { createContext } from "react";

export const UserContext = createContext();


function App() {
  const [items, setItems] = React.useState(0);
  const [cart, setCart] = React.useState([]);
  const [checkout,setCheckout]=React.useState(0);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [user,setUser] = React.useState("");
  const [userId,setID] = React.useState("");
  
  
  // user
  return (
    <UserContext.Provider value={{ userId,setID,items, setItems,cart, setCart ,checkout,setCheckout,isLoggedIn,setIsLoggedIn,quantity,setQuantity,user,setUser}}>
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
      </div></UserContext.Provider>
  );
}

export default App;
//test