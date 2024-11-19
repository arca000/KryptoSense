import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

const CampaignForm = ({ onAddCampaign }) => {
  const [formData, setFormData] = useState({
    campaignName: "",
    targetWallet: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.campaignName || !formData.targetWallet || !formData.budget || !formData.message) {
      alert("All fields are required!");
      return;
    }
    onAddCampaign(formData);
    setFormData({ campaignName: "", targetWallet: "", budget: "", message: "" });
    alert("Campaign Created Successfully!");
  };

  return (
    <Card style={{ marginBottom: "20px", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Create a Campaign
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Campaign Name"
            name="campaignName"
            value={formData.campaignName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Target Wallet"
            name="targetWallet"
            value={formData.targetWallet}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Budget (in Crypto)"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            type="number"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Campaign
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CampaignForm;

