// fitnessService.js
const { google } = require("googleapis");

const getStepsData = async (user) => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );

  // Set credentials with the user's tokens
  oauth2Client.setCredentials({
    access_token: user.googleAccessToken,
    refresh_token: user.googleRefreshToken,
    scope: "https://www.googleapis.com/auth/fitness.activity.read",
    token_type: "Bearer",
    expiry_date: true,
  });

  const fitness = google.fitness({
    version: "v1",
    auth: oauth2Client,
  });

  const res = await fitness.users.dataset.aggregate({
    userId: "me",
    resource: {
      aggregateBy: [
        {
          dataTypeName: "com.google.step_count.delta",
          dataSourceId:
            "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
        },
      ],
      bucketByTime: { durationMillis: 86400000 }, // Daily aggregation
      startTimeMillis: new Date().setHours(0, 0, 0, 0), // start of today
      endTimeMillis: new Date().setHours(23, 59, 59, 999), // end of today
    },
  });

  return res.data;
};

module.exports = { getStepsData };
