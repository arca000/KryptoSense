import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const AnalyticsCards = () => {
    const cards = [
        { title: 'Total Campaigns', value: 10 },
        { title: 'Total Budget (Crypto)', value: 50 },
        { title: 'Avg. Budget Per Campaign', value: 5 },
    ];

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                {cards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{card.title}</Typography>
                                <Typography variant="h6">{card.value}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AnalyticsCards;

