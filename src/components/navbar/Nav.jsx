import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

import ChartSelect from "./ChartSelect";
import DeleteModal from "../delete/DeleteModal";
import NoInputModal from "./NoInputModal";
import { logout } from "../../services/auth";

import { ChartContext } from "../../context/ChartContext";

export default function Nav() {
  const [inputValue, setInputValue] = useState("");
  const { setChartTitle, addChart } = useContext(ChartContext);

  const [open, setOpen] = useState(false);
  const [openNoInput, setNoInput] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleChart = () => {
    if (!inputValue) {
      setNoInput(true);
    } else {
      addChart();
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    setChartTitle(event.target.value);
  };

  const handleNoInputClose = () => setNoInput(false);

  if (openNoInput) {
    return <NoInputModal open={openNoInput} handleClose={handleNoInputClose} />;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <TextField
              id="outlined-basic"
              label="Chart Title"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
            />

            <ChartSelect />

            <Stack direction="row" spacing={2}>
              <Button
                size="large"
                variant="outlined"
                color="error"
                onClick={handleChart}
              >
                APPLY
              </Button>

              <Button variant="outlined" color="error" onClick={handleOpen}>
                DELETE
              </Button>

              <DeleteModal open={open} handleClose={handleClose} />
              <Button variant="outlined" color="error" onClick={handleLogout}>
                LOGOUT
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
