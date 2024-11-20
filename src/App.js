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
} from "@mui/material";
import CampaignForm from "./components/CampaignForm";
import CampaignDashboard from "./components/CampaignDashboard";
import AnalyticsCards from "./components/AnalyticsCards";
import CampaignDashboard from "./components/CampaignDashboard";

function App() {
  return (
    <div>
      {/* Other components like Sidebar or Header */}
      <CampaignDashboard />
    </div>
  );
}

export default App;

const drawerWidth = 240;

const App = () => {
  const [campaigns, setCampaigns] = useState([]);

  const addCampaign = (campaign) => {
    setCampaigns([...campaigns, campaign]);
  };

  const calculateTotalBudget = () => {
    return campaigns.reduce((total, campaign) => total + parseFloat(campaign.budget || 0), 0);
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
            <Grid container spacing={3}>
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
            <CampaignForm onAddCampaign={addCampaign} />
            <CampaignDashboard campaigns={campaigns} />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default App;

