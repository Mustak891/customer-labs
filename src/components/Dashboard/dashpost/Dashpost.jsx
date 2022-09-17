import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import {Api_url} from "../../Api_url/Api_Url";
import "./Dashpost.css";

const AddTable = () => {
  
  const nagvigate = useNavigate();

  const formvalidationSchema = yup.object({
    name: yup
      .string()
      .required("Employee Name is required")
      .max(20, "Employee Name is too long"),
    email: yup
      .string()
      .required("email is required ⚠️")
      .min(3, "email must be at least 3️⃣ characters long")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
    propic: yup
      .string()
      .required("Profile Pic is required")
      .min(3, "Profile Pic must be at least 3️⃣ characters long"),
    phone: yup
      .string()
      .required("Phone Number is required")
      .min(3, "Phone Number must be at least 3️⃣ characters long"),
    work: yup
      .string()
      .required("Work is required")
      .min(3, "Work must be at least 3️⃣ characters long"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        propic: "",     
        phone: "",
        work: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        Addjob(values);
      },
    });

    //Add employee
    const Addjob = async () => {
      const customer = await fetch(`${Api_url}/addwork`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if(customer.status === 400 || !customer){
        window.alert("something went wrong");
      }else{
        window.alert("Job added successfully");
        nagvigate("/dashboard");
      }
    }


  return (
    <div className="updateTable">
      <div className="updateTableHeader">ADD JOB</div>
      <div className="updateTableBody">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactMailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Email"
            variant="standard"
            size="large"
            type="email"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={
              errors.email && touched.email ? errors.email : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Profile Picture"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="propic"
            value={values.propic}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.propic && touched.propic}
            helperText={
              errors.propic && touched.propic ? errors.propic : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhotoOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Phone Number"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone && touched.phone}
            helperText={
              errors.phone && touched.phone ? errors.phone : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

           <TextField
            label="Work"
            variant="standard"
            size="large"
            type="text"
            style={{ width: "500px", display: "flex", justifyContent: "center", marginBottom: "20px" }}
            name="work"
            value={values.work}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.work && touched.work}
            helperText={
              errors.work && touched.work ? errors.work : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ContactMailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />


          <Typography style={{ marginBottom: "10px", marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" onClick={() => nagvigate('/dashboard')} startIcon={<ArrowBackIosIcon />}>
              back
            </Button>
            <Button variant="contained" type="submit" startIcon={<DoneAllIcon />}>
              Submit
            </Button>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default AddTable;
