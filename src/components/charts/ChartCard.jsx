import * as React from "react";
import propTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export default function ChartCard({ options }) {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Card sx={{ width: "650px", height: "auto" }} variant="outlined">
            <CardContent>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}

ChartCard.propTypes = {
  options: propTypes.object,
};
