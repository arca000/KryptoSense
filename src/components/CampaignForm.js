import React, { useState } from 'react';

const CampaignForm = ({ addCampaign }) => {
    const [campaign, setCampaign] = useState({
        name: '',
        message: '',
        budget: '',
        target: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setCampaign((prevState) => ({
                ...prevState,
                target: checked
                    ? [...prevState.target, value]
                    : prevState.target.filter((item) => item !== value),
            }));
        } else {
            setCampaign({ ...campaign, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCampaign({ ...campaign, id: Date.now() });
        setCampaign({ name: '', message: '', budget: '', target: [] });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Campaign</h2>
            <div>
                <label>Campaign Name:</label>
                <input
                    type="text"
                    name="name"
                    value={campaign.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Message:</label>
                <textarea
                    name="message"
                    value={campaign.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Budget:</label>
                <input
                    type="number"
                    name="budget"
                    value={campaign.budget}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Target Wallets:</label>
                <div>
                    <input
                        type="checkbox"
                        value="High Balance"
                        onChange={handleChange}
                    /> High Balance
                    <input
                        type="checkbox"
                        value="Active Wallets"
                        onChange={handleChange}
                    /> Active Wallets
                </div>
            </div>
            <button type="submit">Create Campaign</button>
        </form>
    );
};

export default CampaignForm;
