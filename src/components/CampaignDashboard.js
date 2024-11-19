import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const CampaignDashboard = ({ campaigns }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Campaign Dashboard
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Campaign Name</TableCell>
                <TableCell>Target Wallet</TableCell>
                <TableCell>Budget</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns.map((campaign, index) => (
                <TableRow key={index}>
                  <TableCell>{campaign.campaignName}</TableCell>
                  <TableCell>{campaign.targetWallet}</TableCell>
                  <TableCell>{campaign.budget}</TableCell>
                  <TableCell>{campaign.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default CampaignDashboard;

