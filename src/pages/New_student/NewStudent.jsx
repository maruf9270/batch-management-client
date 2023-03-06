import { Option, Select } from "@mui/joy";
import { Radio, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gurdian_name, gurdian_toogle, name } from "../../Redux/Reducers/AddStudent/Actions/Action";

const NewStudent = () => {
  // State for submitting onfo and a loading screen
  const [addStudentLoading, setAddStudentLoading] = useState(false);

  // Name field error
  const [nameError, setNameError] = useState(false);

  // Function for submitting student form
  const handlwformsubmit = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-3xl text-center">
        Sikander Computer Training Center
      </h1>
      <h2 className="text-2xl text-center rounded-lg">Register</h2>

      {/* Main form section starts from here */}
      <div className="w-full">
        <form action="" onSubmit={handlwformsubmit} className="sm:flex block">
          <Box>
            {/* course name */}
            <TextField
              label="Course"
              id="outlined-basic"
              error={nameError}
              name="name"
              sx={{ width: "50ch" }}
            ></TextField>
          </Box>

          <Box sx={{ width: { sm: "10ch", md: "1" }, mx: "auto" }}>
            {/* name */}
            <TextField
              label="Name"
              id="outlined-basic"
              onBlur={(e) => dispatch(name(e.target.value))}
              name="name"
              sx={{ width: "50ch" }}
            ></TextField>

            {/* father or gurdian name */}
            <ToggleButtonGroup
              color="primary"
              
              exclusive
              onChange={(e)=>{dispatch(gurdian_toogle(e.target.value))}}
              aria-label="Platform"
            >
              <ToggleButton value="father">Father</ToggleButton>
              <ToggleButton value="husbend">Husbend</ToggleButton>
              
            </ToggleButtonGroup>
             

            <TextField
              label="Name"
              id="outlined-basic"
              name="name"
              sx={{ width: "50ch" }}
              onBlur={(e)=>dispatch(gurdian_name(e.target.value))}
            ></TextField>

            {/* Nationality  */}
            <TextField
              label="Name"
              id="outlined-basic"
              error={nameError}
              name="name"
              sx={{ width: "50ch" }}
            ></TextField>

            {/* sex */}
            <Select disabled={false} placeholder="Choose one…" size="sm">
              <Option value={"male"}>Male</Option>
              <Option value={"female"}>Female</Option>
            </Select>

            {/* Maritial status */}
            <Select disabled={false} placeholder="Choose one…" size="sm">
              <Option value={"marrid"}>Marrid</Option>
              <Option value={"unmarrid"}>Unmarrid</Option>
            </Select>
          </Box>

          {/* Address section */}
          <h3>Present Address</h3>
          <TextField
            label="Village"
            id="outlined-basic"
            error={nameError}
            name="name"
            sx={{ width: "50ch" }}
          ></TextField>
          <TextField
            label="Post"
            id="outlined-basic"
            error={nameError}
            name="name"
            sx={{ width: "50ch" }}
          ></TextField>
          <TextField
            label="District"
            id="outlined-basic"
            error={nameError}
            name="name"
            sx={{ width: "50ch" }}
          ></TextField>
          <TextField
            label="State"
            id="outlined-basic"
            error={nameError}
            name="name"
            sx={{ width: "50ch" }}
          ></TextField>
        </form>
      </div>
    </div>
  );
};

export default NewStudent;
