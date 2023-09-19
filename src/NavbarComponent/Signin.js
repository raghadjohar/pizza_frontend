import FormHelperText from "@material-ui/core/FormHelperText";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signUpAPI } from "../API/api";
import Alert from "@mui/material/Alert";
import { useContext, useState } from "react";
import {
  FormControl,
  Button,
  MenuItem,
  Select,
  TextField,
  InputLabel,
} from "@mui/material";
import { UserContext } from "../App";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const [showAlert, setAlert] = useState(false);

  const onSubmit = async (data) => {
    const res = await signUpAPI(data);
    console.log(res, "res");

    if (res?.data?.status == 401) {
      setAlert(true);
    } else {
      setUser(res);
      console.log(user, "user");
      navigate("/log-in");
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
        <h1 style={{ color: "white" }}>Sign in</h1>
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
            name="fullName"
            error={errors?.fullName?.message ? true : false}
            placeholder="Full name"
            type="text"
            variant="outlined"
            {...register("fullName", { required: "Full name is required" })}
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

          {errors.fullName && (
            <FormHelperText error style={{ padding: 0 }}>
              {errors.fullName.message}
            </FormHelperText>
          )}
          <br />

          <TextField
            placeholder="Phone Number"
            variant="outlined"
            {...register("phoneNumber", {
              required: "Phone number is required",
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

          {errors.phoneNumber && (
            <FormHelperText error style={{ padding: 0 }}>
              {errors.phoneNumber.message}
            </FormHelperText>
          )}
          <br />

          <TextField
            placeholder="Email"
            type="email"
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
          <br />

          <TextField
            placeholder="Password"
            variant="outlined"
            type="password"
            {...register("password", {
              required: "Password is required",
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
          <br />

          <FormControl style={{ width: 300 }}>
            <InputLabel style={{ color: "gray" }}>Role</InputLabel>
            <Select
              style={{
                color: "white",
                height: "59.7px",
                border: "2px solid white",
                borderRadius: "5px",
                padding: "10px",
              }}
              {...register("role")}
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"user"}>User</MenuItem>
            </Select>
          </FormControl>

          <div>
            <Button
              style={{
                marginLeft: "65px",
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
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
