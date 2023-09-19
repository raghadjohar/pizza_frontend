import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@material-ui/core/Grid";

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        justifyContent="center"
        style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}
      >
        <Grid
          item
          xs={12} sm={6} md={3}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px"
          }}
        >
          <h1> About Us</h1>
          <p style={{ width: "270px" }}>
            Far far away, behind the word mountains, there live the blind texts.
          </p>
          <div style={{ display: "flex", flexDirection: "row" }}>
          <a
              href="https://www.facebook.com/pizzahut/"
                target="_blank"
                rel="noopener noreferrer">
            <FacebookIcon fontSize="large" style={{ padding: "20px" }} /></a>
            <a
              href="https://twitter.com/pizzahut/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "20px" }}
            >
              <TwitterIcon fontSize="large" />
            </a>
            <a
              href="https://www.instagram.com/pizzahut/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "20px" }}
            >
              <InstagramIcon fontSize="large" />
            </a>
          </div>
        </Grid>

        <Grid
          item
          xs={6} sm={3} md={2} 
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px"
          }}
        >
          <h1> Services</h1>
          <p> Cooked</p>
          <p> Deliver</p>
          <p> Quality Food</p>
        </Grid>

        <Grid
          item
          xs={6} sm={3} md={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <h1>Have A Question</h1>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon fontSize="small" style={{ marginRight: "8px" }} />
              <p>078952137</p>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <MailOutlineIcon
                fontSize="small"
                style={{ marginRight: "8px" }}
              />
              <p>pizza@pizza.com</p>
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon fontSize="small" style={{ marginRight: "8px" }} />
              <p>Amman, Queen Rania Street</p>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
}
