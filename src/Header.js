import React from "react";
import Button from "@mui/material/Button";
import Carousel from 'react-material-ui-carousel'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./App";
import Grid from "@material-ui/core/Grid"; // Import the Grid component from Material-UI

export default function Header() {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <div style={{ maxWidth: "100%" }}>
      <Carousel
        enableAutoPlay
        duration={300}
        interval={2000}
        indicators={false}
        NavButtonsAlwaysVisible={false} //arrow false
      >
        <item>
          <Grid container justifyContent="space-between" alignItems="center" className="body">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div className="bodyOfHome">
                <h1 style={{ margin: 0 }}>Delicious</h1>
                <h1> ITALIAN CUIZINE</h1>
                <p>
                  ltalian cuisine has developed over the centuries. Although the
                  country known as Italy did not unite until the 19th century,
                  the cuisine can claim traceable roots as far back as the 4th century
                  BC. Food and culture were very important at that time evident
                  from the cookbook Through the centuries
                </p>
                {isLoggedIn && (
                  <Link to="/menu">
                    <Button
                      variant="outlined"
                      style={{
                        color: "rgb(243, 243, 94)",
                        borderColor: "rgb(243, 243, 94)",
                        width: "200px",
                        height: "50px",
                        textAlign: "center",
                        display: "block",
                        margin: "0 auto",
                      }}
                    >
                      Order Now
                    </Button>
                  </Link>
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img
                src="bg_1.png"
                alt=""
                style={{
                  width: "450px",
                  height: "450px",
                  paddingRight: "100px",
                }}
              ></img>
            </Grid>
          </Grid>
        </item>

        <item>
          <Grid container justifyContent="space-between" alignItems="center"  className="body">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img
                src="bg_2.png"
                alt=""
                style={{
                  width: "450px",
                  height: "450px",
                }}
              ></img>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} >
              <div className="bodyOfHome">
                <h1 style={{ margin: 0 }}>Curnchy</h1>
                <h1> ITALIAN CUIZINE</h1>
                <p style={{ paddingBottom: "20px", paddingTop: "20px" }}>
                  ltalian cuisine has developed over the centuries. Although the
                  country known as Italy did not unite until the 19th century,
                  the cuisine can claim traceable roots as
                </p>
                {isLoggedIn && (
                  <Link to="/menu">
                    <Button
                      variant="outlined"
                      style={{
                        color: "rgb(243, 243, 94)",
                        borderColor: "rgb(243, 243, 94)",
                        width: "200px",
                        height: "50px",
                        textAlign: "center",
                        display: "block",
                        margin: "0 auto",
                      }}
                    >
                      Order Now
                    </Button>
                  </Link>
                )}
              </div>
            </Grid>
          </Grid>
        </item>
      </Carousel>
    </div>
  );
}
