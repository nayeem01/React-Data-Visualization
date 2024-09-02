import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardWrapper({
  children,
  style = { width: "400px", height: "auto" },
}) {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 8 }}
        >
          <Card sx={style} variant="outlined">
            <CardContent>
              <Typography sx={{ mb: 2 }} variant="h5" component="div">
                Login Form
              </Typography>
              {children}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
