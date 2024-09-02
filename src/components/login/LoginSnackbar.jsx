import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function LoginSnackbar({ open, handleClose, error }) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={error ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {error ? "Wrong Email and Password" : "Login Successfully"}
        </Alert>
      </Snackbar>
    </div>
  );
}

LoginSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
