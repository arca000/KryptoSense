import React, { useState } from "react";
import { db } from "../firebaseConfig"; // Import the Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

const CampaignForm = () => {
  const [campaignName, setCampaignName] = useState("");
  const [targetWallet, setTargetWallet] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add the data to Firestore
      await addDoc(collection(db, "campaigns"), {
        campaignName,
        targetWallet,
        budget: parseFloat(budget), // Ensure budget is stored as a number
        message,
        createdAt: new Date(), // Optional: Add a timestamp
      });

      alert("Campaign created successfully!");
      // Clear the form fields after submission
      setCampaignName("");
      setTargetWallet("");
      setBudget("");
      setMessage("");
    } catch (error) {
      console.error("Error adding campaign: ", error); // Log the error for debugging
      alert("Failed to create the campaign. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Campaign Name:</label>
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Target Wallet:</label>
        <input
          type="text"
          value={targetWallet}
          onChange={(e) => setTargetWallet(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Budget (in Crypto):</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Create Campaign</button>
    </form>
  );
};

export default CampaignForm;

