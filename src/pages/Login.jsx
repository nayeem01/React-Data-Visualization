import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

import CardWrapper from "../components/login/CardWrapper";
import LoginSnackbar from "../components/login/LoginSnackbar";

import { login } from "../services/auth";

export default function Login() {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError(true);
      return;
    }
    setLoading(true);
    try {
      // "email": "cmed@cmed.com",
      // "password": "cmed"
      const response = await login(email, password);

      if (!response.ok) {
        setError(true);
        throw new Error("Login failed");
      }
      navigate("/charts");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <CardWrapper>
      <Stack
        component="form"
        spacing={2}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          helperText="Please enter your Email"
          id="demo-helper-text-misaligned"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />

        <TextField
          helperText="Password"
          id="demo-helper-text-misaligned"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />
        {loading ? (
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Login
          </LoadingButton>
        ) : (
          <Button type="submit" variant="contained" onClick={handleClick}>
            Login
          </Button>
        )}
        <LoginSnackbar open={open} handleClose={handleClose} error={error} />
      </Stack>
    </CardWrapper>
  );
}
