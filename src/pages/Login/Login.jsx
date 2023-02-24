import { Button, TextField } from "@mui/material";
import { Box} from "@mui/system";
import { signOut } from "firebase/auth";
import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Bigspinner from "../../components/LoaderSpinner/BigSpinner";
import SmallSpinner from "../../components/LoaderSpinner/SmallSpinner";
import { auth } from "../../Redux/Reducers/AuthenticationReducer/AuthenticationReducer";
import { email, password } from "../../Redux/Reducers/LoginReducer/Actions/Actions";
import { LoginSubmit } from "../../Redux/Thunk/Login/Login";

const Login = () => {
  const dispatch = useDispatch()
  const LoginReducer = useSelector((state)=>state.LoginReducer);
  const email_error = LoginReducer.email_error;
  const password_error = LoginReducer.password_error;
  const error_message = LoginReducer.error_message;
  const loading = LoginReducer.loading
  const navigate = useNavigate()

  // User reducer
  const AuthenticationReducer = useSelector((state)=>state.AuthenticationReducer)
  const userLoading = AuthenticationReducer.loading
  const user = AuthenticationReducer.user

  function submit(e) {
    e.preventDefault();
    if (!email_error && !password_error) {
      dispatch(LoginSubmit());
    }
    else {
      return;
    }

  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-[500px] h-[500px] border border-stone-300 rounded-md">
        <form action="" onSubmit={submit}>
          <TextField
            label="Email"
            id="outlined-basic"
            name="name"
            sx={{ width: "50ch" }}
            onBlur={(e) => dispatch(email(e.target.value))}
            error={email_error}
            required
            ></TextField>
          {email_error && (
            <>
              <br />{" "}
              <label htmlFor="Name" className="text-red-700">
                {
                  error_message ? error_message: "Email is required"
                }
               
              </label>{" "}
              <br />
            </>
          )}
          {/* input field for password */}

          <TextField
            name="password"
            label="Password"
            type={"password"}
            id="outlined-basic"
            sx={{ width: "50ch", mt: 3 }}
            onBlur={(e) =>
             dispatch(password(e.target.value))
            }
            error={password_error}
          ></TextField>
          {password_error ? (
            <>
              <br />{" "}
              <label htmlFor="password" className="text-red-700">
                {error_message ? error_message : "This field is required"}
              </label>{" "}
              <br />
            </>
          ) : (
            <></>
          )}
          {/* Submit form button  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Button
              variant="outlined"
              color="success"
              sx={{ px: 6, py: 1 }}
              type="submit"
              disabled={email_error||password_error}
            >
             {
              loading ? <SmallSpinner/> : "Login"
             }
            </Button>
            <Button
              variant="outlined"
              color="success"
              sx={{ px: 6, py: 1 }}
             onClick={()=>signOut(auth)}
              disabled={email_error||password_error}
            >
              Logout
            </Button>
          </Box>
        </form>
      </div>

      {/* Redirecting user if they logged in  */}

      {
        loading || userLoading ? <Bigspinner></Bigspinner> : (user ? navigate('/'):"")
      }

      {/* HElmet section for page title */}
      <Helmet>
        <title>Login</title>
      </Helmet>
    </div>
  );
};

export default Login;
