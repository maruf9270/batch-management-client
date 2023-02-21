import { Button, TextField } from "@mui/material";
import { Box} from "@mui/system";
import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { email, password } from "../../Redux/Reducers/LoginReducer/Actions/Actions";
import { LoginSubmit } from "../../Redux/Thunk/Login/Login";

const Login = () => {

  // const states = useSelector((state) => state);
  // console.log(state);
  // // Error condition for email section
  // const [emailerror, setemailerror] = useState(false);

  // // Error conditio for password section;
  // const [passwordError, setpasswordError] = useState(false);

  // // Loading state for login page
  // const [loginLoading, setLoginLoading] = useState(false);
  // // Initial vlaue of user
  // const initialValue = {
  //   email: "",
  //   password: "",
  // };

  // // Reducer function
  // const reducer = (state, action) => {
  //   if (action.type === "email") {
  //     if (action.payload === "") {
  //       setemailerror(true);
  //       setLoginLoading(false);
  //       return state;
  //     } else {
  //       setemailerror(false);
  //       state.email = action.payload;
  //       return state;
  //     }
  //   }
  //   if (action.type === "password") {
  //     if (action.payload === "") {
  //       setLoginLoading(false);
  //       setpasswordError(true);
  //       return state;
  //     } else {
  //       setpasswordError(false);
  //       state["password"] = action.payload;
  //       return state;
  //     }
  //   } else {
  //     return state;
  //   }
  // };
  // // Reducer function
  // const [state, dispatch] = useReducer(reducer, initialValue);

  // // Handling submitting form
  // const handelsubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   if (emailerror || passwordError) {
  //     toast.error("Please input email and password");
  //     return;
  //   }
  //   if (state.password === "" || state.email === "") {
  //     toast.error("Input email and password");
  //     return;
  //   } else {
  //     toast.success("working");
  //   }
  // };

  const dispatch = useDispatch()
  const LoginReducer = useSelector((state)=>state.LoginReducer);
  const email_error = LoginReducer.email_error;
  const password_error = LoginReducer.password_error;

  const submit = (e) =>{
    e.preventDefault()
    if(!email_error && !password_error){
      dispatch(LoginSubmit())
    }
    else{
      return
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
                Email is required
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
                This field is required
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
              Login
            </Button>
          </Box>
        </form>
      </div>

      {/* HElmet section for page title */}
      <Helmet>
        <title>Login</title>
      </Helmet>
    </div>
  );
};

export default Login;
