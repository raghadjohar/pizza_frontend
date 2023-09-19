import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { UserContext } from "../App";
import { logOutAPI } from "../API/api";

export default function Navbar() {
  const {setUser, items, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleLogout = async () => {
    setIsLoggedIn(false);
    setUser("") //delete session
   const res=await logOutAPI();
   console.log(res,"res");//data empty 
  };

  return (
    <div className="Navbar">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="RR.png"
          alt=""
          style={{ width: "100px", height: "100px" }}
          className="photo"
        />

        <div>
          <Link to="/">
            <Button
              variant="text"
              style={{
                color: "rgb(243, 243, 94)",
                fontFamily: '"Nothing You Could Do", cursive',
              }}
            >
              Home
            </Button>
          </Link>
        </div>

        {isLoggedIn && (
          <div>
            <Link to="/menu">
              <Button
                variant="text"
                style={{
                  color: "rgb(243, 243, 94)",
                  fontFamily: '"Nothing You Could Do", cursive',
                }}
              >
                Menu
              </Button>
            </Link>
          </div>
        )}

        <div>
          <Link to="/about">
            <Button
              variant="text"
              style={{
                color: "rgb(243, 243, 94)",
                fontFamily: '"Nothing You Could Do", cursive',
              }}
            >
              About Us
            </Button>
          </Link>
        </div>

        <div>
          <Link to="/contact">
            <Button
              style={{
                color: "rgb(243, 243, 94)",
                fontFamily: '"Nothing You Could Do", cursive',
              }}
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <div>
          {!isLoggedIn ? (
            <Link to="/log-in">
              <Button
                style={{
                  color: "rgb(243, 243, 94)",
                  fontFamily: '"Nothing You Could Do", cursive',
                }}
              >
                Sign in
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button
                onClick={handleLogout}
                style={{
                  color: "rgb(243, 243, 94)",
                  fontFamily: '"Nothing You Could Do", cursive',
                }}
              >
                Log out
              </Button>
            </Link>
          )}

          {isLoggedIn && (
            <Badge
              badgeContent={items}
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              <Link to="/basket">
                <ShoppingCartIcon style={{ color: "rgb(243, 243, 94)" }} />
              </Link>
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
