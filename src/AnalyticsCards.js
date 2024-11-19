import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const AnalyticsCards = ({ title, value }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCards;

