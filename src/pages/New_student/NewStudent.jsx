import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const NewStudent = () => {
  // State for submitting onfo and a loading screen
  const [addStudentLoading, setAddStudentLoading] = useState(false);

  // Name field error
  const [nameError, setNameError] = useState(false);

  // Function for submitting student form
  const handlwformsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.name.value);
  };
  return (
    <div>
      <h1 className="text-3xl text-center">
       Sikander Computer Training Center 
      </h1>
      <h2 className="text-2xl text-center rounded-lg" >
      Register
      </h2>

      {/* Main form section starts from here */}
      <div className="w-full">
        <form action="" onSubmit={handlwformsubmit} className="sm:flex block">
         <Box>
               {/* For inputtinf name */}
          <TextField
            label="Name"
            id="outlined-basic"
            error={nameError}
            name="name"
            sx={{width:'50ch'}}
           
          ></TextField>
         </Box>

         <Box sx={{width:{sm:'10ch', md:'1'}, mx:"auto"}}>
         <TextField
            label="Name"
            id="outlined-basic"
            error={nameError}
            name="name"
            sx={{width:'1'}}
           
          ></TextField>
         </Box>
          
        </form>
      </div>
    </div>
  );
};

export default NewStudent;
