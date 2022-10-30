import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Dialogs() {
  const currencies = [
    {
      value: "FirstName",
      label: "FirstName",
    },
    {
      value: "LastName",
      label: "LastName",
    },
    {
      value: "Gender",
      label: "Gender",
    },
    {
      value: "Age",
      label: "Age",
    },
    {
      value: "AccountName",
      label: "AccountName",
    },
    {
      value: "City",
      label: "City",
    },
    {
      value: "State",
      label: "State",
    },
  ];

  // const [currency, setCurrency] = React.useState("EUR");

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [add, setAdd] = useState([{ services: "FirstName" }]);

  const handleAdd = () => {
    setAdd([...add, { services: "" }]);
  };

  const handleclose = (index) => {
    const list = [...add];
    list.splice(index, 1);
    setAdd(list);
  };

  const handleeventchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...add];
    list[index][name] = value;
    setAdd(list);
  };
  
  const handleSubmit = async () => {
    
    fetch("3d86f3f5-446d-4e46-a85a-29da18347141@email.webhook.site", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(add),
    })

    window.location.reload()
    window.alert("sucessfully submited")
  }



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Save Segment
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h3>Saving Segment</h3>
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Typography gutterBottom>
              <b>Enter the Name of the Segment</b>
              <br />
              <br />
              <TextField fullWidth label="Name of the segment" id="fullWidth" />
            </Typography>
            <br />
            <br />
            <Typography>
              <b>
                To Save your segment, you need to add the schemas to build the
                query
              </b>
            </Typography>
            <br />
            <Typography className="chip">
              <Chip
                label="User Traits"
                variant="outlined"
                color="success"
                icon={<CircleIcon />}
              />
              &nbsp;&nbsp;
              <Chip
                label="Group Traits"
                variant="outlined"
                color="error"
                icon={<CircleIcon />}
              />
            </Typography>

            {add.map((single, index) => (
              <Typography
                style={{
                  display: "flex",
                  gap: "10",
                  justifyContent: "space-between",
                  margin: "20px",
                }}
                key={index}
              >
                <TextField
                  style={{ width: "400px" }}
                  id="services"
                  select
                  name="services"
                  value={single.services}
                  onChange={(event) => handleeventchange(event, index)}
                  required
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <Button
                  type="text"
                  variant="outlined"
                  onClick={() => handleclose(index)}
                >
                  Remove
                </Button>
              </Typography>
            ))}

            <br />
            <Typography>
              <Button
                variant="text"
                startIcon={<AddIcon />}
                onClick={handleAdd}
              >
                Add new schema
              </Button>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleSubmit}>
              Save the Segment
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
