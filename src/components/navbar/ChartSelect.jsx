import { useContext, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { ChartContext } from "../../context/ChartContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   {
//     id: 0,
//     title: "Show All",
//   },

//   {
//     id: 1,
//     title: "Bar Chart",
//   },
//   {
//     id: 2,
//     title: "Line Chart",
//   },
//   {
//     id: 3,
//     title: "Pie Chart",
//   },
//   {
//     id: 4,
//     title: "Scatter Plot Chart",
//   },
// ];

const names = ["Bar Chart", "Line Chart", "Pie Chart"];

export default function ChartSelect() {
  const [open, setOpen] = useState(false);
  const [chartName, setchartName] = useState("");
  const { findChart } = useContext(ChartContext);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    findChart(names.indexOf(value));

    setchartName(value);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Chart Type</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={chartName}
          onChange={handleChange}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          input={<OutlinedInput label="Chart Type" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
