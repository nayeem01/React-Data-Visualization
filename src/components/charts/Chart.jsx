import React, { useContext } from "react";

import Container from "@mui/material/Container";
import { ChartContext } from "../../context/ChartContext";
import ChartChard from "./ChartCard";

export default function Charts() {
  const { showCharts } = useContext(ChartContext);

  if (!showCharts || showCharts.length === 0) return null;

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        {showCharts.map((chart) => (
          <ChartChard key={chart.id} options={chart.options} />
        ))}
      </Container>
    </React.Fragment>
  );
}
