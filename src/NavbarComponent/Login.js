import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import FormHelperText from "@material-ui/core/FormHelperText";
import { logInAPI } from "../API/api";
import Alert from "@mui/material/Alert";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { setIsLoggedIn, setItems, setCart, setCheckout, user, setUser,setID } =
    useContext(UserContext);

  const onSubmit = async (data) => {
    const res = await logInAPI(data);
    console.log(res, "res"); 
    if (res?.data?.status == 400) {
      setShowAlert(true);
    } else {
      // 
      // if (user) {
      //   console.log("User from sign-up:", user);
      // }
      setID(res?.data?._id)
      setUser(res);
      console.log("User from sign-up:", res);
      setCheckout(0);
      setCart([]);
      setItems(0);
      setIsLoggedIn(true);
      navigate("/");
      reset();
    }
  };
  return (
    <div className="sign">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <h1 style={{ color: "white" }}>Log in</h1>
        {showAlert && (
          <Alert
            severity="error"
            style={{ marginBottom: "10px", width: "150px" }}
          >
            Invalid User
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="email"
            name="email"
            error={errors?.email?.message ? true : false}
            placeholder="Email"
            variant="outlined"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
            style={{ marginBottom: "16px", width: "300px" }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            InputProps={{
              style: {
                border: "2px solid white",
                color: "white",
              },
            }}
          />
          {errors.email && (
            <FormHelperText error style={{ padding: 0 }}>
              {errors.email.message}
            </FormHelperText>
          )}
          <br></br>

          <TextField
            placeholder="Password"
            variant="outlined"
            type="password"
            {...register("password", {
              required: "Enter password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            style={{ marginBottom: "16px", width: "300px" }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            InputProps={{
              style: {
                border: "2px solid white",
                color: "white",
              },
            }}
          />

          {errors.password && (
            <FormHelperText error style={{ padding: 0 }}>
              {errors.password.message}
            </FormHelperText>
          )}

          <div>
            <Link to="/signin" style={{ color: "white" }}>
              Create new account?
            </Link>
          </div>

          <div>
            <Button
              style={{
                marginLeft: "100px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "15px",
                marginTop: "30px",
              }}
              variant="contained"
              onClick={handleSubmit(onSubmit)}
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
