import React, { useState } from "react";
import {
  CssBaseline,
  Grid,
  Box,
  Container,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  AppBar,
  Paper,
} from "@mui/material";
import CampaignForm from "./components/CampaignForm";
import CampaignDashboard from "./components/CampaignDashboard";
import AnalyticsCards from "./components/AnalyticsCards";

const drawerWidth = 240;

function App() {
  const [campaigns, setCampaigns] = useState([]);

  const addCampaign = (campaign) => {
    setCampaigns([...campaigns, campaign]);
  };

  const calculateTotalBudget = () => {
    return campaigns.reduce(
      (total, campaign) => total + parseFloat(campaign.budget || 0),
      0
    );
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" style={{ zIndex: 1300 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            KryptoSense Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Create Campaign" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Drawer>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: `${drawerWidth}px`,
          }}
        >
          <Toolbar />
          <Container>
            <Grid container spacing={3} alignItems="stretch">
              <Grid item xs={12} sm={4}>
                <AnalyticsCards
                  title="Total Campaigns"
                  value={campaigns.length}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <AnalyticsCards
                  title="Total Budget (Crypto)"
                  value={calculateTotalBudget()}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <AnalyticsCards
                  title="Avg. Budget per Campaign"
                  value={
                    campaigns.length > 0
                      ? (calculateTotalBudget() / campaigns.length).toFixed(2)
                      : 0
                  }
                />
              </Grid>
            </Grid>
            <Box mt={4}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Create a Campaign
                </Typography>
                <CampaignForm onAddCampaign={addCampaign} />
              </Paper>
            </Box>
            <Box mt={4}>
              <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h5" gutterBottom>
                  Campaign Dashboard
                </Typography>
                <CampaignDashboard campaigns={campaigns} />
              </Paper>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;

