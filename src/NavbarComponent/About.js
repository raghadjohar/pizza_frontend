import React from "react";
import CHefComponent from "../component/ChefComponent";
import Grid from "@material-ui/core/Grid";

export default function About() {
  return (
    <div className="about-background" style={{ paddingBottom: "50px" }}>
      <div
        className="about"
        style={{ display: "flex", alignItems: "center", padding: "20px" }}
      >
        <img
          src="about.jpeg"
          style={{ width: "100%", maxWidth: "700px", borderRadius: "10px" }}
          alt=""
        />
        <div style={{ flex: 1, margin: "30px" }}>
          <h1>WELCOME TO PIZZA A RESTAURANT</h1>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
        </div>
      </div>

      <div>
        <h1 style={{ textAlign: "center", paddingTop: "40px" }}> OUR CHEF </h1>
        <p style={{ textAlign: "center",paddingBottom:"30px" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div style={{ paddingLeft: "80px",paddingRight:"80px" }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <CHefComponent
                img="jami.jpg"
                name="Jamie Jon"
                specialist="Beard Specialist"
                info="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              />
              
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CHefComponent
                img="ramzi.jpg"
                name="Ramzi Golden"
                specialist="Master Chef"
                info=" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CHefComponent
                img="Gordon.jpg"
                name="Gordon Michal"
                specialist="Grill Chef"
                info=" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
