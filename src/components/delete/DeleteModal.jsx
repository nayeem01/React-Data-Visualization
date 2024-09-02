import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import PropTypes from "prop-types";
import { useContext } from "react";
import { ChartContext } from "../../context/ChartContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  position: "relative",
  top: "0%",
  left: "0%",
  transform: "translate(0%, 0%)",
  width: "100%",
  bgcolor: "lightblue",
  border: "1px solid #000",
  boxShadow: 3,
  p: 2,
  marginBottom: 1,
  borderRadius: 2,
};

export default function DeleteModal({ open, handleClose }) {
  const { showCharts, deleteChart, deleteAllCharts } = useContext(ChartContext);

  const handleDelete = (id) => deleteChart(id);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 8 }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <List>
            <ListItem>
              <Button
                variant="contained"
                size="large"
                color="error"
                onClick={() => deleteAllCharts()}
              >
                Delete All Charts
              </Button>
            </ListItem>

            {showCharts.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton
                  sx={buttonStyle}
                  onClick={() => handleDelete(index)}
                >
                  <ListItemText primary={`Delete ${item.name}`} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </ListItem>
          </List>
        </Box>
      </Modal>
    </Box>
  );
}

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
