import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("contactData", JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <div
        className="contact"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/black.jpg)`,
          backgroundSize: "cover",
          color: "rgb(217, 212, 212)",
          minHeight: "86.7vh",
        }}
      >
        <Grid
          container
          spacing={3}
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "100px",
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div>
              <h1> Contact Information</h1>
              <p>
                <strong>Address:</strong> Amman, Queen Rania Street
              </p>
              <p>
                <strong>Phone:</strong> 078925542
              </p>
              <p>
                <strong>Email:</strong> pizza@pizza.com
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <TextField
                  name="name"
                  error={errors?.name?.message ? true : false}
                  className="custom-textfield"
                  label="Name"
                  variant="standard"
                  {...register("name", {
                    required: "name is required",
                  })}
                  InputLabelProps={{
                    style: {
                      color: "white",
                    },
                  }}
                  InputProps={{
                    style: {
                      borderBottom: "2px solid white",
                      color: "white",
                    },
                  }}
                />
                {errors.name && (
                  <FormHelperText error style={{ paddingLeft: "95px" }}>
                    {errors.name.message}
                  </FormHelperText>
                )}
                <br />
                <TextField
                  name="email" 
                  error={errors?.email?.message ? true : false}
                  className="custom-textfield"
                  label="Email"
                  variant="standard"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  InputLabelProps={{
                    style: {
                      color: "white",
                    },
                  }}
                  InputProps={{
                    style: {
                      borderBottom: "2px solid white",
                      color: "white",
                    },
                  }}
                />
                {errors.email && (
                  <FormHelperText error style={{ paddingLeft: "95px" }}>
                    {errors.email.message}
                  </FormHelperText>
                )}
                <br />
                <TextField
                  name="message"
                  error={errors?.message?.message ? true : false}
                  className="custom-textfield"
                  label="Message"
                  variant="standard"
                  {...register("message", {
                    required: "Message is required",
                  })}
                  multiline
                  rows={4}
                  InputLabelProps={{
                    style: {
                      color: "white",
                    },
                  }}
                  InputProps={{
                    style: {
                      borderBottom: "2px solid white",
                      color: "white",
                    },
                  }}
                />
                {errors.message && (
                  <FormHelperText error style={{ paddingLeft: "95px" }}>
                    {errors.message.message}
                  </FormHelperText>
                )}
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "rgb(68, 63, 63)",
                    color: "white",
                    padding: "10px",
                    marginTop: "20px",
                  }}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
