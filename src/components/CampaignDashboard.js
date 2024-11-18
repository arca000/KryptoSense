import React from 'react';

const CampaignDashboard = ({ campaigns }) => {
    return (
        <div>
            <h2>Campaign Dashboard</h2>
            {campaigns.length === 0 ? (
                <p>No campaigns created yet.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Message</th>
                            <th>Budget</th>
                            <th>Targets</th>
                            <th>Delivery Rate</th>
                            <th>CTR</th>
                            <th>Conversions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr key={campaign.id}>
                                <td>{campaign.name}</td>
                                <td>{campaign.message}</td>
                                <td>{campaign.budget}</td>
                                <td>{campaign.target.join(', ')}</td>
                                <td>{campaign.deliveryRate || 'N/A'}%</td>
                                <td>{campaign.ctr || 'N/A'}%</td>
                                <td>{campaign.conversions || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CampaignDashboard;
