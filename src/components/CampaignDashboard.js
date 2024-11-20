import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore config

const CampaignDashboard = () => {
  const [campaigns, setCampaigns] = useState([]);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "campaigns"));
        const campaignsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCampaigns(campaignsData);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Campaign Dashboard</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Campaign Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Target Wallet</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Budget</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Message</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{campaign.campaignName}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{campaign.targetWallet}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{campaign.budget}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{campaign.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignDashboard;

